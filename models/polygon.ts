import { ColorEnum } from "../types";
import { AngleShape } from "./angle-shape";

export class Polygon extends AngleShape {
  constructor(color: ColorEnum, polygonSides: number[]) {
    super("Polygon", color);
    if (polygonSides.length < 5) {
      console.log("Too few sides to build polygon");
      return;
    }
    this.sides = polygonSides;
  }

  override calculateArea(): number {
    const approximateArea = 2 * this.calculatePerimeter();
    return approximateArea;
  }
}
