import {Reducer} from 'redux';

import {
  CounterRootActionType,
  CounterStateType,
  counterActionTypeConstants as T,
} from './types.d';

const initialState: CounterStateType = {
  counter: 0,
};

export const counterReducer: Reducer<
  CounterStateType,
  CounterRootActionType
> = (
  state: CounterStateType = initialState,
  action: CounterRootActionType,
): CounterStateType => {
  switch (action.type) {
    case T.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case T.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case T.SET_ZERO:
      return {
        ...state,
        counter: 0,
      };

    case T.SET_VALUE:
      return {
        ...state,
        counter: action.payload,
      };

    default:
      return state;
  }
};
