import { RoundType } from "../types";
import { BaseShape } from "./base-shape";

export abstract class RoundShape extends BaseShape {
  diameters: number[];
  constructor(name: RoundType, color: string) {
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
