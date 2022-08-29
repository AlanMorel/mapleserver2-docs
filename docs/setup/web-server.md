---
sidebar_position: 6
---

# Web Server

You don't need to have the web server running to be able to play, but any UGC content (Profile pictures, items, cubes) will not work.

## Starting the web server

### Visual Studio 2022 (Recommended)

1. Right-Click the MapleServer2 solution and go to properties.

2. In `Common Properties` and `Startup Project`

3. Select `Multiple startup projects:` and select **Start** for `MapleServer2` and `MapleWebServer`


### Visual Studio Code and CLI

1. Open a new terminal and run

```sh
dotnet run --project MapleWebServer/MapleWebServer.csproj
```

### Visual Studio 2022

1. Right-Click the MapleServer2 solution and go to properties.

2. In `Common Properties` and `Startup Project`

3. Select `Multiple startup projects:` and select **Start** for `MapleServer2` and `MapleWebServer`
