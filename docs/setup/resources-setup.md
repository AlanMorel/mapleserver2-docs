---
sidebar_position: 3
---

# Resources Setup

1. Download the MapleStory2 client with Orion2 already injected [here](https://drive.google.com/file/d/1NxSNP7AB-BgPlYavXPAuTi1ay2TR0uwV/view), if not already downloaded.

1. Download the MapleServer2 [github repository](https://github.com/AlanMorel/MapleServer2), it's highly recommended to clone or fork the repository.

1. Create a folder named `Resources` in the `GameDataParser` and `Maple2Storage` folders.

1. Navigate to your **MapleStory2 CLIENT folder** and then go to `appdata/Data` and copy `Xml.m2d` and `Xml.m2h` then paste them into `GameDataParser/Resources`.

1. Then in your **MapleStory2 CLIENT folder** go to `appdata/Data/Resource` and copy `Exported.m2d` and `Exported.m2h` then paste them into `GameDataParser/Resources`.

## Visual Studio 2022 Setup

1. Open the `MapleServer2` solution in Visual Studio.
2. Right click on the `GameDataParser` project folder and select `Set as Startup Project`. Then run the project (F5).
3. After it is finished set the startup project back to `MapleServer2`.

## Visual Studio Code Setup

1. Download .NET 6.0 SDK, if not already downloaded.
1. Open the solution as a folder and then go to `Extensions` and install the [C# extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp).
1. Open the project as a folder. File -> Open Folder -> Select the **MapleServer2** folder
1. After opening the project, open terminal (Terminal -> New Terminal) and run

```sh
dotnet run --project GameDataParser/GameDataParser.csproj
```

## CLI Setup

1. Download .NET 6.0 SDK, if not already downloaded.
1. Navigate to the MapleServer2 folder
1. Run

```sh
dotnet run --project GameDataParser/GameDataParser.csproj
```
