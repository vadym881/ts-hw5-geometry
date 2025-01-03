import { Circle } from "./models/circle";
import { Cone } from "./models/cone";
import { Cube } from "./models/cube";
import { Cylinder } from "./models/cylinder";
import { Ellipse } from "./models/ellipse";
import { Polygon } from "./models/polygon";
import { Rectangle } from "./models/rectangle";
import { Rhombus } from "./models/rhombus";
import { Sphere } from "./models/sphere";
import { Square } from "./models/square";
import { Trapezium } from "./models/trapezium";
import { Triangle } from "./models/triangle";
import { ColorEnum } from "./types";
import { createShape } from "./utils/create-shape";
import { generateColorEnum, generateNumber } from "./utils/generate-number";

const square = new Square(ColorEnum.red, 5);
square.printInfo();
console.log(`Number of sides: ${square.getNumberOfSides()}`);
console.log();

const rectangle = new Rectangle(ColorEnum.blue, 4, 5);
rectangle.printInfo();
console.log();

const triangle = new Triangle(ColorEnum.green, 3, 4, 5);
triangle.printInfo();
console.log(`Number of sides: ${triangle.getNumberOfSides()}`);
console.log();

const circle = new Circle(ColorEnum.yellow, 6);
circle.printInfo();
console.log();

const ellipse = new Ellipse(ColorEnum.orange, 3, 8);
ellipse.printInfo();
console.log();

const polygon = new Polygon(ColorEnum.pink, [1, 2]);
polygon.printInfo();
console.log();

const trapezium = new Trapezium(ColorEnum.purple, 2, 4, 3, 5);
trapezium.printInfo();
console.log();

const rhombus = new Rhombus(ColorEnum.yellow, 5, 120);
rhombus.printInfo();
console.log();

const cube = new Cube(ColorEnum.blue, 5);
cube.printInfo();
console.log();

const sphere = new Sphere(ColorEnum.pink, 7);
sphere.printInfo();
console.log();

const cylinder = new Cylinder(ColorEnum.red, 7, 5);
cylinder.printInfo();
console.log();

const cone = new Cone(ColorEnum.orange, 6, 4);
cone.printInfo();
console.log();
