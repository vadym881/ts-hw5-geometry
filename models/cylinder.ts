import { BaseShape3D } from "./base-shape-3d";

export class Cylinder extends BaseShape3D {
  diameter: number;
  height: number;
  constructor(color: string, diameter: number, height: number) {
    super("Cylinder", color);
    this.diameter = diameter;
    this.height = height;
  }

  calculateVolume(): number {
    return +(Math.PI * this.diameter * this.height).toFixed(2);
  }
  calculateArea(): number {
    return +(
      Math.PI *
      this.diameter *
      (this.height + this.diameter / 2)
    ).toFixed(2);
  }
}
