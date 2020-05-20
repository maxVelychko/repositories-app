import { getParamValue } from './';

const location = {
  hash: '',
  key: '',
  pathname: '/',
  search: '',
  state: undefined,
};

describe('getParamValue', () => {
  it('should return param value', () => {
    const param = 'q';
    location.search = '?q=1';
    const expectedResult = '1';
    const actualResult = getParamValue(location, param);

    expect(actualResult).toBe(expectedResult);
  });

  it('should return empty string if url does not have param', () => {
    const param = 'w';
    location.search = '?q=1';
    const expectedResult = '';
    const actualResult = getParamValue(location, param);

    expect(actualResult).toBe(expectedResult);
  });

  it('should return empty string if no param passed', () => {
    const param = '';
    location.search = '?q=1';
    const expectedResult = '';
    const actualResult = getParamValue(location, param);

    expect(actualResult).toBe(expectedResult);
  });
})
