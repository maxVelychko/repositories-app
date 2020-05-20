import { Repositories, Languages } from 'store/types';

export default interface StateProps {
  repositories: Repositories;
  languages: Languages;
  languageParamValue: string;
}
