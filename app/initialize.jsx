import { Redirect, Route, Router, browserHistory } from 'react-router';
import App from 'components/app';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App} path="/all" />
    <Route component={App} path="/active" />
    <Route component={App} path="/completed" />
    <Redirect from="/" to="/all" />
  </Router>,
  document.getElementById('container')
);
