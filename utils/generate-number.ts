export const generateNumber = (base: number): number => {
  return +Math.random().toFixed(base) * Math.pow(10, base);
}
