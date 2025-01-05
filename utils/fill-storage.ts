import { generateShapeType } from "./generate-entity";
import { ShapeStorage } from "../models/shape-storage";
import { createShape } from "./create-shape";

export function fillStorage(storage: ShapeStorage): void {
  const storageLimit = 1000;
  for (let i = 0; i < storageLimit; i++) {
    const shapeType = generateShapeType();    
    const instance = createShape(shapeType);
    if(Number.isNaN(instance.calculateArea())) {
      console.log('NAN area. Instance nod added')
      console.log(instance)
      return;
    }  
    if(!Number.isFinite(instance.calculateArea())) {
      console.log('Infinite area. Instance not added')
      console.log(instance)
      return;
    }   
    storage.addShape(instance);
  }
}
