import * as dependencies from '@/lazyFunctionExample';

import {sum} from '@/sum';

describe('sum module test', () => {
  test('q', () => {
    const spy = jest
      .spyOn(dependencies, 'lazyFunction')
      .mockImplementation(() => 2);

    expect(sum(1, 1)).toBe(4);

    spy.mockRestore();
  });

  test('sum test without mock', () => {
    expect(sum(1, 1)).toBe(101);
  });
});
