type Props = {
  xCapacity: number;
  yCapacity: number;
  zAmount: number;
};

export default function isSolutionImpossible({ xCapacity, yCapacity, zAmount }: Props) {
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  return zAmount % gcd(xCapacity, yCapacity) !== 0;
}
