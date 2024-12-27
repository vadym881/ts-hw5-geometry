import { AngleShape } from "./angle-shape";

export class Square extends AngleShape {
  sides: number[] = [];
  constructor(color: string, public side: number) {
    super("Square", color);
  }

  getSides(): number[] {
    this.sides = [this.side, this.side, this.side, this.side];
    return this.sides;
  }

  calculateArea(): number {
    return this.side * this.side;
  }
  calculatePerimeter(): number {
    return this.side * 4;
  }
}
