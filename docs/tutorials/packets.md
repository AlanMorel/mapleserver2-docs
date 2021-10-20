---
sidebar_position: 1
---

# Understanding packets

## What is a packet and a sniff

A packet is how the server and the client share information, an array of bytes in hexadecimal (in the case of MapleStory2).

Sniffs are simply a collection of packets where the application (in our case MapleShark2) is intercepting the information from the client and the server and displaying for us, so we can easily see and understand what is happening.

## Tools needed

[MapleShark2](https://github.com/kOchirasu/MapleShark2/releases)

Packet definitions: [GMS2](/resources/mapleshark2/gms/PacketDefinitions.xml) / [KMS2](/resources/mapleshark2/kms/PacketDefinitions.xml)

## Setting up MapleShark2

After unziping the downloaded file from github.

Open **MapleShark2.exe** and it will prompt you to select the network interface being used, you should select the interface in which you are using to connect to internet (ethernet or wireless interface) and leave the default ports.

To use the packet definitions you first need to open an sniff, then MapleShark2 will create an folder with the version of the game inside the `scripts/0` folder. You will need to add the **PacketDefinitions.xml** to that folder and fix the version of the PacketDefinition, just open the xml file and change the `<Version>xxxx</Version>` to the correct version.

If you're having any problems make sure to [download npcap](https://nmap.org/npcap/#download) -> "Npcap 1.55 installer".

You can select the loopback interface if you want to be able to log packets from your localhost.

## How to read values in an array of bytes

**Byte** and **boolean** is 2 digits in the byte array, following that:

**Short** is equal to 2 bytes; i.e:

```csharp
27 00
```

**Integer** and **float** are equal to 4 bytes; i.e:

```csharp
38 00 00 00
```

**Long** is equal to 8 bytes; i.e:

```csharp
D0 01 00 00 00 00 00 00
```

**Unicode string** is formed by 2 bytes (one short) determining the size of the string and after that each character as 2 bytes (one short). i.e:

```csharp
06 00 63 00 72 00 65 00 61 00 74 00 65 00
```

To read the value of the bytes in an array, first you need the **type** of the value, for example a short which is two bytes "27 00", then you need to swap the [endianess](https://en.wikipedia.org/wiki/Endianness) and then you can use windows calculator on programmer mode and add the hexadecimal to read the value as decimal.

_(Ok this is too hard, I wanna give up)_ Hold up, there is an easier way which is to use MapleShark2 to highlight the section and then look at the properties tab, the program will try its best to translate for you.

## Understanding a packet

Let's look at this packet from an user sending an message, this is the packet in which the client is sending:

The first 2 bytes represent the OPCODE which defines to the client and server what this packet is related to, in this case SendUserChat. We know the next value is an int because after 4 bytes there is a clear separation to the next value which is an string.

```csharp
[11 00] [00 00 00 00] [0B 00 68 00 65 00 6C 00 6C 00 6F 00 20 00 77 00 6F 00 72 00 6C 00 64 00]
[00 00 00 00 00 00 00 00 00 00]
```

_(Ok, how do you know it's a string?)_ I know it's a string because I can see clearly the text in MapleShark2 like in this image: ![image](https://i.imgur.com/54Qelht.png)

The rest of the packet is just zeros so we can't define clearly what they mean.

That was easy but too easy, let's look at another example, this packet is sent to the client when you login into the game and we know it contains the name of your home by looking at it in MapleShark2 ![image](https://i.imgur.com/6UMT2b4.png)

Like the previous example, the first two bytes are the OPCODE of the packet. Translating the next 4 bytes to an int looks too weird ("1194992404"), so maybe it isn't an int.

```csharp
69 00 [14 23 3A 47] 00 80 0B B2 03 00 00 00 00 00 00 00 00 00 00 00 00
0F 00 53 00 70 00 61 00 72 00 6B 00 79 00 6D 00 6F 00 64 00 20 00 48 00 6F 00 75 00 73 00 65 00
F0 FB 5C 91 07 00 00 00 4E 9A F0 60 00 00 00 00 01
```

Now it's a good time to talk about packet headers, usually they are used to separate functions between one OPCODE, if an OPCODE has too many uses you will probably find a lot of different implementations.

Packet headers are usually one byte, so in this case if we add an byte as a header and then look at the next bytes we can see there is a normal looking number (`23 3A 47 00` = 4667939), we don't know what it is exactly but it's some kind of an id.

```csharp
69 00 [14] [23 3A 47 00] 80 0B B2 03 00 00 00 00 00 00 00 00 00 00 00 00
0F 00 53 00 70 00 61 00 72 00 6B 00 79 00 6D 00 6F 00 64 00 20 00 48 00 6F 00 75 00 73 00 65 00
F0 FB 5C 91 07 00 00 00 4E 9A F0 60 00 00 00 00 01
```

Moving forward to the next bytes, we can see that it looks like another int and it has a familiar value (`80 0B B2 03` = 62000000) which is the map id for the house.

```csharp
69 00 14 23 3A 47 00 [80 0B B2 03] 00 00 00 00 00 00 00 00 00 00 00 00
0F 00 53 00 70 00 61 00 72 00 6B 00 79 00 6D 00 6F 00 64 00 20 00 48 00 6F 00 75 00 73 00 65 00
F0 FB 5C 91 07 00 00 00 4E 9A F0 60 00 00 00 00 01
```

Here we see a bunch of zeros in this case exactly 12. It could be a long and one int/float, three ints/floats and other types, since we don't which values is the correct one, lets leave it as 12 unknowns zeros.

```csharp
69 00 14 23 3A 47 00 80 0B B2 03 [00 00 00 00 00 00 00 00 00 00 00 00]
0F 00 53 00 70 00 61 00 72 00 6B 00 79 00 6D 00 6F 00 64 00 20 00 48 00 6F 00 75 00 73 00 65 00
F0 FB 5C 91 07 00 00 00 4E 9A F0 60 00 00 00 00 01
```

Next by looking at MapleShark2 we see there is a string which is the house name of the player. (`0F 00 53 00 70 00 61 00 72 00 6B 00 79 00 6D 00 6F 00 64 00 20 00 48 00 6F 00 75 00 73 00 65 00` = "Sparkymod House")

```csharp
69 00 14 23 3A 47 00 80 0B B2 03 00 00 00 00 00 00 00 00 00 00 00 00
[0F 00 53 00 70 00 61 00 72 00 6B 00 79 00 6D 00 6F 00 64 00 20 00 48 00 6F 00 75 00 73 00 65 00]
F0 FB 5C 91 07 00 00 00 4E 9A F0 60 00 00 00 00 01
```

Next we see five numbers, if we translate the first four to an int, it looks weird (`F0 FB 5C 91` = -1856177168), but also we see zeros after the fitfh number, so lets try to decode as a long. Decoding as a long gives the number (`F0 FB 5C 91 07 00 00 00` = 32503561200) which also doesn't gives much information but looking at the properties tab in MapleShark2 it shows as an EpochDate for "30/12/2999 15:00", so this could be the home expiration date.

![image](https://i.imgur.com/Xsk7zMR.png)

```csharp
69 00 14 23 3A 47 00 80 0B B2 03 00 00 00 00 00 00 00 00 00 00 00 00
0F 00 53 00 70 00 61 00 72 00 6B 00 79 00 6D 00 6F 00 64 00 20 00 48 00 6F 00 75 00 73 00 65 00
[F0 FB 5C 91 07 00 00 00] 4E 9A F0 60 00 00 00 00 01
```

Continuing we see another long as an epoch date. (`4E 9A F0 60 00 00 00 00` = "15/07/2021 20:27") and lastly we see a byte/boolean which we don't know what is means.

```csharp
69 00 14 23 3A 47 00 80 0B B2 03 00 00 00 00 00 00 00 00 00 00 00 00
0F 00 53 00 70 00 61 00 72 00 6B 00 79 00 6D 00 6F 00 64 00 20 00 48 00 6F 00 75 00 73 00 65 00
F0 FB 5C 91 07 00 00 00 [4E 9A F0 60 00 00 00 00] [01]
```

So finally here is the final structure of the packet

```csharp
[69 00] - OPCODE
[14] - Header: 20
[23 3A 47 00] - Some id: 4667939
[80 0B B2 03] - Map id: 62000000
[00 00 00 00 00 00 00 00 00 00 00 00] - Unknown zeros
[0F 00 53 00 70 00 61 00 72 00 6B 00 79 00 6D 00 6F 00 64 00 20 00 48 00 6F 00 75 00 73 00 65 00] - Home name: Sparkymod House
[F0 FB 5C 91 07 00 00 00] - Expiration? date: 30/12/2999 15:00
[4E 9A F0 60 00 00 00 00] - House creation date: 15/07/2021 20:27
[01] - Unknown byte/boolean
```
