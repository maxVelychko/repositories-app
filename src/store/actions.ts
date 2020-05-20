import { Action, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { State } from './types';

const FETCH_REPOSITORIES_FAILED = 'FETCH_REPOSITORIES_FAILED';
const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const FETCH_REPOSITORIES_SUCCEEDED = 'FETCH_REPOSITORIES_SUCCEEDED';

export const setSearchText = (searchText: string): AnyAction => ({
  type: SET_SEARCH_TEXT,
  searchText
});

const fetchRepositoriesSucceeded = ({ repositories }: State): AnyAction => ({
  type: FETCH_REPOSITORIES_SUCCEEDED,
  repositories,
});

// ToDo: handle the failed scenario
const fetchRepositoriesFailed = (): AnyAction => ({
  type: FETCH_REPOSITORIES_FAILED,
});

export const fetchRepositories = (): ThunkAction<void, State, unknown, Action<string>> => (dispatch: Dispatch) => {
  return fetch('/api/repos.json')
    .then(response => response.json())
    .then(json => dispatch(fetchRepositoriesSucceeded(json)))
    .catch(_error => dispatch(fetchRepositoriesFailed()));
}
