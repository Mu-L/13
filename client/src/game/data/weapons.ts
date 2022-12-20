import {WORLD_SCALE} from "../../assets/params";
import {BulletType} from "./bullets";

export interface WeaponConfig {
    name_: string;
    // TODO: rename to reload-tics
    reloadTime_: number;
    launchTime_: number;
    // relaunch speed is steps to advance to launchTime
    relaunchSpeed_: number;

    spawnCount_: number;
    angleVar_: number;
    angleSpread_: number;
    kickBack_: number;
    offset_: number;
    velocity_: number;
    velocityVar_: number;
    cameraShake_: number;
    detuneSpeed_: number;
    cameraFeedback_: number;
    cameraLookForward_: number;
    cameraScale_: number;
    gfxRot_: number;
    gfxSx_: number;
    handsAnim_: number;
    bulletType_: BulletType;
    bulletDamage_: number;
    bulletLifetime_: number;
    bulletHp_: number;
    bulletShellColor_?: number;

    clipSize_: number;
    clipReload_: number;

    ai_shootDistanceMin_: number;
    ai_shootDistanceMax_: number;

    // value affects movement speed, jump velocity
    moveWeightK: number;
}

const newWeapon = (): WeaponConfig => ({
    name_: "",
    reloadTime_: 60,
    launchTime_: 0,
    relaunchSpeed_: 2,
    spawnCount_: 1,
    angleVar_: 0,
    angleSpread_: 0,
    kickBack_: 0,
    offset_: 0,
    velocity_: 0,
    velocityVar_: 0,
    cameraShake_: 0,
    detuneSpeed_: 1,
    cameraFeedback_: 0,
    cameraLookForward_: 0,
    cameraScale_: 1,
    gfxRot_: 0,
    gfxSx_: 1,
    handsAnim_: 0,
    bulletType_: BulletType.Melee,
    bulletDamage_: 1,
    bulletLifetime_: 0,
    bulletHp_: 1,
    clipSize_: 0,
    clipReload_: 0,
    ai_shootDistanceMin_: 0,
    ai_shootDistanceMax_: 0xFFFFFFFF,
    moveWeightK: 1.0,
});

const createArmWeapon = (): WeaponConfig => {
    const w = newWeapon();
    w.angleSpread_ = 0.5;
    w.launchTime_ = 30;
    w.kickBack_ = 10;
    w.offset_ = 6;
    w.velocity_ = 300;
    w.detuneSpeed_ = 16;
    w.cameraFeedback_ = 0.02 / 5;
    w.cameraLookForward_ = 0.1;
    w.handsAnim_ = 12;
    w.bulletDamage_ = 2;
    // w.bulletLifetime_ = 2;
    w.bulletLifetime_ = 3;
    w.ai_shootDistanceMax_ = 32 * WORLD_SCALE;
    return w;
};

const createGunWeapon = (): WeaponConfig => {
    const w = newWeapon();
    w.kickBack_ = 32;
    w.offset_ = 16;
    w.velocity_ = 600;
    w.detuneSpeed_ = 16;
    w.cameraFeedback_ = 0.02 / 5;
    w.cameraLookForward_ = 0.2;
    w.bulletType_ = BulletType.Shell;
    w.bulletShellColor_ = 0xFFDD22;
    w.clipSize_ = 30;
    w.clipReload_ = 60;
    // w.ai_shootDistanceMin_ = 128 * WORLD_SCALE;
    w.ai_shootDistanceMin_ = 24 * WORLD_SCALE;
    w.ai_shootDistanceMax_ = 256 * WORLD_SCALE;
    w.moveWeightK = 0.8;
    return w;
};

export const weapons: WeaponConfig[] = [
    // HANDS FREE
    createArmWeapon(),
    // MELEE
    createArmWeapon(),
    createArmWeapon(),
    // PISTOL
    createGunWeapon(),
    createGunWeapon(),
    createGunWeapon(),
    createGunWeapon(),
    createGunWeapon(),
    createGunWeapon(),
    createGunWeapon(),

    // 10, 11, 12, 13
];

let i = 1;

// 🔪
weapons[i].name_ = "Knife";
weapons[i].reloadTime_ = 10;
weapons[i].launchTime_ = 5;
weapons[i].bulletDamage_ = 2;
weapons[i].gfxRot_ = -45;

// AXE
++i;
weapons[i].name_ = "Axe";
weapons[i].reloadTime_ = 30;
weapons[i].launchTime_ = 15;
weapons[i].bulletDamage_ = 8;
weapons[i].gfxRot_ = -45;
weapons[i].moveWeightK = 0.9;

// 🔫
++i;
weapons[i].name_ = "Pistol";
weapons[i].bulletDamage_ = 3;
weapons[i].angleSpread_ = 0.1;
weapons[i].velocity_ /= 2;
weapons[i].relaunchSpeed_ = 16;
weapons[i].detuneSpeed_ = 16;
weapons[i].cameraFeedback_ = 0.02;
weapons[i].clipSize_ = 9 * 3;
weapons[i].moveWeightK = 1.0;

// 🖊 light auto gun
++i;
weapons[i].name_ = "Automatic Gun";
weapons[i].reloadTime_ = 5;
weapons[i].angleSpread_ = 0.25;
weapons[i].kickBack_ = 20;
weapons[i].offset_ = 20;
weapons[i].detuneSpeed_ = 16;
weapons[i].cameraFeedback_ = 0.02;

// ✏️ hard machine-gun?
++i;
weapons[i].name_ = "Machine Gun";
weapons[i].reloadTime_ = 8;
weapons[i].angleSpread_ = 0.25;
weapons[i].kickBack_ = 20;
weapons[i].velocity_ /= 2;
weapons[i].detuneSpeed_ = 16;
weapons[i].cameraFeedback_ = 0.05;
weapons[i].cameraLookForward_ = 0.3;
weapons[i].bulletDamage_ = 2;

// 🪥 SHOT GUN
++i;
weapons[i].name_ = "Shotgun";
weapons[i].spawnCount_ = 5;
weapons[i].angleSpread_ = 0.5;
weapons[i].detuneSpeed_ = 32;
weapons[i].cameraFeedback_ = 0.1;
weapons[i].velocity_ = 300;
weapons[i].velocityVar_ = 200;
weapons[i].handsAnim_ = 1;
weapons[i].angleVar_ = 0.5;
weapons[i].bulletHp_ = 2;
weapons[i].bulletDamage_ = 2;
weapons[i].bulletShellColor_ = 0xAA0000;
weapons[i].clipSize_ = 7;
weapons[i].moveWeightK = 0.9;

// CROSS BOW ⛏
++i;
weapons[i].name_ = "Crossbow";
weapons[i].detuneSpeed_ = 1;
weapons[i].cameraFeedback_ = 0.2;
weapons[i].cameraLookForward_ = 0.4;
weapons[i].cameraScale_ = 1.5;
weapons[i].velocity_ = 960;
weapons[i].handsAnim_ = 1;
weapons[i].bulletDamage_ = 5;
weapons[i].bulletType_ = BulletType.Arrow;
weapons[i].bulletShellColor_ = 0x00FF00;
weapons[i].clipSize_ = 7;
weapons[i].moveWeightK = 0.9;

// 🔌 plasma shock
++i;
weapons[i].name_ = "Plasma Gun";
weapons[i].angleSpread_ = 0.5;
weapons[i].detuneSpeed_ = 10;
weapons[i].reloadTime_ = 10;
weapons[i].cameraLookForward_ = 0.3;
weapons[i].cameraFeedback_ = 0.05;
weapons[i].velocity_ = 420;
weapons[i].bulletDamage_ = 1;
weapons[i].bulletHp_ = 2;
weapons[i].bulletType_ = BulletType.Plasma;
weapons[i].bulletShellColor_ = 0x00FFFF;
weapons[i].clipSize_ = 35;

// 🧵 RAIL GUN
++i;
weapons[i].name_ = "Railgun";
weapons[i].reloadTime_ = 120;
weapons[i].cameraShake_ = 25;
weapons[i].velocity_ = 1000;
weapons[i].cameraFeedback_ = 0.1;
weapons[i].cameraLookForward_ = 0.4;
weapons[i].cameraScale_ = 1.4;
weapons[i].bulletDamage_ = 5;
weapons[i].bulletHp_ = 15;
weapons[i].bulletType_ = BulletType.Ray;
weapons[i].bulletLifetime_ = 10;
weapons[i].bulletShellColor_ = 0x990099;
weapons[i].clipSize_ = 5;