import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from './routes'

const drawRoutes = () => (
  <Router>
    <Switch>
      {Routes.map(item => (
        <Route
          exact={item.exact}
          key={item.path}
          path={item.path && item.path}
          component={item.component}
        />
      ))}
    </Switch>
  </Router>
)

export default drawRoutes
