/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Apple extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("apple", "./Apple/costumes/apple.svg", { x: 31, y: 31 }),
    ];

    this.sounds = [
      new Sound("Chomp", "./Apple/sounds/Chomp.wav"),
      new Sound("Pop", "./Apple/sounds/Pop.wav"),
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceiveGameOver() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.goto(-172, -83);
    this.stage.vars.score = 0;
    this.visible = true;
    while (true) {
      if (this.touching(this.sprites["Cat"].andClones())) {
        yield* this.playSoundUntilDone("Pop");
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.stage.vars.score++;
        yield* this.sayAndWait(1, 1);
      }
      yield;
    }
  }
}
