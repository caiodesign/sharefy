import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'

const isDevelopment = process.env.NODE_ENV !== 'production'
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  sagaMiddleware,
]

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
)

sagaMiddleware.run(sagas)

export default store
