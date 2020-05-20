import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import Owners from 'components/Owners';
import { getRepositoriesSortedByOwnerNameSelector, getUniqLanguagesSelector } from 'store/selectors';
import { State } from 'store/types';
import { getParamValue } from 'helpers';
import { filterBySearchValue, hasMatchWithLanguageName } from 'containers/helpers';

import StateProps from './types';

const mapStateToProps = (state: State, props: RouteComponentProps): StateProps => {
  const languageParamValue = getParamValue(props.location, 'language');
  const repositoriesSortedByOwnerName = getRepositoriesSortedByOwnerNameSelector(state);

  return {
    repositories: filterBySearchValue(repositoriesSortedByOwnerName, languageParamValue, hasMatchWithLanguageName),
    languages: getUniqLanguagesSelector(state),
    languageParamValue,
  }
};

export default connect(mapStateToProps, null)(Owners);
