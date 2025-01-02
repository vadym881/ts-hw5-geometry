import { ColorEnum, RoundType } from "../types";
import { BaseShape2D } from "./base-shape-2d";

export abstract class RoundShape extends BaseShape2D {
  diameters: number[];
  constructor(name: RoundType, color: ColorEnum) {
    super(name, color);
    this.diameters = [];
  }

  printDiameter(): void {
    this.diameters.forEach((a, index) =>
      console.log(`Diameter${index + 1}: ${a}`)
    );
  }

  printInfo(): void {
    super.printInfo();
    this.printDiameter();
  }
}
