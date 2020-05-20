import { createSelector } from 'reselect';

import { State, Repositories, Languages } from './types';

export const getRepositoriesSelector = (state: State) => state.repositories;

export const getRepositoriesSortedByOwnerNameSelector = createSelector(
  getRepositoriesSelector,
  (repositories: Repositories): Repositories => {
    if (!repositories.length) return [];

    const repositoriesCopy = [...repositories];
    return repositoriesCopy.sort((firstItem, secondItem) => {
      if (firstItem.owner < secondItem.owner) return -1;
      return firstItem.owner > secondItem.owner ? 1 : 0;
    });
  }
);

export const getUniqLanguagesSelector = createSelector(
  getRepositoriesSelector,
  (repositories: Repositories): Languages => {
    if (!repositories.length) return [];

    const uniqLanguages: Languages = [];
    for (let i = 0; i < repositories.length; i++) {
      let languages = repositories[i].languages;
      for (let j = 0; j < languages.length; j++) {
        if (!uniqLanguages.includes(languages[j])) uniqLanguages.push(languages[j]);
      }
    }

    return uniqLanguages;
  }
);
