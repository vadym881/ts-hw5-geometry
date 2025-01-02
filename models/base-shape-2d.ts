import { ColorEnum, I2D, Shape2DType } from "../types";
import { BaseShape } from "./base-shape";

export abstract class BaseShape2D extends BaseShape implements I2D {
  constructor(name: Shape2DType, color: ColorEnum) {
    super(name, color);
  }

  abstract calculatePerimeter(): number;

  printInfo(): void {
    super.printInfo();
    console.log(`Perimeter: ${this.calculatePerimeter()}`);
  }
}
