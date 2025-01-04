import { ColorEnum, ShapeType } from "../types";

export const generateNumber = (base: number): number => {
  let result = 0;
  do {
    result = +Math.random().toFixed(base) * Math.pow(10, base);
  } while (result === 0);
  return result;
};

export const generateAngle = (): number => {
  const maxAngle = 180;
  let result = 0;
  do {
    result = maxAngle;
    result *= Math.random();
    result = +result.toFixed(0);
  } while (result <= 90 || result === maxAngle);
  return result;
};

export const generateColorEnum = (): ColorEnum => {
  const num = Object.keys(ColorEnum).length / 2 - 1;
  const random = +Math.random().toFixed(1);
  const coef = +(num / 10).toFixed(1);
  const colorCode = (random * coef * 10).toFixed(0);
  return ColorEnum[colorCode];
};

export const generateShapeType = (): ShapeType => {
  const shapeTypeArray: ShapeType[] = [
    "Rectangle",
    "Square",
    "Triangle",
    "Polygon",
    "Trapezium",
    "Rhombus",
    "Circle",
    "Ellipse",
    "Cube",
    "Sphere",
    "Cylinder",
    "Cone",
  ];
  const num = shapeTypeArray.length - 1;
  const random = +Math.random().toFixed(1);
  const coef = +(num / 10).toFixed(1);
  const shapeIndex = +(random * coef * 10).toFixed(0);
  return shapeTypeArray[shapeIndex];
};
