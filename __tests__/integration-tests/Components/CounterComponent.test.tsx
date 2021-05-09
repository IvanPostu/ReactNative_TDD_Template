import 'react-native';
import React from 'react';
import {fireEvent, render, act} from '@testing-library/react-native';
import {CounterComponent} from '@/Components/CounterComponent';

describe('CounterComponent test', () => {
  test('CounterComponent snapshot', () => {
    const tree = render(<CounterComponent />);
    expect(tree).toMatchSnapshot();
  });

  test('Increment button click test', () => {
    const rendererComponent = render(<CounterComponent />);
    const incrButton = rendererComponent.getByTestId('incrBtn');

    fireEvent.press(incrButton);
    fireEvent.press(incrButton);
    fireEvent.press(incrButton);
    fireEvent.press(incrButton);

    const outTextElement = rendererComponent.getByTestId('out');

    expect(outTextElement.props.children).toEqual(4);
  });

  test('Timeout is called', () => {
    const rendererComponent = render(<CounterComponent />);
    const outTextElement = rendererComponent.getByTestId('out');

    act(() => {
      jest.runAllTimers();
    });

    expect(outTextElement.props.children).toEqual(101);
  });
});
