/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ator1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Avery-a", "./Ator1/costumes/Avery-a.svg", { x: 39, y: 94 })
    ];

    this.sounds = [new Sound("Miau", "./Ator1/sounds/Miau.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.askAndWait("Qual o seu nome?");
    yield* this.sayAndWait(this.answer, 2);
    yield* this.sayAndWait("este e o nosso site sobre arduinos !", 3);
    yield* this.sayAndWait(
      "nesse site voce encontrará diversas curiosidades sobre esse material!",
      2
    );
    yield* this.sayAndWait(
      "irei começa explicando o que é esse tal de arduino, se estiver interessado clique e segure  no botão espaço !",
      5
    );
    if (this.keyPressed("space")) {
      yield* this.sayAndWait("ok, vamos lá !", 2);
      yield* this.sayAndWait(
        "O Arduino foi criado em 2005 por um grupo de 5 pesquisadores: Massimo Banzi, David Cuartielles, Tom Igoe, Gianluca Martino e David Mellis. O objetivo era elaborar um dispositivo que fosse ao mesmo tempo barato e fácil de programar, sendo dessa forma acessível aos estudantes e projetistas amadores. ",
        40
      );
      yield* this.sayAndWait(
        " A história de criação do da ideia tem como contexto inicial as instalações do Instituto de Design de Interação de Ivrea, quando em 2002, Massimo Banzi, integrante do quadro docente, propõe-se a elaborar um produto, na qual seus alunos de design de interação, criassem dispositivos eletrônicos reagente aos estímulos.  ",
        40
      );
      yield* this.sayAndWait(
        "agora que voce ja sabe um pouco mais sobre a historia desse material, que tal explorar mais um pouco esse site ?",
        10
      );
    }
  }
}
