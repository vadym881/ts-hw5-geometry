import { AngleType, ColorEnum } from "../types";
import { BaseShape2D } from "./base-shape-2d";

export abstract class AngleShape extends BaseShape2D {
  sides: number[];
  constructor(name: AngleType, color: ColorEnum) {
    super(name, color);
    this.sides = [];
  }
  getNumberOfSides(): number {
    return this.sides.length;
  }
  printAreaFormula(): void {
    console.log(this.calculateArea.toString());
  }
  calculateArea(): number {
    return this.sides[0] * this.sides[1];
  }
  calculatePerimeter(): number {
    return this.sides.reduce((a, b) => a + b);
  }
  printInfo(): void {
    super.printInfo();
    console.log(`Sides: ${this.sides}`);
    this.printAreaFormula()
  }
}
