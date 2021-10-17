---
sidebar_position: 5
---

# Running the Emulator

## Visual Studio Code Guide

1. Click Run -> Start debugging or use the shortcut (F5).

2. Select the environment as .NET CORE and MapleServer2.

3. In `.vscode/Launch.json`, change the `console` option to `externalTerminal` or you might have some errors.

4. Run again and it should start the server with debugger.

## Visual Studio 2022 Guide

1. Click RUN or use the shortcut (F5).

## CLI

1. Navigate to the MapleServer2 folder.

2. Run

```sh
dotnet run --project MapleServer2/MapleServer2.csproj
```
