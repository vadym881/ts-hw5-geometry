import { ColorEnum, ITriangle, TriangleType } from "../types";
import { AngleShape } from "./angle-shape";

export class Triangle extends AngleShape implements ITriangle {
  side1: number;
  side2: number;
  side3: number;
  heron: number;
  constructor(color: ColorEnum, side1: number, side2: number, side3: number) {
    super("Triangle", color);
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.sides = [side1, side2, side3];
    const halfPerim = this.calculatePerimeter() / 2;
    this.heron = halfPerim * (halfPerim - side1) * (halfPerim - side2) * (halfPerim - side3);
    if (this.heron <=0) {
      console.log('Impossible to build triangle')
      return;
    }   
  }
  getTriangleType(): TriangleType {
    const set = new Set(this.sides);
    if (set.size === 1) return "Equilateral";
    if (set.size === 2) return "Isoscele";
    return "Versatile";
  }
  calcHeight(base: number): number {
    if (!this.sides.includes(base)) {
      throw new Error("Wrong base");
    }
    return +((2 * this.calculateArea()) / base).toFixed(2);
  }
  override calculateArea(): number {
    return +Math.sqrt(this.heron).toFixed(2);
  }

  printInfo(): void {
    super.printInfo()
    console.log(`Height: ${this.calcHeight}`)
    console.log(`Type: ${this.getTriangleType()}`)
  }
}
