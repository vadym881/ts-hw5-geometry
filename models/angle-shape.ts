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
  abstract calculateArea(): number;
  abstract calculatePerimeter(): number;
  printInfo(): void {
    super.printInfo();
    console.log(this.sides);
    console.log();
  }
}
