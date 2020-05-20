import { Location } from 'history';

export const getParamValue = (location: Location, param: string): string => {
  const params = new URLSearchParams(location.search);
  const paramValue = params.get(param);
  
  return paramValue === null ? '' : paramValue;
};
