import { Circle } from "./models/circle"
import { Ellipse } from "./models/ellipse"
import { Polygon } from "./models/polygon"
import { Rectangle } from "./models/rectangle"
import { Square } from "./models/square"
import { Triangle } from "./models/triangle"

const square = new Square('red', 5)
square.printInfo()
console.log(square.getNumberOfSides())
square.printAreaFormula()

const rectangle = new Rectangle('blue', 4, 5)
rectangle.printInfo()
console.log(rectangle.getNumberOfSides())
rectangle.printAreaFormula()

const triangle = new Triangle('green', 3, 4, 5)
triangle.printInfo()
console.log(triangle.calcHeight(5))
console.log(triangle.getNumberOfSides())
console.log(triangle.getTriangleType())
triangle.printAreaFormula()

const circle = new Circle('yellow', 6)
circle.printInfo()
circle.printDiameter()

const ellipse = new Ellipse('purple', 3, 8)
ellipse.printInfo()
ellipse.printDiameter()

const polygon = new Polygon('pink', [1, 2])
polygon.printInfo()