import { applyMiddleware, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const getStore = (): Store => {
  const initialState = { repositories: [] };
  const composedEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));

  // @ts-ignore
  return createStore(rootReducer, initialState, composedEnhancers);
}

export default getStore;
