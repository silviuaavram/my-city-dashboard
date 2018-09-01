import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import { App } from './app/components/app';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
