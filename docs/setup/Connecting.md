---
sidebar_position: 8
---

# Connecting to the Server

You can choose between starting the client manually or using a launcher to do the work for you.
If you do not plan to switch between different servers (local and online), you might choose the manual method, which will guide you in creating a shortcut for the client that connects to the server.
Alternatively, you can use a launcher that does all the work for you. In the end, starting the client from a shortcut might be faster than first starting the launcher, but the launcher allows for easy configuration, if needed. Your choice.

## Launcher
1. Download [MS2 Launcher](https://github.com/Clockworkx/MS2-Launcher/releases/download/v1.0/MS2.Launcher.v1.0.1.7z).
2. Extract the launcher to a folder.
3. Make a shortcut of MS2Launcher.Exe (rightclick->Send to->Desktop)
4. Start the Launcher.
5. You can configure your IPs using the disk-pen symbol on the bottom-right of the launcher. Change your IP and Port and click on the save icon.
6. Select whether you want to play Local (using the server on your PC) or Online (the remote server configured in step 5).
7. Click Start. On first lauunch the Launcher will ask you to select your MapleStory2.exe.
8. Enjoy.

* Note: You can see the online status of the server in the top-right corner of the corresponding server.

## Manual

If your server is running on your PC you can proceed with Connecting to Localhost. If you are playing on a server that is NOT on your computer, go to the Connecting to Remote Server section.

### Connecting to Localhost

1. If you have NOT done any changes to your server port, you are ready to play: Doubleclick the MapleStory2.exe which is located in Your_MapleStoryClient_Installation_Path\appdata\MapleStory2.exe.
   
2. You can select any server. The id and password that you enter will be used to CREATE an account, once you click on login. So make sure to remember your data. 

3. You can rightclick -> Send to -> Desktop (create shortcut), so you can start Maple Story from your Desktop, next time.

4. If you have NOT done any changes to your server ports, you are ready to play. Enjoy. 

5. If you made changes to your server ports, you need to create a shortcut as in Step 3.
   
6. Go to the properties of the shortcut and in the Target field you add your ip and LOGIN port (can be seen in your .env file) like so:
    ...appdata\MapleStory2.exe" --ip=127.0.0.1 --port=20001 --nxapp=nxl --lc=EN

    Click OK and you can now start the game via your SHORTCUT. 

* Note: You can also leave both id and password empty, which will create an account with no id and no password. Everyone will be able to log into this account.

### Connecting to Remote Server
1. If you want to join a server running on another computer, refer to step 5 and 6 of Connecting to Localhost. 
2. In the --ip= parameter you enter the ip of the computer the maple server is running on.
3. In the --port= parameter you enter the LOGIN server port of the maple server that you want to connect to. 
