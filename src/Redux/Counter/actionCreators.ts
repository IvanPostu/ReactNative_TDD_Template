import * as T from './types.d';

export function incrementActionCreator(): T.IncrementActionType {
  return {
    type: T.counterActionTypeConstants.INCREMENT,
  };
}

export function decrementActionCreator(): T.DecrementActionType {
  return {
    type: T.counterActionTypeConstants.DECREMENT,
  };
}

export function setZeroActionCreator(): T.SetZeroActionType {
  return {
    type: T.counterActionTypeConstants.SET_ZERO,
  };
}

export function setValueActionCreator(val: number): T.SetValueActionType {
  return {
    type: T.counterActionTypeConstants.SET_VALUE,
    payload: val,
  };
}
