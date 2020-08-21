import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import App from '../App'
import Home from '../views/home/index'

const routeConfig = [
  {
    path: '/',
    component: App,
    childRoutes: [{
      path: '/home',
      component: Home,
      meta: {
        isNeedHeader: true,
        isNeedFooter: true
      }
    }]
  }
]

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      {renderRoutes(routeConfig)}
    </Switch>
  </BrowserRouter>
)

export default BasicRoute