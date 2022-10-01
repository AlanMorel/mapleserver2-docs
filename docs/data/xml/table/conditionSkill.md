---
sidebar_position: 4
---

# `<conditionSkill> & <beginCondition>`

## `<conditionSkill>` & `<splashSkill>`

These two nodes are used in skill xmls in `xml\skill\` and additional effect xmls in `xml\additionaleffect\`.
Their purpose is to tell a skill or effect to fire off a trigger under certain conditions. The exact conditions change depending on where they are located.
`<splashSkill>`s are functionally the same as `<conditionSkill>`s except the `splash` field is always set to `1`.
When `splash` is set to `1` a `<conditionSkill>` will fire off a splash/region effect skill. When it is set to `0` it will attempt to activate a new additional effect on a target.

In skills, `<conditionSkill>` can appear in two different places: at the root of a `<level>` node or inside of `<attack>` nodes.
For passives, `<conditionSkill>` nodes that appear in `<level>` will activate the moment they are specced into and/or when the player spawns.
For activated skills, `<conditionSkill>` nodes that appear in `<level>` will activate at the same time the skill is activated.
Each of these targets the player who owns the skill.
`<conditionSkill>` nodes that are inside an `<attack>` node will activate on whatever target the skill hit.

In additional effects, `<conditionSkill>` can appear at the root of a `<level>` node.
Most of these are activated whenever the effect ticks, but some have `eventCondition`s in them that change them to fire off when certain game events trigger.
`eventCondition` is only ever set in additional effects inside the `<conditionSkill>` nodes in a `<level>` node except for one special case.
A specific striker skill has an `eventCondition` in the effect's `<beginCondition>` and it dictates when the whole effect ticks, not just that node.

## `<conditionSkill>` attributes

| Name | Value |
|-|-|
| `splash` | **boolean** - Fire off a region skill if `1`. Activate an effect if `0`. *Always 1 in `splash="1"`* |
| `randomCast` | **boolean**, *optional* - *Always 1. Only appears on e`splash="0"`* |
| `level` | **integer** - The level of the skill or effect to apply or fire |
| `skillID` | **id** - The id of the skill or effect to apply or fire |
| `linkSkillID` | **id**, *optional* |
| `overlapCount` | **integer**, *optional* - *Only appears in `xml\skill\`. Only appears on `splash="0"`* |
| `skillTarget` | **SkillTarget enum** - Specifies what the skill or effect should attach to or fire at |
| `skillOwner` | **SkillOwner enum** - Specifies who or what should be credited for the trigger's effects |
| `delay` | **integer** - Specifies how long to wait before starting the effect in milliseconds |
| `removeDelay` | **integer**, *optional* - Specifies how long to wait before removing a region skill. *Only appears on *`splash="1"`* |
| `interval` | **integer** - Specifies time between fires if multiple fires are required |
| `immediateActive` | **boolean** - Fire effect immediately if `1`. Delay the effect an interval if `0` |
| `fireCount` | **integer** - Fires the trigger the specified amount of times |
| `nonTargetActive` | **boolean** - Only used when `splash="1"`. Fire the region skill on the selected target if `0`. Fires the region skill where the parent was triggered if `1` |
| `useDirection` | **boolean** - Don't align the region skills if `0`. Align the region skills if `1` |
| `onlySensingActive` | **boolean** - Activate on entities spawned from skills? (Wizard's Ice Cream Time or Heavy Gunner's poison trap). *Always 0 in `xml\additionaleffect\`* |
| `dependOnCasterState` | **boolean** - Stop firing if caster state changes. (Runeblade's Echoing Blade). *Always 0 in `xml\additionaleffect\`* |
| `activeByIntervalTick` | **boolean** - Activates the spawned skill or effect regardless of its tick settings like `immediateActive`. *Always 0 in `xml\skill\`* |
| `dependOnDamageCount` | **boolean** - Only activate if the attack doesn't roll a **Miss!** *Always 0 in `xml\additionaleffect\`* |
| `chain` | **integer?**, *optional* - *Only appears in `xml\additionaleffect\`. Always `1`* |
| `chainDistance` | **integer**, *optional* - *Only appears in `xml\additionaleffect\`. Always `1`* |
| `Independent` | **boolean**, *optional* - *The capitalization is not a typo. *Only appears in `xml\skill\`. Always `1`. Only appears once* |

## SkillTarget Enum

| Name | Value |
|-|-|
| 0 | `SkillTarget` - Target whatever was hit by the skill or effect that applied it |
| 1 | `Owner` - Target the current parent of the trigger's source |
| 2 | `Target` - Used in events. Target the target of the event that was fired |
| 3 | `Caster` - Target the caster that is credited with the trigger |
| 4 | `PetOwner` - Target the owner of the pet that fired the trigger |

## SkillOwner Enum

| Index | Value |
|-|-|
| 0 | `Inherit` - Credit to the current caster |
| 1 | `Owner` - Credit to the parent of the trigger's source |
| 2 | `Target` - Credit to the target of the trigger |
| 3 | `Caster` - Credit to the caster |
| 5 | `Attacker` - Credit to the caster that fired the event |

## `<beginCondition>`

This node is used to control skill activations, `<conditionSkill>` triggers, and additional effect ticks.
When used in skills it determines whether a skill can be casted or not.
When used in `<condiitonSkill>` triggers it determines whether the trigger can be fired or not. It is also used to configure event listeners.
When used in additional effects it determines if an effect tick can be fired. It does not appear to determine the life time of an additional effect.

## `<beginCondition>` attributes

| Name | Value |
|-|-|
| `level` | **integer** |
| `gender` | **Gender enum** - Only fire when the target is a certain gender. `0` for male, `1` for female, `2` for either. *`0` appears to never be used* |
| `target` | **boolean** - *Always 0 in `xml\additionaleffect\`* |
| `probability` | **float** - Probability to activate, on a scale of 0 to 1 |
| `invokeEffectFactor` | **boolean** - *Always 0 in `xml\additionaleffect\`* |
| `cooldownTime` | **float** - How long should pass between activations in seconds. *Always 0 in `xml\additionaleffect\`* |
| `defaultRechargingCooldownTime` | **float**, *optional* - Time length in seconds. *Always 0 in `xml\additionaleffect\`* |
| `useCoolDownShowUI` | **boolean** - *Always 0 in `xml\additionaleffect\`* |
| `allowDeadState` | **boolean** - *Always 0 in `xml\skill\`* |
| `requireDurationWithoutDamage` | **float** - *Always 0* |
| `requireDurationWithoutMove` | **float** - Time length in seconds |
| `useTargetCountFactor` | **boolean** - Limit the number of hit targets. *Always 0 in `xml\additionaleffect\`. Always 0 on `splash="0"`* |
| `isShadowWorld` | **boolean**, *optional* - *Always 0. Only appears in `xml\skill\`* |
| `glideOnGroundDisable` | **boolean**, *optional* - *Always 0. Only appears in `xml\skill\`* |
| `onlyShadowWorld` | **boolean** |
| `onlyFlyableMap` | **boolean** |
| `applyPvPZoneType` | **enum** - Possible values: 0 - 2. *Always 0 in `xml\skill\`* |
| `allowBattleRidingState` | **boolean** |
| `onlyBattleRidingState` | **boolean** |
| `allowMapleSurvival` | **boolean**, *optional* - *Always 1* |

## `<beginCondition>` property nodes:

## `<owner>`, `<target>`, `<caster>` condition node

| Name | Value |
|-|-|
| `hasBuffID` | **0, ID** - ID of the buff to check for. If `0` then no buff is required |
| `hasBuffLevel` | **integer** - Level requirement of `hasBuffID`. If `0` then no specific level is required |
| `hasBuffOwner` | **boolean** - If `0` then don't require a buff check. If `1` then require a buff check |
| `checkActivateBuff` | **boolean**, *optional* - *Always 1. Only appears in `xml\additionaleffect\`* |
| `hasBuffCount` | **integer** - Stack requirement of `hasBuff`. If `0` then no specific stack count required |
| `hasBuffCountCompare` | **Comparison enum** - Comparison function to use when checking `hasBuffCount` |
| `eventCondition` | **EventCondition enum** - Event to listen for. *Always 0 in `xml\skill\`* |
| `NpcRaceString` | **empty string** |
| `NpcIDs` | **0, ID**, *optional* |
| `NpcRanks` | **integer**, *optional* |
| `hasSkillID` | **0, ID** - ID of the skill to check for. If `0` then no skill is required |
| `ignoreOwnerEffect` | **boolean, ID** - If `0` then require `eventEffectID` or `eventSkillID`? If `1`, don't require specific effect or skill. If ID then ignore events using that ID |
| `hasNotBuffID` | **0, ID**, *optional* - ID of the effect to check for. If `0` then no effect is barred |
| `eventSkillID` | **ID[]** - Array of skill IDs to check for in the event parameters |
| `eventIgnoreSkillID` | **0, ID**, *optional* - Skill ID to check for events to ignore |
| `eventEffectID` | **ID[]** - Array of effect IDs to check for in the event parameters |
| `targetCheckRange` | **integer**, *optional* |
| `targetCheckMinRange` | **integer**, *optional* |
| `targetInRangeCount` | **integer**, *optional* |
| `targetFriendly` | **TargetFriendly enum**, *optional* - *`<owner>` only* |
| `targetCountSign` | **Comparison enum**, *optional* |
| `requireStates` | **States enum[]**, *optional* |
| `requireSubStates` | **SubStates enum[]**, *optional* |
| `requireMasteryTypes` | **MasteryType enum**, *optional* |
| `requireMasteryValues` | **integet**, *optional* |

## Comparison enum

| Name | Value |
|-|-|
| `None` | |
| `Equals` | |
| `LessEquals` | |
| `GreaterEquals` | |
| `Less` | |
| `Greater` | |

## EventCondition enum

Many of these events will have an ID argument for the skill or effect that is being used to trigger these events.
The IDs are often consumed with `eventEffectID`, `eventSkillID`, `eventIgnoreSkillID`, and `ignoreOwnerEffect`.

| Index | Value |
|-|-|
| 0 | `None` - No event required. Fire during normal activation times. *Always 0 in `xml\skill\`. Almost always 0 in `xml\additionaleffect\` in `<beginCondition>` nodes in `<level>`, except for one Striker effect* |
| 1 | `OnEvade` - On effect parent evasion. **In: `<owner>`** |
| 2 | `OnBlock` - On effect parent blocking. **In: `<owner>`** |
| 4 | `OnAttacked` - On target attacked. **In: `<owner>`, `<target>`** |
| 5 | `OnOwnerAttackCrit` - On effect parent attack crit. **In: `<owner>`** |
| 6 | `OnOwnerAttackHit` - On effect parent attack hit. **In: `<owner>`** |
| 7 | `OnSkillCasted` - On target skill cast.  **In: `<owner>`, `<caster>`** |
| 10 | `OnBuffStacksReached` - On target effect stacks gained when stacks > 1. **In: `<owner>`, `<caster>`** |
| 11 | `OnInvestigate` - On effect parent investigating. Doesn't fire in homes. **In: `<owner>`** |
| 13 | `OnBuffTimeExpiring` - On effect parent buff time expiring. **In: `<owner>`** |
| 14 | `OnSkillCastEnd` - On effect parent skill cast end? **In: `<owner>`** |
| 16 | `OnEffectApplied` - On effect parent effect applied. **In: `<owner>`** |
| 17 | `OnEffectRemoved` - On effect parent effect removed. **In: `<owner>`** |
| 18 | `OnLifeSkillGather` - On effect parent life skill gather. **In: `<owner>`** |
| 19 | `OnAttackMiss` - On effect parent attack missed. **In: `<owner>`** |
| 20 | `UnknownKritiasPuzzleEvent` - On Kritias puzzle condition reached. Poing puzzle? Color puzzles? **In: `<owner>`** |
| 102 | `UnknownWizardEvent` - Some buff condition reached in Wizard's Hurricane skill. **In: `<owner>`** |
| 103 | `UnknownStrikerEvent` - Some condition reached in Striker skill. **In: `<owner>`** |

## TargetFriendly enum

| Index | Value |
|-|-|
| 1 | Enemy |
| 2 | Ally |

## States enum

| Name | Value |
|-|-|
| `gosStun` | |
| `gosEmotionIdle` | |
| `gosPlayInstrument` | |
| `gosCrawl` | |

## SubStates enum

| Name | Value |
|-|-|
| `StatePlayInstrument_Playing_Score_Solo` | |
| `StatePlayInstrument_Playing_Score_Ensemble` | |

## MasteryType enum

| Name | Value |
|-|-|
| Music | |

## `<stat>` condition node

| Name | Value |
|-|-|
| `hp` | **integer** - Minimum HP. *Only appears in `xml\skill\`* |
| `sp` | **integer**, *optional* - Minimum spirit.  *Only appears in `xml\skill\`* |

## `<requireSkillCodes>` condition node

| Name | Value |
|-|-|
| `code` | **ID** |

## `<requireMapCodes>` condition node

| Name | Value |
|-|-|
| `code` | **ID** |

## `<requireMapCategoryCodes>` condition node

| Name | Value |
|-|-|
| `code` | **integer, empty** - Possible values: `0`, `1`, `9` PvP |

## `<requireRoomDungeonTypes>` condition node

| Name | Value |
|-|-|
| `code` | **DungeonType enum** |

## DungeonType enum

| Name | Value |
|-|-|
| `normal` | |
| `raid` | |
| `chaosRaid` | |
| `darkStream` | |
| `vip` | |
| `event` | |
| `guildRaid` | |
| `fameChallenge` | |
| `lapenta` | |
| `colosseum` | |



## `<job>` condition node

| Name | Value |
|-|-|
| `code` | **JobID enum** |


## `<item>` condition node

| Name | Value |
|-|-|
| `id` | **ID** |
| `count` | **integer** |
| `rank` | **enum** |

## `<requireMapContinentCodes>` condition node

| Name | Value |
|-|-|
| `code` | **MapContinentCodes enum** |

## MapContinentCodes enum

| Index | Value |
|-|-|
| 202 | |

## `<weapon>` condition node

| Name | Value |
|-|-|
| `lh` | **WeaponType enum** |
| `rh` | **WeaponType enum** |