---
sidebar_position: 3
---

# Frequently-asked Questions

## Me want play gaem can I pley gaem I love ms2 where gaem?

This emulator is a work in progress and most parts of the game are incomplete. There is some basic combat and some over world mobs.

## I found a bug or something isn't working right in-game, what should I do?

You can submit an issue on [GitHub](https://github.com/AlanMorel/MapleServer2/issues) here.

## How do I use the emulator or how does this thing work?

Follow the steps from top to bottom in setup to get a local server hosted and a client that can connect to the server. You can follow the setup and just change the IPs to host a non-local server.

## I'm not great with English or I find text guides confusing, are there any other resources?

There are a couple video guides that have been made, but they will not be entirely up to date. Here is the latest one [them](https://www.youtube.com/watch?v=t_8rBcu6Sv8).

## Are there commands or how do I spawn items, etc.?

The commands can be found by typing `/commands` in-game, and you can find map/item/mob ids by using the /find command. There is also this great explanation on how to find the ids inside the Xml file by Namity:

```txt
Where to easily locate IDs:
Items => xml.m2d/string/en/itemname.xml
Maps => xml.m2d/string/en/mapname.xml
Mobs and NPCs => xml.m2d/string/en/npcname.xml
Quests => xml.m2d/string/en/questdescription_[type].xml
Buffs => xml.m2d/string/en/koradditionaldescription.xml
```

You can use [Orion 2 Repacker](https://github.com/AngeloTadeucci/Orion2-Repacker) to browse through the .m2d/h files.

## The server is running but nothing is happening

The execution of program was paused because the console has something selected or the program crashed.

- Make sure in the console window, nothing is selected. You can check by looking at the title, if it says "Select ..." you need to click once inside or press `ESC` to stop selecting.

- Look inside the editor (VSCode, Visual Studio, etc) to see if you have any exceptions. Check [Frequently Seen Errors](/docs/fse) to see if the error is documentaded, if not ask for help in the discord or create an issue in the github repo!

## I'm following the setup but it's not working?

First, confirm that you've downloaded/installed all the necessary components for the server and the correct client, [detailed here](/docs/setup/resources-setup). Then check the [common errors](/docs/fse) to see if they resolve the issue. If you still have problems that are not listed in this faq you can head over to #help and ask for help.
