import { Circle } from "./models/circle";
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

const square = new Square("red", 5);
square.printInfo();
console.log(`Number of sides: ${square.getNumberOfSides()}`);
console.log();

const rectangle = new Rectangle("blue", 4, 5);
rectangle.printInfo();
console.log();

const triangle = new Triangle("green", 3, 4, 5);
triangle.printInfo();
console.log(`Number of sides: ${triangle.getNumberOfSides()}`);
console.log();

const circle = new Circle("yellow", 6);
circle.printInfo();
console.log();

const ellipse = new Ellipse("orange", 3, 8);
ellipse.printInfo();
console.log();

const polygon = new Polygon("pink", [1, 2]);
polygon.printInfo();
console.log();

const trapezium = new Trapezium("purple", 2, 4, 3, 5);
trapezium.printInfo();
console.log();

const rhombus = new Rhombus("yellow", 5, 120);
rhombus.printInfo();
console.log();

const cube = new Cube("blue", 5);
cube.printInfo();
console.log();

const sphere = new Sphere("pink", 7);
sphere.printInfo();
console.log();

const cylinder = new Cylinder('red', 7, 5)
cylinder.printInfo()
console.log()