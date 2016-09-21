import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'

import {hashHistory} from 'react-router'
import makeRoutes from './routes'

import './app.css'

import App from './App/App'

const routes = makeRoutes()

const mountNode = document.querySelector('#root');
render(
	<Provider store={store}>
  		<App history={hashHistory}
        	routes={routes} />
	</Provider>,
	mountNode);
