import { AngleType } from "../types";
import { BaseShape } from "./base-shape";

export abstract class AngleShape extends BaseShape {
  sides: number[];
  constructor(name: AngleType, color: string) {
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
    console.log(this.sides);
    console.log();
  }
}
