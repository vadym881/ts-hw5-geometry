import { BaseShape3D } from "./base-shape-3d";
import { Square } from "./square";

export class Cube extends BaseShape3D {
  side: number;
  facet: Square;
  constructor(color: string, side: number) {
    super("Cube", color);
    this.side = side;
    this.facet = new Square(color, side);
  }

  override calculateArea(): number {
    return 6 * this.facet.calculateArea();
  }

  calculateVolume(): number {
    return Math.pow(this.side, 3);
  }
}
