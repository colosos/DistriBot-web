import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Container from './Container'

import LoginForm from '../../components/Login/Login'

/*<Route path="/" component={Container}>
      <Route path="map" component={Map}>
      <Route path="detail/:placeId"
        component={Detail} />
      </Route>

      <IndexRoute component={Map} />
    </Route>*/

export const makeMainRoutes = () => {
  return (
  	<Route path="/" component={Container}>
  	</Route>
  )
}

export default makeMainRoutes
