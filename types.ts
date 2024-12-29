export type ShapeType = AngleType | RoundType;

export type AngleType = "Rectangle" | "Square" | "Triangle" | "Polygon";

export type RoundType = "Circle" | "Ellipse";

export type TriangleType = 'Isoscele' | 'Equilateral' | 'Versatile'

export interface IShape {
  name: ShapeType;
  color: string;

  calculateArea(): number;

  calculatePerimeter(): number;

  printInfo(): void;
}

export interface ITriangle {
  getTriangleType(): TriangleType;
  calcHeight(base: number): number;
}
