import { BaseShape } from "../models/base-shape";
import { Rectangle } from "../models/rectangle";
import { ColorEnum, ShapeType } from "../types";
import { generateNumber } from "./generate-number";
import { Storage } from "../models/storage";
import { createShape } from "./create-shape";

export function fillStorage(storage: Storage): void {
  const shapeTypeArray: ShapeType[] = [
    "Rectangle",
    "Square",
    "Triangle",
    "Polygon",
    "Trapezium",
    "Rhombus",
    "Circle",
    "Ellipse",
    "Cube",
    "Sphere",
    "Cylinder",
    "Cone",
  ];
  const num = generateNumber(2);
  for (let i = 0; i < num; i++) {
    for (const shape of shapeTypeArray) {
      let instance!: BaseShape;
      switch (shape) {
        case "Rectangle":
          instance = createShape();
          break;
      }
      storage.addShape(instance);
    }
  }
}
