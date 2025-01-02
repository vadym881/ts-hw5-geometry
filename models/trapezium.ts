import { ColorEnum } from "../types";
import { AngleShape } from "./angle-shape";

export class Trapezium extends AngleShape {
  top: number;
  bottom: number;
  side1: number;
  side2: number;
  constructor(
    color: ColorEnum,
    top: number,
    bottom: number,
    side1: number,
    side2: number
  ) {
    super("Trapezium", color);
    if (top > bottom) {
      console.log("Top couldn't be greater than bottom");
    }
    this.top = top;
    this.bottom = bottom;
    this.side1 = side1;
    this.side2 = side2;
    this.sides = [top, bottom, side1, side2];
  }

  override calculateArea(): number {
    const p = this.calculatePerimeter();
    return +(
      ((this.bottom + this.top) / (this.bottom - this.top)) *
      Math.sqrt(
        (p - this.bottom) *
          (p - this.top) *
          (p - this.top - this.side1) *
          (p - this.top - this.side2)
      )
    ).toFixed(2);
  }

  calculateHeight(): number {
    return +((2 * this.calculateArea()) / (this.top + this.bottom)).toFixed(2)
  }

  printInfo(): void {
    super.printInfo()
    console.log(`Height: ${this.calculateHeight()}`)      
  }
}
