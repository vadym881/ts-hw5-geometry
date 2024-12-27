import { AngleShape } from "./angle-shape";

export class Rectangle extends AngleShape {
  sides: number[] = [];
  constructor(color: string, public side1: number, public side2: number) {
    super("Rectangle", color);
  }

  getSides(): number[] {
    this.sides = [this.side1, this.side2, this.side1, this.side2];
    return this.sides;
  }

  calculateArea(): number {
    return this.side1 * this.side2;
  }
  calculatePerimeter(): number {
    return (this.side1 + this.side2) * 2;
  }
}
