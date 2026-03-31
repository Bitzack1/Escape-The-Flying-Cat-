/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bananas extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bananas", "./Bananas/costumes/bananas.svg", {
        x: 38.395093556337486,
        y: 36.68124841634099,
      }),
    ];

    this.sounds = [
      new Sound("Chomp", "./Bananas/sounds/Chomp.wav"),
      new Sound("Bite", "./Bananas/sounds/Bite.wav"),
      new Sound("Pop", "./Bananas/sounds/Pop.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-150, 0);
    this.stage.vars.score = 0;
    this.visible = true;
    while (true) {
      if (this.touching(this.sprites["Cat"].andClones())) {
        yield* this.startSound("Pop");
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.stage.vars.score++;
        yield* this.sayAndWait(1, 1);
      }
      yield;
    }
  }

  *whenIReceiveGameOver() {
    this.visible = false;
  }
}
