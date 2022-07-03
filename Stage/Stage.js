/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cenário1", "./Stage/costumes/cenário1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("cena", "./Stage/costumes/cena.svg", {
        x: 240.0106247343814,
        y: 151.9060773480664
      })
    ];

    this.sounds = [new Sound("saltar", "./Stage/sounds/saltar.wav")];

    this.triggers = [];

    this.vars.minhaVariVel = 0;
    this.vars.acertos = 0;
    this.vars.pergunta = 2;
    this.vars.nome = 0;
  }
}
