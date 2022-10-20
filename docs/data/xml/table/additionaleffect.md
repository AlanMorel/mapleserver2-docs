---
sidebar_position: 4
---

# additionaleffect.xml

## `<BasicProperty>`

| Name | Value |
|-|-|
| `level` | **integer** - Effect level |
| `accountEffect` | **boolean** - *Always 0* |
| `group` | **0, ID** |
| `buffType` | **BuffType enum** |
| `buffSubType` | **BuffSubType enum** |
| `buffCategory` | **BuffCategory enum** |
| `eventBuffType` | **EventBuffType enum** |
| `useInGameTime` | **boolean** - Always count down if `0`. Only count down when in game if `1`. |
| `durationTick` | **integer** - Duration of the effect in ms |
| `intervalTick` | **integer** - Time between ticks of the effect in ms |
| `delayTick` | **integer** - Time to wait till first cast or event fire in ms |
| `keepCondition` | **KeepCondition enum** - How the effect should expire |
| `resetCondition` | **ResetCondition enum** - What should happen when another effect of the same type is added |
| `maxBuffCount` | **integer** - Max stacks |
| `dotCondition` | **DotCondition enum** - When the first tick should be handled |
| `invokeEvent` | **boolean** - Fire related events if `1`. Don't fire related events if `0` |
| `deadKeepEffect` | **boolean** - Remove effect on death if `0` |
| `logoutClearEffect` | **boolean** - Clear when logging out if `1` |
| `leaveFieldClearEffect` | **boolean** - Remove when changing maps if `1` |
| `pvpOnOff` | **boolean** |
| `casterKeepEffect` | **boolean** - *Always 0* |
| `casterIndividualEffect` | **boolean** - Multiple casters overwrite the same effect if `0`. Each caster has their own stacking if `1` |
| `coolDownTime` | **float** - Cooldown time of effect in seconds |
| `clearDistanceFromCaster` | **integer** - *Only nonzero in 62100022* |
| `useInvokeEffectFactor` | **boolean** - *Always 0* |
| `clearEffectFromPVPZone` | **boolean** - Clear when leaving PvP zones if `1` |
| `doNotClearEffectFromEnterPVPZone` | **boolean** - Clear effect when entering PvP zones if `0` |
| `clearCooldownFromPVPZone` | **boolean**, *optional* - *Always 1* |
| `forceApplyTarget` | **ForceApplyTarget enum** |
| `ignoreReduceTimeCondition` | **boolean** |
| `disableRevivalHere` | **boolean**, *optional* - *Always 1* |
| `attackPossibleEffectID` | **ID**, *optional* |
| `attackPossibleSkillIDs` | **ID[]**, *optional* |
| `attackPossibleEffectIDs` | **ID[]**, *optional* |
| `costumeSetID` | **id**, *optional* |
| `statSetID` | **id**, *optional* |
| `skillSetID` | **id**, *optional* |
| `itemSlotDisable` | **enum**, *optional* |
| `skillGroupType` | **SkillGroupType enum**, *optional* - Skill type of the skill responsible for the effect |
| `immediateActiveRequireSkill` | **boolean**, *optional* |
| `tailEffect` | **TailEffectEnum**, *optional* - Entities follow behind player |

## BuffType Enum

| Name | Value |
|-|-|
| 1 | `Buff` - On positive or neutral effects |
| 2 | `Debuff` - On negative effects |
| 3 | `??` |

## BuffSubType Enum

| Name | Value |
|-|-|
| 0 | `None?` |
| 1 | `Owner/StateDriver?` - Applies immunities, reads effects, other effects unknown |
| 2 | `Entity/StatChange?` - Stat changes, other effects unknown |
| 4 | `Element/Dot/EffectChange?` |
| 6 | `Shield` |
| 8 | `StatusDebuff?` |
| 16 | `Recovery` |
| 32 | `EnemyRecovery` |
| 64 | `PcCafe` |
| 128 | `FishingLure` |
| 256 | `AccountBuff` |
| 512 | `LapentaResonance` |
| 1024 | `Socketing` |

## buffCategory Enum

| Name | Value |
|-|-|
| 0 | `PlayerEffect?` |
| 1 | `EnvironemtalHazard?` |
| 2 | `??` |
| 4 | `Stunned?` |
| 6 | `EnemyDot` |
| 7 | `Stunned?` |
| 8 | `Slow?` |
| 9 | `BossResistance` - Used for chaos raid boss special stat resistances |
| 99 | `??` |
| 1007 | `EnemyStunned?` |
| 2001 | `??` - Some kind of enemy recovery/buff? |

## EventBuffType Enum

| Name | Value |
|-|-|
| 0 | `OnTick?` - Tick normally |
| 1 | `AutoFish` - Appears related to auto fishing |
| 2 | `SafeRiding` - Appears related to safe riding |
| 3 | `AmphibiousRide` - Appears related to amphibious riding |
| 4 | `AutoPerform` - Appears related to auto performing |

## KeepCondition Enum

| Name | Value |
|-|-|
| 0 | `TimerDuration?` - Remove on timer hitting 0 |
| 1 | `SkillDuration?` - Remove on timer hitting 0 or when source skill stops |
| 5 | `TimerDurationTrackCooldown?` - Runs on a timer, but also tracks cooldown? |
| 99 | `UnlimitedDuration?` - Effect lasts until manually removed (respeccing, removing source item, removing lapenshard) |

## ResetCondition Enum

| Name | Value |
|-|-|
| 0 | `ResetTimer?` - Appears both stack and reset the timer |
| 1 | `NoTimerReset?` - Appears to add stacks without resetting the timer |
| 2 | `ResetTimer?` - Appears both stack and reset the timer |
| 3 | `ChangeTimerNoOverride?` - Appears to only change the timer. Can change the timer to less time |

## DotCondition Enum

| Name | Value |
|-|-|
| 0 | `ImmediateFire` - Fire immediately |
| 1 | `DelayedFire` - Fire after the first interval delay |
| 2 | `??` |

## ForceApplyTarget Enum

| Name | Value |
|-|-|
| 0 | `??` |
| 2 | `??` |

## SkillGroupType Enum

| Name | Value |
|-|-|
| 1 | `ClassEffect` - Effect came from a class skill |
| 2 | `LapenshardEffect` - Effect came from a lapenshard |

## TailEffect Enum

| Name | Value |
|-|-|
| 1001 | `IceSprite?` - Wizard ice sprite |
| 1002 | `IceSprite?` - Wizard ice sprite |