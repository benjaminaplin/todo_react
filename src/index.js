import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

//Provider,taking prop as store, wraps store around entry point component
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,  
  document.getElementById('app')
);