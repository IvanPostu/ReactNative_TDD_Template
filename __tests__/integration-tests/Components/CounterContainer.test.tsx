import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import CounterContainer from '@/Components/CounterContainer';
import React from 'react';
import {expect, test, describe} from '@jest/globals';

import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {counterReducer} from '@/Redux/Counter/counterReducer';

const rootReducer = combineReducers({
  counterReducer,
});
const store = createStore(rootReducer, {counterReducer: {counter: 10}});

describe('CounterContainer test', () => {
  test('CounterContainer set count value correctly', async () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <CounterContainer />
      </Provider>,
    );
    const setValueButton = getByTestId('setValueButton');
    const inputValue = getByTestId('inputValue');
    const outputValue = getByTestId('outputValue');
    const incrementBtn = getByTestId('incrementBtn');
    const decrementBtn = getByTestId('decrementBtn');

    fireEvent.press(incrementBtn);
    fireEvent.press(incrementBtn);
    expect(outputValue.props.children).toEqual('12');

    fireEvent.press(decrementBtn);
    fireEvent.press(decrementBtn);
    fireEvent.press(decrementBtn);
    fireEvent.press(decrementBtn);
    expect(outputValue.props.children).toEqual('8');

    await fireEvent.changeText(inputValue, '1022');
    fireEvent.press(setValueButton);
    expect(outputValue.props.children).toEqual('1022');

    expect(store.getState().counterReducer.counter).toBe(1022);
  });
});
