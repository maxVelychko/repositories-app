import { Repository } from 'store/types';

type CompareFn = (item: Repository, searchValue: string) => boolean;

export default CompareFn;
