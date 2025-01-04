import { generateShapeType } from "./generate-entity";
import { ShapeStorage } from "../models/shape-storage";
import { createShape } from "./create-shape";

export function fillStorage(storage: ShapeStorage): void {
  const storageLimit = 1000;
  for (let i = 0; i < storageLimit; i++) {
    const shapeType = generateShapeType();
    const instance = createShape(shapeType);
    storage.addShape(instance);
  }
}
