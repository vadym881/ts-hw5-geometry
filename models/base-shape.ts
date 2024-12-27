export type ShapeType = "Circle" | "Ellipse" | AngleType;

export type AngleType = "Rectangle" | "Square" | "Triangle" | "Polygon";

export abstract class BaseShape {
  constructor(public name: ShapeType, public color: string) {}

  abstract calculateArea(): number;

  abstract calculatePerimeter(): number;

  printInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Color: ${this.color}`);
    console.log(`Area: ${this.calculateArea()}`);
    console.log(`Perimeter: ${this.calculatePerimeter()}`);
    console.log();
  }
}
