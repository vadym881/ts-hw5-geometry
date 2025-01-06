import { fillStorage } from "../utils/fill-storage";
import { AngleShape } from "./angle-shape";
import { BaseShape } from "./base-shape";
import { Cone } from "./cone";
import { Cube } from "./cube";
import { Cylinder } from "./cylinder";
import { RoundShape } from "./round-shape";
import { Sphere } from "./sphere";

export class ShapeStorage {
  shapes: BaseShape[] = []; // Make private later
  title = { name: "hello" };
  constructor() {
    this.init();
  }

  getStorage(): BaseShape[] {
    return this.shapes;
  }

  init(): void {
    fillStorage(this);
  }

  addShape(shape: BaseShape): void {
    if (this.shapeExists(shape)) {
      console.log("Shape exists");
      return;
    }
    this.shapes.push(shape);
  }

  removeShape(shape: BaseShape): void {
    const index = this.shapes.indexOf(shape);
    if (index === -1) {
      console.log("Shape not found");
      return;
    }
    this.shapes.splice(index, 1);
  }

  printItems(): void {
    this.shapes.forEach((s) => {
      s.printInfo();
      console.log();
    });
  }

  shapeExists(instance: BaseShape): boolean {
    let flag = false;
    if (instance instanceof AngleShape) {
      for (const shape of this.shapes.filter((s) => s instanceof AngleShape)) {
        if (
          instance.color === shape.color &&
          instance.sides.sort() === shape.sides.sort()
        ) {
          flag = true;
          break;
        }
      }
    }
    if (instance instanceof RoundShape) {
      for (const shape of this.shapes.filter((s) => s instanceof RoundShape)) {
        if (
          instance.color === shape.color &&
          instance.diameters.sort() === shape.diameters.sort()
        ) {
          flag = true;
          break;
        }
      }
    }
    if (instance instanceof Cone) {
      for (const shape of this.shapes.filter((s) => s instanceof Cone)) {
        if (
          instance.color === shape.color &&
          instance.diameter === shape.diameter &&
          instance.height === shape.height
        ) {
          flag = true;
          break;
        }
      }
    }
    if (instance instanceof Cube) {
      for (const shape of this.shapes.filter((s) => s instanceof Cube)) {
        if (
          instance.color === shape.color &&
          instance.side === shape.side
        ) {
          flag = true;
          break;
        }
      }
    }
    if (instance instanceof Cylinder) {
      for (const shape of this.shapes.filter((s) => s instanceof Cylinder)) {
        if (
          instance.color === shape.color &&
          instance.diameter === shape.diameter &&
          instance.height === shape.height
        ) {
          flag = true;
          break;
        }
      }
    }
    if (instance instanceof Sphere) {
      for (const shape of this.shapes.filter((s) => s instanceof Sphere)) {
        if (
          instance.color === shape.color &&
          instance.diameter === shape.diameter
        ) {
          flag = true;
          break;
        }
      }
    }
    return flag;
  }
}
