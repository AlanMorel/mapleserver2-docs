---
sidebar_position: 5
---

# Running the Emulator

## Visual Studio 2022 Guide

1. Click RUN or use the shortcut (F5).

## Visual Studio Code Guide

1. Click Run -> Start debugging or use the shortcut (F5).
1. Select the environment as .NET CORE and MapleServer2.
1. In `.vscode/Launch.json`, change the `console` option to `externalTerminal` or you might have some errors.
1. Run again and it should start the server with debugger.

## CLI

1. Navigate to the MapleServer2 folder.
1. Run

```txt
dotnet run --project MapleServer2/MapleServer2.csproj
```
