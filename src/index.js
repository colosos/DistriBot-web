import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import { syncHistoryWithStore } from 'react-router-redux';
import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useScroll } from 'react-router-scroll';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} render={applyRouterMiddleware(useScroll())}/>
    </div>
  </Provider>, document.getElementById('app')
);
