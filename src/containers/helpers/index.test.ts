import { Repositories } from 'store/types';

import { filterBySearchValue, hasMatchWithOwnerName } from './';

const state = {
  repositories: [
    {
      name: 'react',
      owner: 'afishlee0',
      languages: ['Scala', 'C'],
    }
  ]
};

describe('filterBySearchValue', () => {
  it('should find repositories matching to search param', () => {
    const searchParamValue = 'afish';
    const expectedResult = state.repositories;
    const actualResult = filterBySearchValue(state.repositories, searchParamValue, hasMatchWithOwnerName);

    expect(actualResult).toEqual(expectedResult);
  });

  it('should not find repositories not matching to search param', () => {
    const searchParamValue = 'unknown';
    const expectedResult: Repositories = [];
    const actualResult = filterBySearchValue(state.repositories, searchParamValue, hasMatchWithOwnerName);

    expect(actualResult).toEqual(expectedResult);
  });

  it('should return all repositories if search param is empty', () => {
    const searchParamValue = '';
    const expectedResult = state.repositories;
    const actualResult = filterBySearchValue(state.repositories, searchParamValue, hasMatchWithOwnerName);

    expect(actualResult).toEqual(expectedResult);
  });
});
