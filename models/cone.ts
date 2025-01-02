import { ColorEnum } from "../types";
import { BaseShape3D } from "./base-shape-3d";

export class Cone extends BaseShape3D {
  diameter: number;
  height: number;
  constructor(color: ColorEnum, diameter: number, height: number) {
    super("Cone", color);
    this.diameter = diameter;
    this.height = height;
  }

  calculateVolume(): number {
    return +((1 / 3) * Math.PI * Math.pow(this.diameter / 2, 2)).toFixed(2);
  }
  calculateArea(): number {
    return +(
      Math.PI * Math.pow(this.diameter / 2, 2) +
      Math.PI *
        (this.diameter / 2) *
        Math.sqrt(Math.pow(this.diameter / 2, 2) + Math.pow(this.height, 2))
    ).toFixed(2);
  }
}
