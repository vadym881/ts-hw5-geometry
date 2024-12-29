import { AngleShape } from "./angle-shape";

export class Square extends AngleShape {
  side: number;
  constructor(color: string, side: number) {
    super("Square", color);
    this.side = side;
    this.sides = [side, side, side, side];
  }

  calculateArea(): number {
    return this.side * this.side;
  }
  calculatePerimeter(): number {
    return this.side * 4;
  }
}
