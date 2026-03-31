/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cat-a", "./Cat/costumes/cat-a.svg", {
        x: 47.678985050489445,
        y: 49.499230353205405,
      }),
      new Costume("cat-b", "./Cat/costumes/cat-b.svg", {
        x: 45.40780060308339,
        y: 52.49923070641084,
      }),
    ];

    this.sounds = [
      new Sound("Meow", "./Cat/sounds/Meow.wav"),
      new Sound(
        "scary-horror-music-351315",
        "./Cat/sounds/scary-horror-music-351315.mp3"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = true;
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.x += 5;
      }
      if (this.keyPressed("left arrow")) {
        this.x -= 5;
      }
      if (this.keyPressed("up arrow")) {
        this.y += 5;
      }
      if (this.keyPressed("down arrow")) {
        this.y -= 5;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.costumeNumber++;
      yield* this.wait(0.1);
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      yield* this.playSoundUntilDone("scary-horror-music-351315");
      yield;
    }
  }

  *whenIReceiveGameOver() {
    this.visible = false;
  }
}
