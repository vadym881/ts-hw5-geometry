import { AngleShape } from "./angle-shape";

export class Rectangle extends AngleShape {
  side1: number;
  side2: number;
  constructor(color: string, side1: number, side2: number) {
    super("Rectangle", color);
    this.side1 = side1;
    this.side2 = side2;
    this.sides = [side1, side2, side1, side2];
  }
  calculateArea(): number {
    return this.side1 * this.side2;
  }
  calculatePerimeter(): number {
    return (this.side1 + this.side2) * 2;
  }
}
