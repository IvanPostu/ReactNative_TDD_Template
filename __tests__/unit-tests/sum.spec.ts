import * as dependencies from '@/Utils/lazyFunctionExample';

import {sum} from '@/Utils/sum';

describe('sum module test', () => {
  test('sum function test using mock', () => {
    const spy = jest
      .spyOn(dependencies, 'lazyFunction')
      .mockImplementation(() => 2);

    expect(sum(1, 1)).toBe(4);

    spy.mockRestore();
  });

  test('sum function test', () => {
    expect(sum(1, 1)).toBe(101);
  });
});
