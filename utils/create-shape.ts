import { BaseShape } from "../models/base-shape";
import { Rectangle } from "../models/rectangle";
import { generateColorEnum, generateNumber } from "./generate-number";

export function createShape(): BaseShape {
  const side1 = generateNumber(1);
  const side2 = generateNumber(1);
  const color = generateColorEnum();
  return new Rectangle(color, side1, side2);
}
