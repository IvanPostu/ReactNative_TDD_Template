import rootReducer from './rootReducer';

export {ReduxWrapper} from './ReduxWrapper';
export type ReduxGlobalStateType = ReturnType<typeof rootReducer>;
