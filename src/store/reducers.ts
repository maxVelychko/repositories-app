import { AnyAction } from 'redux';

import { State } from './types';
import { FETCH_REPOSITORIES_SUCCEEDED } from './actions';

const rootReducer = (state: State, action: AnyAction) => {
  switch (action.type) {
    case FETCH_REPOSITORIES_SUCCEEDED:
      return Object.assign({}, state, {
        repositories: action.repositories,
      });
    default:
      return state;
  }
}

export default rootReducer;
