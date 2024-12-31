import { I3D, Shape3DType } from "../types";
import { BaseShape } from "./base-shape";

export abstract class BaseShape3D extends BaseShape implements I3D {
  constructor(name: Shape3DType, color: string) {
    super(name, color);
  }

  abstract calculateVolume(): number;

  printInfo(): void {
    super.printInfo();
    console.log(`Volume: ${this.calculateVolume()}`);
  }
}
