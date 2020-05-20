import { Repositories } from 'store/types';

export default interface StateProps {
  repositories: Repositories;
  searchParamValue: string;
}
