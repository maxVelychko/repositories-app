import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import Home from 'components/Home';
import { State } from 'store/types';
import { getParamValue } from 'helpers';
import { filterBySearchValue, hasMatchWithOwnerName } from 'containers/helpers';

import StateProps from './types';

const mapStateToProps = (state: State, props: RouteComponentProps): StateProps => {
  const searchParamValue = getParamValue(props.location, 'q');

  return {
    repositories: filterBySearchValue(state.repositories, searchParamValue, hasMatchWithOwnerName),
    searchParamValue,
  };
};

export default connect(mapStateToProps, null)(Home);
