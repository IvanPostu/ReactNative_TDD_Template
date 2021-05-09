import * as dependencies from '@/Utils/lazyFunctionExample';

import {sum} from '@/Utils/sum';

describe('sum module test', () => {
  test('spy (mock) example', () => {
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
