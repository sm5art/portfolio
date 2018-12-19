/** @format */
import React from 'react';
import { Component } from 'react';
import Info from '../../common/containers/Info';
import Shell from '../../common/containers/Shell';
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import  configureStore  from '../../common/store';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
(<Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Shell}>
        <IndexRoute component={Info}/>
      </Route>
    </Router>
    </Provider>)
      , document.getElementById("root"));
