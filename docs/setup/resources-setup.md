---
sidebar_position: 2
---

# Resources Setup

1. Download the MapleStory2 client with Orion2 already injected [here](/docs/setup/prerequisites), if not already downloaded.

2. Download the MapleServer2 [github repository](https://github.com/AlanMorel/MapleServer2). It is highly recommended to clone or fork the repository: If you do so, you can update to the latest Server changes using GitHub Desktop and even contribute your code changes easily.

3. Create a folder named `Resources` in the `MapleServer2/GameDataParser` AND `MapleServer2/Maple2Storage` folders.

4. Navigate to your **MapleStory2 CLIENT folder** and then go to `appdata/Data` and copy `Xml.m2d` and `Xml.m2h`, then paste them into `MapleServer2/GameDataParser/Resources`.

5. Then in your **MapleStory2 CLIENT folder** go to `appdata/Data/Resource` and copy `Exported.m2d`, `Exported.m2h`, `PrecomputedTerrain.m2d`, `PrecomputedTerrain.m2h`, then paste them into `MapleServer2/GameDataParser/Resources`.
