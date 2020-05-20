export type Languages = string[];

export interface Repository {
  name: string;
  owner: string;
  languages: Languages;
}

export type Repositories = Repository[];

export interface State {
  repositories: Repositories;
}
