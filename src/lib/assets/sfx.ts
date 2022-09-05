import {createAudioBuffer} from "../audio/sfxr";
import {zzfx} from "../audio/zzfx";

export const enum Snd {
  blip = 0,
  heal = 0,
  med = 0,
  pick = 0,
  shoot = 1,
  hurt = 2,
  death = 3,
  step = 4,
  hit = 5,
}

export let snd:AudioBuffer[];

function createAudioBuffers(buffer: ArrayBuffer) {
  const i32 = new Int32Array(buffer);
  for(let i = 0; i < 6; ++i) {
    snd[i] = createAudioBuffer(Array.from(i32.subarray(i * 24, i * 24 + 24)).map(x => x / 65536));
  }
}

export async function loadSounds() {
  createAudioBuffers(new Float32Array((await (await fetch("r")).arrayBuffer())));
}

export function loadSoundsInline() {
  snd = [
    createAudioBuffer([1,0,1276,0,2327,2117.522705,2562.460205,0.999894,0,0,0,1,20032,0.337,0.000005,0,0,0,0.004071,1.000039,0.070354,0.007453,0.9997,3605]),
    createAudioBuffer([3,0,1768,0.168,5712,179.36705,84165.90625,1.000782,0,0,0,1,20032,0.285285,0.000027,0,-109.735664,0.154449,0.037015,1.000015,0.158115,0.000688,1,7482]),
    createAudioBuffer([3,0,606,0,6535,1223.899048,100000,1.001696,0,0,0,1,20032,0.5,0,0,0,0,0.1,1,0.55,0,1,2597]),
    createAudioBuffer([3,0,12641,0.237814,12679,19943.9375,100000,0.999996,0,0,0,1,20032,0.5,0,0,59.482758,-0.021954,0.1,1,0.55,0,1,25322]),
    createAudioBuffer([3,260,348,0,462,1314.475098,10363.769531,1.001931,0,0,0,1,0,0.5,0,0,-0.0255,1,0.0512,0.99997,0.128389,0.084824,0.999918,1072]),
    createAudioBuffer([0,0,201,0,4324,206.65152,100000,1.002595,0,0,0,1,20032,0.465519,0,0,0,0,0.1,1,0.55,0.006984,1,2385]),
  ];
}

export function loadZZFX() {
  snd =[
    zzfx([,,103,,.02,.06,,1.24,-18,4.4,,,,.7,,.1,,.95,.03]),
    zzfx([1.27,,390,.01,.04,.02,4,.71,4.8,,,,,,,,.01,.6,.06]),
    zzfx([1.12,,73,,.02,.11,2,1.18,,-0.1,,,,,,.3,,.55,.05,.23]),
      zzfx([1.99,,770,.03,.19,.35,,.26,,,,,,2,-50,.1,.27,.48,.06]),
      zzfx([2.04,,716,.01,,0,,1.67,,-0.9,,,,,,,.34,.06,.01]),
      zzfx([2.21,,107,.02,.04,.07,,2.22,2,.9,,,,.4,,.5,.15,.42,.04]),
  ];
}
