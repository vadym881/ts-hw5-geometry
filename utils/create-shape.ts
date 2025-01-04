import { BaseShape } from "../models/base-shape";
import { Circle } from "../models/circle";
import { Cone } from "../models/cone";
import { Cube } from "../models/cube";
import { Cylinder } from "../models/cylinder";
import { Ellipse } from "../models/ellipse";
import { Polygon } from "../models/polygon";
import { Rectangle } from "../models/rectangle";
import { Rhombus } from "../models/rhombus";
import { Sphere } from "../models/sphere";
import { Square } from "../models/square";
import { Trapezium } from "../models/trapezium";
import { Triangle } from "../models/triangle";
import { ShapeType } from "../types";
import {
  generateAngle,
  generateColorEnum,
  generateNumber,
} from "./generate-entity";

export function createShape(shapeType: ShapeType): BaseShape {
  let instance!: BaseShape;
  const color = generateColorEnum();
  const angle = generateAngle();
  const param1 = generateNumber(1);
  const param2 = generateNumber(1);
  const param3 = generateNumber(1);
  const param4 = generateNumber(1);
  const param5 = generateNumber(1);

  switch (shapeType) {
    case "Rectangle":
      instance = new Rectangle(color, param1, param2);
      break;
    case "Square":
      instance = new Square(color, param1);
      break;
    case "Triangle":
      instance = new Triangle(color, param1, param2, param3);
      break;
    case "Polygon":
      instance = new Polygon(color, [param1, param2, param3, param4, param5]);
      break;
    case "Trapezium":
      instance = new Trapezium(color, param1, param2, param3, param4);
      break;
    case "Rhombus":
      instance = new Rhombus(color, param1, angle);
      break;
    case "Circle":
      instance = new Circle(color, param1);
      break;
    case "Ellipse":
      instance = new Ellipse(color, param1, param2);
      break;
    case "Cube":
      instance = new Cube(color, param1);
      break;
    case "Sphere":
      instance = new Sphere(color, param1);
      break;
    case "Cylinder":
      instance = new Cylinder(color, param1, param2);
      break;
    case "Cone":
      instance = new Cone(color, param1, param2);
      break;
  }
  
  return instance;
}
