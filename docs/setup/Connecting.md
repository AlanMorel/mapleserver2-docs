---
sidebar_position: 8
---

# Connecting to the Server

You can choose between starting the client manually or using a launcher to do the work for you. If you do not plan to switch between different servers (local and online), you could choose the manual method, which will guide you in creating a shortcut for the client that connects to the server. Alternatively, you can use a launcher that does all the work for you. In the end, starting the client from a shortcut might be faster than first starting the launcher, but the launcher allows for easy configuration, if needed. Your choice.

## Launcher

1. Download [MS2 Launcher](https://github.com/Clockworkx/MS2-Launcher/releases/download/v1.0/MS2.Launcher.v1.0.1.7z).
2. Extract the launcher to a folder.
3. Make a shortcut of **MS2Launcher.exe** (Right click -> Send to -> Desktop)
4. Start the Launcher.
5. You can configure your IPs using the disk-pen symbol on the bottom-right of the launcher. Change your IP and Port and click on the save icon.
6. Select whether you want to play Local (using the server on your PC) or Online (the remote server configured in step 5).
7. Click Start. On first launch the Launcher will ask you to select your MapleStory2.exe location.
8. Enjoy.

-   Note: You can see the online status of the server in the top-right corner of the corresponding server.

## Manual

If your server is running on your PC you can proceed with Connecting to Localhost. If you are playing on a server that is NOT on your computer, go to the Connecting to Remote Server section.

### Connecting to Localhost

#### No Port Changes

1. If you have NOT done any changes to your server ports, you are ready to play: Double-click the **MapleStory2.exe** which is located in `Your_MapleStoryClient_Installation_Path\appdata\MapleStory2.exe`.
2. You can right-click -> Send to -> Desktop (create shortcut), so you can start MapleStory2 more easily.
3. See Login Info for info on login data.

#### Port Changes

1. If you made changes to your server ports, you need to create a shortcut as in Step 3 of No Port Changes.
2. Go to the properties of the shortcut. In the Target field, add your server's ip and **LOGIN** port (can be seen in the .env file) like so: `...appdata\MapleStory2.exe" --ip=127.0.0.1 --port=20001 --nxapp=nxl --lc=EN`
3. Click OK and you can now start the game via your SHORTCUT.
4. See Login Info for info on login data.

### Login Info

You can select any server. The id and password that you enter will be used to CREATE an account, once you click on login. So make sure to remember your data. Accounts are auto-generated, so you can use whatever username and password you want.

-   Note: You can also leave both id and password empty, which will create an account with no id and no password. Everyone will be able to log into this account.

### Connecting to Remote Server

1. Follow the steps 1 and 2 of Connecting to Localhost: No Port Changes, but in step 2 you change the parameter details as following:
2. In the `--ip=` parameter you enter the ip of the computer the MapleServer is running on.
3. In the `--port=` parameter you enter the **LOGIN** server port of the MapleServer that you want to connect to.
