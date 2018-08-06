import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import redPlayer from './redPlayer'
import yellowPlayer from './yellowPlayer'
import bluePlayer from './bluePlayer'
import greenPlayer from './greenPlayer'
import gameState from './gameState'

const reducer = combineReducers({
  redPlayer,
  yellowPlayer,
  bluePlayer,
  greenPlayer,
  gameState
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware)

export default store
