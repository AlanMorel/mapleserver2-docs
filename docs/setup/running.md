---
sidebar_position: 5
---

# Running the Emulator

## Visual Studio Code Guide

1. Click Run -> Start debugging or use the shortcut (F5).

2. Select the environment as ".NET 5+ and .NET CORE", after a while a popup at the bottom right will appear, "Required assets to build and debug are missing from 'MapleServer2'. Add them?". Select **Yes** and then select **MapleServer2** at the top.

3. In `.vscode/Launch.json`, change the `console` option to `externalTerminal` or you might have some errors. (Or you can use this preconfigured **launch.json**!)

    ```json
    {
        // Use IntelliSense to learn about possible attributes.
        // Hover to view descriptions of existing attributes.
        // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "name": "Launch GameDataParser",
                "type": "coreclr",
                "request": "launch",
                "preLaunchTask": "build",
                "program": "${workspaceFolder}/GameDataParser/bin/Debug/net6.0/GameDataParser.dll",
                "args": [],
                "cwd": "${workspaceFolder}/GameDataParser",
                "stopAtEntry": false,
                "console": "externalTerminal"
            },
            {
                "name": "Launch MapleServer2",
                "type": "coreclr",
                "request": "launch",
                "preLaunchTask": "build",
                "program": "${workspaceFolder}/MapleServer2/bin/Debug/net6.0/MapleServer2.dll",
                "args": [],
                "cwd": "${workspaceFolder}/MapleServer2",
                "console": "externalTerminal",
                "stopAtEntry": false
            },
            {
                "name": "Launch MapleWebServer",
                "type": "coreclr",
                "request": "launch",
                "preLaunchTask": "build",
                "program": "${workspaceFolder}/MapleWebServer/bin/Debug/net6.0/MapleWebServer.dll",
                "args": [],
                "cwd": "${workspaceFolder}/MapleWebServer",
                "console": "externalTerminal",
                "stopAtEntry": false
            }
        ]
    }
    ```

4. Run again and it should start the server with debugger.

## Visual Studio 2022 Guide

1. Click RUN or use the shortcut (F5).

## CLI

1. Navigate to the MapleServer2 folder.

2. Run

```sh
dotnet run --project MapleServer2/MapleServer2.csproj
```
