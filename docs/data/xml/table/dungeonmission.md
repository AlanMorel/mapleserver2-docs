---
sidebar_position: 4
---

# dungeonmission.xml
Dungeonmission defines every dungeon objective in the game, with each DungeonMission element being a separate mission, that is then defined as a [dungeonRoom](/data/xml/table/dungeonroom)'s partyMissions or userMissions.

applyCount is the amount of times a mission can be completed. Each time the mission is completed, the player's score will increase by maxScore/applyCount
If a mission is isPenaltyType, the player already begins with maxScore, and instead it will be decreased everytime the mission is completed.


**WIP**