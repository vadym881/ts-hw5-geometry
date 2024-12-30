import { I3D } from "../types";
import { AngleShape } from "./angle-shape";
import { Square } from "./square";

export class Cube extends AngleShape implements I3D {
  side: number;
  facet: Square;
  constructor(color: string, side: number) {
    super("Cube", color);
    this.side = side;
    this.facet = new Square(color, side);
    for (let i = 0; i < 12; i++) {
      this.sides.push(side);
    }
  }

  override calculateArea(): number {
    return 6 * this.facet.calculateArea();
  }

  calculateVolume(): number {
    return Math.pow(this.side, 3);
  }

  printInfo(): void {
    super.printInfo();
    console.log(`Volume: ${this.calculateVolume()}`);
  }
}
