export default 'hello';

export function lazyFunction(argstr: string): number {
  let z = 1 + 1;
  z += 9;
  argstr + z;

  return 99;
}
