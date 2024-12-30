import { I3D } from "../types";
import { RoundShape } from "./round-shape";

export class Sphere extends RoundShape implements I3D {
  diameter: number;
  constructor(color: string, diameter: number) {
    super("Sphere", color);
    this.diameter = diameter;
    this.diameters = [diameter];
  }

  override calculateArea(): number {
    return +(Math.PI * Math.pow(this.diameter, 2)).toFixed(2);
  }
  calculatePerimeter(): number {
    return +(this.calculateVolume() / this.calculateArea()).toFixed(2); // ?
  }
  calculateVolume(): number {
    return +((1 / 6) * Math.PI * Math.pow(this.diameter, 3)).toFixed(2);
  }

  printInfo(): void {
    super.printInfo();
    console.log(`Volume: ${this.calculateVolume()}`);
  }
}
