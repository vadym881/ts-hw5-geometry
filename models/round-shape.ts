import { RoundType } from "../types";
import { BaseShape } from "./base-shape";

export abstract class RoundShape extends BaseShape {
  diameters: number[];
  constructor(name: RoundType, color: string) {
    super(name, color);
    this.diameters = [];
  }

  printDiameter(): void {
    this.diameters.forEach((a) => console.log(a));
  }
}
