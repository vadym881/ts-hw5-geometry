export enum ColorEnum {
  "black",
  "white",
  "red",
  "blue",
  "yellow",
  "green",
  "orange",
  "pink",
  "purple",
  "brown",
  "grey",
}

export type ShapeType = Shape2DType | Shape3DType;

export type Shape3DType = "Cube" | "Sphere" | "Cylinder" | "Cone";

export type Shape2DType = AngleType | RoundType;

export type AngleType =
  | "Rectangle"
  | "Square"
  | "Triangle"
  | "Polygon"
  | "Trapezium"
  | "Rhombus";

export type RoundType = "Circle" | "Ellipse";

export type TriangleType = "Isoscele" | "Equilateral" | "Versatile";

export interface IShape {
  name: ShapeType;
  color: ColorEnum;

  calculateArea(): number;

  printInfo(): void;
}

export interface I2D {
  calculatePerimeter(): number;
}

export interface I3D {
  calculateVolume(): number;
}

export interface ITriangle {
  getTriangleType(): TriangleType;
  calcHeight(base: number): number;
}
