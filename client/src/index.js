/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './css/styles.css';
import { loadText } from './actions/typing-actions';

const store = configureStore();

render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
