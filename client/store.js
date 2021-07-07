import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import earthquakeReducer from './dux/earthquake'
import profileReducer from './dux/profile'
import siteReducer from './dux/site'
import userReducer from './dux/user'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    user: userReducer,
    site: siteReducer,
    profile: profileReducer,
    earthquake: earthquakeReducer
  }),
  window.__DEFAULT_STATE__,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store
