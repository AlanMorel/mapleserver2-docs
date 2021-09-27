---
sidebar_position: 3
---

# Resources Setup

1. Create a folder named `Resources` in the `GameDataParser` and `Maple2Storage` folders if they don't already exist.

2. Navigate to your MapleStory2 client folder and then go to `appdata/Data` and copy `Xml.m2d` and `Xml.m2h` then paste them into `GameDataParser/Resources`.

3. Download a MapleStory2 client if not already downloaded. Note that it needs to have `Orion2.dll` injected to actually connect to the server.

4. Then in your MapleStory2 client folder go to `appdata/Data/Resource` and copy `Exported.m2d` and `Exported.m2h` then paste them into `GameDataParser/Resources`.

## Visual Studio Setup

1. Open the `MapleServer2` solution in Visual Studio.
2. Right click on the `GameDataParser` project folder and select `Set as Startup Project`. Then run the project without a debugger (Ctrl + F5).
3. After it is finished set the startup project back to `MapleServer2`.

## Visual Studio Code Setup

1. Open the solution as a folder and then go to `Extensions` and install the C# extension.
2. Download .NET 6.0 SDK if not already downloaded.
3. After opening the project run `dotnet restore` to fix dependency issues.
4. Open a terminal and run: `dotnet run -c Release -p gamedataparser/gamedataparser.csproj`
