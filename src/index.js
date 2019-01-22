import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import drawRoutes from './routes/'

const App = () => drawRoutes()

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
