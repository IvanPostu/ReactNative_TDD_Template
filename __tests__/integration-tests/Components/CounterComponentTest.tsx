import {CounterComponent} from '@/Components/CounterComponent';
import React from 'react';
import {create, act, ReactTestRenderer} from 'react-test-renderer';

describe('CounterComponent test', () => {
  let tree: ReactTestRenderer;

  beforeEach(() => {
    tree = create(<CounterComponent />);
  });

  test('CounterComponent snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  test('Increment button click test', () => {
    const incrButton = tree.root.findByProps({testID: 'incrBtn'}).props;

    act(() => incrButton.onPress());
    act(() => incrButton.onPress());
    act(() => incrButton.onPress());
    act(() => incrButton.onPress());

    const text = tree.root.findByProps({testID: 'out'}).props;

    expect(text.children).toEqual(4);
  });

  test('Timeout is called', () => {
    act(() => {
      jest.runAllTimers();
    });

    const text = tree.root.findByProps({testID: 'out'}).props;
    expect(text.children).toEqual(101);
  });
});
