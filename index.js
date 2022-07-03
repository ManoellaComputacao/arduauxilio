import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Ator1 from "./Ator1/Ator1.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Ator1: new Ator1({
    x: -168,
    y: -42,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
