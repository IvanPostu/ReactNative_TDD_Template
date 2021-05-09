import {Action} from 'redux';

export interface CounterStateType {
  counter: number;
}

export enum counterActionTypeConstants {
  INCREMENT = '@Counter/INCREMENT',
  DECREMENT = '@Counter/DECREMENT',
  SET_ZERO = '@Counter/SET_ZERO',
  SET_VALUE = '@Counter/SET_VALUE',
}

export interface IncrementActionType extends Action {
  type: typeof counterActionTypeConstants.INCREMENT;
}

export interface DecrementActionType extends Action {
  type: typeof counterActionTypeConstants.DECREMENT;
}

export interface SetZeroActionType extends Action {
  type: typeof counterActionTypeConstants.SET_ZERO;
}

export interface SetValueActionType extends Action {
  type: typeof counterActionTypeConstants.SET_VALUE;
  payload: number;
}

export type CounterRootActionType =
  | IncrementActionType
  | DecrementActionType
  | SetZeroActionType
  | SetValueActionType;
