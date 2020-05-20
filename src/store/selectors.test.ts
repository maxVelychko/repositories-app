import { State, Repositories } from './types';

import {
  getRepositoriesSelector,
  getRepositoriesSortedByOwnerNameSelector,
  getUniqLanguagesSelector,
} from './selectors';

const firstRepository = {
  name: 'react',
  owner: 'afishlee0',
  languages: ['Scala', 'Basic'],
};

const secondRepository = {
  name: 'sinatra',
  owner: 'kwenger5',
  languages: ['TypeScript'],
};

const createState = (repositories: Repositories): State => ({
  repositories,
});

describe('getRepositoriesSelector', () => {
  it('returns no repositories from state', () => {
    const repositories: Repositories = [];
    const state = createState(repositories);
    const actualResult = getRepositoriesSelector(state);

    expect(actualResult).toEqual(repositories);
  });
  
  it('returns repositories from state', () => {
    const repositories = [firstRepository, secondRepository];
    const state = createState(repositories);
    const actualResult = getRepositoriesSelector(state);

    expect(actualResult).toEqual(repositories);
  });
});

describe('getRepositoriesSortedByOwnerNameSelector', () => {
  it('returns no repositories from state', () => {
    const repositories: Repositories = [];
    const state = createState(repositories);
    const actualResult = getRepositoriesSortedByOwnerNameSelector(state);

    expect(actualResult).toEqual(repositories);
  });

  it('returns sorted repositories from state', () => {
    const repositories = [secondRepository, firstRepository];
    const state = createState(repositories);
    const actualResult = getRepositoriesSortedByOwnerNameSelector(state);
    const expectedResult = [firstRepository, secondRepository];

    expect(actualResult).toEqual(expectedResult);
  });
});

describe('getUniqLanguagesSelector', () => {
  it('returns no uniq languages if repositories is empty', () => {
    const repositories: Repositories = [];
    const state = createState(repositories);
    const actualResult = getUniqLanguagesSelector(state);

    expect(actualResult).toEqual(repositories);
  });

  it('returns uniq languages from repositories', () => {
    const repositories = [firstRepository, secondRepository];
    const state = createState(repositories);
    const actualResult = getUniqLanguagesSelector(state);
    const expectedResult = ['Scala', 'Basic', 'TypeScript'];

    expect(actualResult).toEqual(expectedResult);
  });
});
