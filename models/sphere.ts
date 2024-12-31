import { BaseShape3D } from "./base-shape-3d";

export class Sphere extends BaseShape3D {
  diameter: number;
  constructor(color: string, diameter: number) {
    super("Sphere", color);
    this.diameter = diameter;
  }

  override calculateArea(): number {
    return +(Math.PI * Math.pow(this.diameter, 2)).toFixed(2);
  }
  
  calculateVolume(): number {
    return +((1 / 6) * Math.PI * Math.pow(this.diameter, 3)).toFixed(2);
  }
}
