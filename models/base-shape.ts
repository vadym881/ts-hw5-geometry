import { IShape, ShapeType } from "../types";

export abstract class BaseShape implements IShape {
  name: ShapeType;
  color: string;

  constructor(name: ShapeType, color: string) {
    this.name = name;
    this.color = color;
  }

  abstract calculateArea(): number;

  printInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Color: ${this.color}`);
    console.log(`Area: ${this.calculateArea()}`);
  }
}
