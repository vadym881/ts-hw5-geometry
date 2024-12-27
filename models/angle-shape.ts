import { AngleType, BaseShape } from "./base-shape";

export abstract class AngleShape extends BaseShape {
  abstract sides: number[];
  constructor(name: AngleType, color: string) {
    super(name, color);
  }
}
