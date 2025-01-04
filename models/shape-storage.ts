import { BaseShape } from "./base-shape";

export class ShapeStorage {
  private shapes: BaseShape[] = [];
  constructor() {}

  getStorage(): BaseShape[] {
    return this.shapes;
  }

  addShape(shape: BaseShape): void {
    this.shapes.push(shape);
  }

  removeShape(shape: BaseShape): void {
    const index = this.shapes.indexOf(shape);
    if (index === -1) {
      console.log("Shape not found");
      return;
    }
    this.shapes.splice(index, 1);
  }

  printItems(): void {
    this.shapes.forEach((s) => {
      s.printInfo();
      console.log();
    });
  }
}
