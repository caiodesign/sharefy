import React from 'react';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { hot } from 'react-hot-loader/babel'

const RenderApp = () => (
  <Router>
    <div>
      Hello World
    </div>
  </Router>
)

export default hot(RenderApp)

serviceWorker.unregister();
