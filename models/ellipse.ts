import { RoundShape } from "./round-shape";

export class Ellipse extends RoundShape {
  diameter1: number;
  diameter2: number;
  constructor(color: string, diameter1: number, diameter2: number) {
    super("Ellipse", color);
    this.diameter1 = diameter1;
    this.diameter2 = diameter2;
    this.diameters = [diameter1, diameter2];
  }

  calculateArea(): number {
    return +(Math.PI * this.diameter1 * this.diameter2).toFixed(2);
  }
  calculatePerimeter(): number {
    return +(
      (2 *
        Math.PI *
        Math.sqrt(Math.pow(this.diameter1, 2) + Math.pow(this.diameter2, 2))) /
      2
    ).toFixed(2);
  }
}
