---
sidebar_position: 2
---

# How to use the packet resolver

**This only works for packets which are sent from the server to the client.**

## Things you need first

A working MapleServer2. [Setup guide here](/docs/setup/prerequisites)

Understanding how packets work. [Tutorial here](/docs/tutorials/packets)

## How to use

First connect to your server, the resolver will use the first GameSession connected to the server.

Find the OP Code you want to resolve in `SendOp.cs` (MapleServer2/Constants/SendOp.cs).

In your server console type: `resolve (opcode)`, it accepts the values in these formats: `81, 0081, 0x81, 0x0081`

For example: `resolve 81`.

Now the resolver will send a packet to the client with the selected opcode, if the client reports that there was an error with the packet, the resolver will read the error and use the given hint from the error logger.

The errors from the client look something like this: `["sock_exception"] "BCNetworkService::ProcessPacket [type=170][offset=13][hint=Decode4]"`

The resolver now will use that hint and add an INT (Since the hint is "Decode4") to the end of the packet and send it again until the client doesn't give any more errors.

The structure will be saved to an text file in `MapleServer2/PacketStructures/`, they will have the opcode and the name for easy finding.

With the structure saved in the text file, you can change the values of each function to change the behavior of the packet. Packets normally have multiple headers, so you can change the part in which defines the header and delete the rest, then the resolver will continue from the last part.

### Example

`USER_ENV 0x00AA` has a bunch of different headers. On the first use it'll just send zeros so nothing major happened. This is the result:

```csharp
#Generated by MapleServer2 PacketStructureResolver
PacketWriter pWriter = PacketWriter.Of(SendOp.USER_ENV);
pWriter.WriteByte();
pWriter.WriteInt();
```

Lets try to decode with header 8, so we will change the strucutre to:

```csharp
#Generated by MapleServer2 PacketStructureResolver
PacketWriter pWriter = PacketWriter.Of(SendOp.USER_ENV);
pWriter.WriteByte(8);
```

Now the resolver will run and the result is this:

```csharp
#Generated by MapleServer2 PacketStructureResolver
PacketWriter pWriter = PacketWriter.Of(SendOp.USER_ENV);
pWriter.WriteByte(8);
pWriter.WriteInt();
pWriter.WriteInt();
```

Since this has already been decoded, we know that the first int is a loop count. So we can change the value of it and see how the loop structure looks like.

```csharp
#Generated by MapleServer2 PacketStructureResolver
PacketWriter pWriter = PacketWriter.Of(SendOp.USER_ENV);
pWriter.WriteByte(8);
pWriter.WriteInt(2); // loop count
```

And this is the result:

```csharp
#Generated by MapleServer2 PacketStructureResolver
PacketWriter pWriter = PacketWriter.Of(SendOp.USER_ENV);
pWriter.WriteByte(8);
pWriter.WriteInt(2); // loop count
pWriter.WriteInt(); // 1
pWriter.WriteInt(); // 1
pWriter.WriteInt(); // 2
pWriter.WriteInt(); // 2
pWriter.WriteInt();
```

Now we can see that the mode 8 of the packet `0x00AA` has structure like this:

```txt
Short   - OPCODE
Byte    - Header/Mode
Int     - Loop counter
    Int     - Some value
    Int     - Some value
Int - Some value
```

Using the packet resolver on the packet from the 'Understanding packet' tutorial, we can finally find the correct structure and it looks like this:

```csharp
#Generated by MapleServer2 PacketStructureResolver
PacketWriter pWriter = PacketWriter.Of(SendOp.RESPONSE_CUBE);
pWriter.WriteByte(20);
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteUnicodeString();
pWriter.WriteLong();
pWriter.WriteLong();
pWriter.WriteByte();
```

## Branches

Sometimes some packets have branches. It can be an simple boolean (true/false) or maybe if the item uid is in the character inventory.

### Branches with booleans

For example the packet `UGC 0x006D` mode 7, this is the structure:

```csharp
#Generated by MapleServer2 PacketStructureResolver
PacketWriter pWriter = PacketWriter.Of(SendOp.UGC);
pWriter.WriteByte(7);
pWriter.WriteLong();
pWriter.WriteByte();
```

Lets change the last byte to a one and this is the difference:

```csharp
#Generated by MapleServer2 PacketStructureResolver
PacketWriter pWriter = PacketWriter.Of(SendOp.UGC);
pWriter.WriteByte(7);
pWriter.WriteLong();
pWriter.WriteByte(1);
pWriter.WriteByte();
pWriter.WriteInt();
pWriter.WriteLong();
pWriter.WriteLong();
pWriter.WriteUnicodeString();
pWriter.WriteUnicodeString();
pWriter.WriteLong();
pWriter.WriteUnicodeString();
pWriter.WriteByte();
pWriter.WriteByte();
pWriter.WriteLong();
pWriter.WriteByte();
pWriter.WriteUnicodeString();
```

### Branches with another values

Sometimes if there is a loop inside the structure it'll need a value different from zero, but what about item UID?

For example the packet `ITEM_PUT_ON 0x0025`, this is the structure (MapleServer2/Packets/EquipmentPacket.cs):

```csharp
PacketWriter pWriter = PacketWriter.Of(SendOp.ITEM_PUT_ON);
pWriter.WriteInt(player.ObjectId);
pWriter.WriteInt(item.Id);
pWriter.WriteLong(item.Uid);
pWriter.WriteUnicodeString(equipSlot.ToString());
pWriter.WriteInt(item.Rarity);
pWriter.WriteByte();
pWriter.WriteItem(item);
```

Lets see how the structure looks using the resolver:

```csharp
#Generated by MapleServer2 PacketStructureResolver
PacketWriter pWriter = PacketWriter.Of(SendOp.ITEM_PUT_ON);
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteLong();
pWriter.WriteUnicodeString();
pWriter.WriteInt();
pWriter.WriteByte();
```

It's almost the same but it's missing everything from the WriteItem function! The client didn't return an error because it couldn't find the item UID we sent with the resolver (It's always zero), let's change the structure to have some correct values and try again:

```csharp
#Generated by MapleServer2 PacketStructureResolver
PacketWriter pWriter = PacketWriter.Of(SendOp.ITEM_PUT_ON);
pWriter.WriteInt(10000126); // character object id
pWriter.WriteInt(12060107); // item id
pWriter.WriteLong(39); // item uid
pWriter.WriteUnicodeString("RI"); // equip slot
pWriter.WriteInt(4); // item rarity
pWriter.WriteByte();
```

And here is the result from the resolver:

```csharp
#Generated by MapleServer2 PacketStructureResolver
PacketWriter pWriter = PacketWriter.Of(SendOp.ITEM_PUT_ON);
pWriter.WriteInt(10000126);
pWriter.WriteInt(12060107);
pWriter.WriteLong(39);
pWriter.WriteUnicodeString("RI");
pWriter.WriteInt(4);
pWriter.WriteByte();
pWriter.WriteInt(); // Write item starts here!
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteLong();
pWriter.WriteLong();
pWriter.WriteLong();
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteByte();
pWriter.WriteLong();
pWriter.WriteShort();
pWriter.WriteByte();
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteByte();
pWriter.WriteShort();
pWriter.WriteShort();
pWriter.WriteInt();
pWriter.WriteShort();
pWriter.WriteShort();
pWriter.WriteInt();
pWriter.WriteShort();
pWriter.WriteShort();
pWriter.WriteInt();
pWriter.WriteShort();
pWriter.WriteShort();
pWriter.WriteInt();
pWriter.WriteShort();
pWriter.WriteShort();
pWriter.WriteInt();
pWriter.WriteShort();
pWriter.WriteShort();
pWriter.WriteInt();
pWriter.WriteShort();
pWriter.WriteShort();
pWriter.WriteInt();
pWriter.WriteShort();
pWriter.WriteShort();
pWriter.WriteInt();
pWriter.WriteShort();
pWriter.WriteShort();
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteByte();
pWriter.WriteLong();
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteByte();
pWriter.WriteInt();
pWriter.WriteByte();
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteByte();
pWriter.WriteInt();
pWriter.WriteInt();
pWriter.WriteByte();
pWriter.WriteByte();
pWriter.WriteByte();
pWriter.WriteByte();
pWriter.WriteByte();
pWriter.WriteLong();
pWriter.WriteLong();
pWriter.WriteUnicodeString();
```
