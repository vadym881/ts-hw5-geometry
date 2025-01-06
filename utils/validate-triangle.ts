export function getValidationExpression(
  side1: number,
  side2: number,
  side3: number
): number {
  const halfPerim = (side1 + side2 + side3) / 2;
  return (
    halfPerim * (halfPerim - side1) * (halfPerim - side2) * (halfPerim - side3)
  );
}
