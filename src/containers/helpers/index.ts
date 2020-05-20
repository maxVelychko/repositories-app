import { Repositories } from 'store/types';

import CompareFn from  './types';

export const hasMatchWithOwnerName: CompareFn = (item, searchValue) =>
  item.owner.toLowerCase().includes(searchValue.toLowerCase());

export const hasMatchWithLanguageName: CompareFn = (item, searchValue) =>
  item.languages.includes(searchValue);

export const filterBySearchValue = (
  repositories: Repositories,
  searchValue: string,
  compareFn: CompareFn,
): Repositories => {
  if (!searchValue) return repositories;

  return repositories.filter(item => compareFn(item, searchValue));
};
