/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CatFlying extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cat flying-a", "./CatFlying/costumes/cat flying-a.svg", {
        x: 53.529398157762785,
        y: 35.211569999999995,
      }),
      new Costume("cat flying-b", "./CatFlying/costumes/cat flying-b.svg", {
        x: 44,
        y: 46,
      }),
    ];

    this.sounds = [new Sound("Pop", "./CatFlying/sounds/Pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(185, 130);
    this.visible = true;
    while (true) {
      this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
      this.move(3);
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Cat"].y - this.y,
          this.sprites["Cat"].x - this.x
        )
      );
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.sayAndWait("i am going to CATCH you", 2);
      yield* this.wait(5);
      yield* this.sayAndWait("I know your here", 2);
      yield* this.wait(5);
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching(this.sprites["Cat"].andClones())) {
        yield* this.broadcastAndWait("Game Over");
        this.visible = false;
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }
}
