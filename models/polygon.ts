import { AngleShape } from "./angle-shape";

export class Polygon extends AngleShape {
  constructor(color: string, polygonSides: number[]) {
    super("Polygon", color);
    if (polygonSides.length < 5) {
      console.log("Impossible to build polygon");
      return;
    }
    this.sides = polygonSides;
  }

  calculateArea(): number {
    const approximateArea = 2 * this.calculatePerimeter();
    return approximateArea;
  }
  calculatePerimeter(): number {
    let p = 0;
    for (const side of this.sides) {
      p += side;
    }
    return p;
  }
}
