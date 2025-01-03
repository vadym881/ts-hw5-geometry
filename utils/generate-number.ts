import { ColorEnum } from "../types";

export const generateNumber = (base: number): number => {
  let result = 0;
  do {
    result = +Math.random().toFixed(base) * Math.pow(10, base);
  } while (result === 0);
  return result;
};

export const generateColorEnum = (): ColorEnum => {
  const num = generateNumber(1).toString();
  return ColorEnum[num];
};
