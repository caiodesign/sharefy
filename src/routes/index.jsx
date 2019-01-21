import React from 'react'
import Home from '../containers/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";

const Routes = [
  {path: '/', component: Home}
]

const drawRoutes = () => (
  <Router>
    {Routes.map(item => (
      <Route path={item.path} component={item.component}/>
    ))}
  </Router>
)

export default drawRoutes
