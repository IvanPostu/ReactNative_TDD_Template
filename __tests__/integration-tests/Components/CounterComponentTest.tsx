import {CounterComponent} from '@/Components/CounterComponent';
import React from 'react';
import {create, act} from 'react-test-renderer';

const tree = create(<CounterComponent />);

describe('CounterComponent test', () => {
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
});
