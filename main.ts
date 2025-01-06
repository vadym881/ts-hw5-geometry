import { BaseShape2D } from "./models/base-shape-2d";
import { BaseShape3D } from "./models/base-shape-3d";
import { Circle } from "./models/circle";
import { ShapeStorage } from "./models/shape-storage";
import { Triangle } from "./models/triangle";
import { ColorEnum } from "./types";

const { shapes } = new ShapeStorage();

let circles = shapes.filter((s) => s instanceof Circle);
//console.log(circles);
circles = circles.map((s) => {
  return new Circle(s.color, s.diameter * 2);
});
//console.log(circles);

let filteredShapes = shapes.filter((s) => s.calculateArea() > 100);
const shapes2D = shapes
  .filter((s) => s instanceof BaseShape2D)
  .filter((s) => s.calculatePerimeter() > 30)
  .map((s) => s.name);
const shapes3D = shapes
  .filter((s) => s instanceof BaseShape3D)
  .filter((s) => s.calculateVolume() > 100);
filteredShapes = shapes.filter((s) => s.name.length < 5);
const filteredShapesMap = filteredShapes.map((s) => s.color);
//console.log(filteredShapes);

shapes.sort((a, b) => b.calculateArea() - a.calculateArea());
shapes
  .filter((s) => !(s instanceof Triangle))
  //.filter((s) => Number.isNaN(s.calculateArea()))
  .forEach((s) => {
    // s.printInfo();
    // console.log();
  });

const totalArea = shapes
  .map((s) => s.calculateArea())
  //.filter((s) => !Number.isNaN(s))
  .reduce((a, b) => a + b);
//console.log(totalArea);

const totalPerimeter = shapes
  .filter((s) => s instanceof BaseShape2D)
  .map((s) => s.calculatePerimeter())
  .reduce((a, b) => a + b);
//console.log(totalPerimeter);

const totalVolume = shapes
  .filter((s) => s instanceof BaseShape3D)
  .map((s) => s.calculateVolume())
  .reduce((a, b) => a + b);
//console.log(totalVolume)

console.log(shapes.length)
// const testShape = {...shapes[0]}
// console.log(shapes.includes(testShape))
