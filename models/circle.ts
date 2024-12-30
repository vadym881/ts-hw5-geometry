import { RoundShape } from "./round-shape";

export class Circle extends RoundShape {
  diameter: number;
  constructor(color: string, diameter: number) {
    super("Circle", color);
    this.diameter = diameter;
    this.diameters = [diameter];
  }

  calculateArea(): number {
    const r = this.diameter / 2;
    return +(Math.PI * Math.pow(r, 2)).toFixed(2);
  }
  calculatePerimeter(): number {
    const r = this.diameter / 2;
    return +(2 * Math.PI * r).toFixed(2);
  }
}
