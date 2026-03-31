import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Bananas from "./Bananas/Bananas.js";
import Apple from "./Apple/Apple.js";
import CatFlying from "./CatFlying/CatFlying.js";
import Cat from "./Cat/Cat.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Bananas: new Bananas({
    x: -150,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
  Apple: new Apple({
    x: -172,
    y: -83,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2,
  }),
  CatFlying: new CatFlying({
    x: 130.71233797615855,
    y: 92.86738731417992,
    direction: -125.39270770266975,
    rotationStyle: Sprite.RotationStyle.DONT_ROTATE,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3,
  }),
  Cat: new Cat({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
