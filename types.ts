export type ShapeType = AngleType | RoundType;

export type AngleType =
  | "Rectangle"
  | "Square"
  | "Triangle"
  | "Polygon"
  | "Trapezium"
  | "Rhombus"
  | "Cube";

export type RoundType = "Circle" | "Ellipse" | "Sphere";

export type TriangleType = "Isoscele" | "Equilateral" | "Versatile";

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

export interface I3D {
  calculateVolume(): number;
}
