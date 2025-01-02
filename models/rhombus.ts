import { ColorEnum } from "../types";
import { Square } from "./square";

export class Rhombus extends Square {
  angle: number;
  constructor(color: ColorEnum, side: number, angle: number) {
    super(color, side);
    if (angle <= 90 || angle >= 180) {
        console.log('Angle should be between 90 and 180')
    }
    this.name = "Rhombus";
    this.angle = angle;
  }

  override calculateArea(): number {
    return +(Math.pow(this.side, 2) * Math.sin(this.angle)).toFixed(2)
  }

  printInfo(): void {
      super.printInfo()
      console.log(`Angle: ${this.angle}`)
  }
}
