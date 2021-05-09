import {combineReducers} from 'redux';
import {counterReducer} from './Counter/counterReducer';

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
