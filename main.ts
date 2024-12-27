import { Rectangle } from "./models/rectangle";
import { Square } from "./models/square";

const square = new Square("green", 4);
console.log(square.getSides())
square.printInfo();

const rectangle = new Rectangle('blue', 3, 7);
rectangle.printInfo()
