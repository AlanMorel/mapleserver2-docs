---
sidebar_position: 3
---

# Editor Setup

## Visual Studio Code Setup

1. Download .NET 6.0 SDK, if not already downloaded.

2. Open the solution as a folder and then go to `Extensions` and install the [C# extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp).

3. Open the project as a folder. File -> Open Folder -> Select the **MapleServer2** folder

4. After opening the project, open terminal (Terminal -> New Terminal) and run

```sh
dotnet run --project GameDataParser/GameDataParser.csproj
```

### Lua Setup

Install the [Lua formatter extension](https://marketplace.visualstudio.com/items?itemName=Koihik.vscode-lua-format&ssr=false#overview). Then, inside `settings.json` for your Visual Studio Code `(CTRL + SHIFT + P -> type: 'settings (json)')`, add the following:

```json
"editor.formatOnSave": true,
"[lua]": {
    "editor.defaultFormatter": "Koihik.vscode-lua-format",
},
"vscode-lua-format.configPath": ".luaFormatConfig"
```

This enables the formatter on Lua files and formats them when you save them. It will load the `.luaFormatConfig` file from the project's root directory.

## Visual Studio 2022 Setup

1. Open the `MapleServer2` solution in Visual Studio.

2. Right click on the `GameDataParser` project folder and select `Set as Startup Project`. Then run the project (F5).

3. After it is finished set the startup project back to `MapleServer2`.

## CLI Setup

You can opt to run this emulator without an editor.

1. Download .NET 6.0 SDK, if not already downloaded.

2. Navigate to the MapleServer2 folder

3. Run

```sh
dotnet run --project GameDataParser/GameDataParser.csproj
```
