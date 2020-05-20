import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import getStore from 'store';
import { fetchRepositories } from 'store/actions';
import App from 'components/App';

import './index.scss';

const store = getStore();
// @ts-ignore
store.dispatch(fetchRepositories());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
