import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import * as auth from './api/redirectLoginApi';
import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';
import DashboardPage from './containers/DashboardPage';
import PresalePage from './containers/PresalePage';
import ProductsPage from './containers/ProductsPage';
import OnlySupervisorPage from './containers/OnlySupervisorPage';
import OnlyManagerPage from './containers/OnlyManagerPage';
import DeliveryRoutesPage from './containers/DeliveryRoutesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute onEnter={auth.CheckAuth} component={HomePage}/>
    <Route path="login" onEnter={auth.CheckIfUnlogged} component={LoginPage}/>
    <Route path="estadisticas" onEnter={auth.CheckAuth} component={DashboardPage}/>
    <Route path="preventa" onEnter={auth.CheckAuth} component={PresalePage}/>
    <Route path="faltantes" onEnter={auth.CheckAuth} component={ProductsPage}/>
    <Route path="only-supervisor" onEnter={auth.CheckIfSupervisor} component={OnlySupervisorPage}/>
    <Route path="only-manager" onEnter={auth.CheckIfManager} component={OnlyManagerPage}/>
    <Route path="rutas" onEnter={auth.CheckIfSupervisor} component={DeliveryRoutesPage}/>
  </Route>
);
