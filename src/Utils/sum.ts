import {lazyFunction} from './lazyFunctionExample';

export function sum(a: number, b: number): number {
  const z = lazyFunction('aa');
  return a + b + z;
}
