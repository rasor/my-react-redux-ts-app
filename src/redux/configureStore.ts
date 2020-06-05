/** https://redux.js.org/recipes/configuring-your-store/ */
import { applyMiddleware, compose, createStore } from 'redux'
//import thunkMiddleware from 'redux-thunk'

//import monitorReducersEnhancer from './enhancers/monitorReducers'
//import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'

export default function configureStore(preloadedState?: any) {
  //const middlewares = [loggerMiddleware, thunkMiddleware]
  //const middlewareEnhancer = applyMiddleware(...middlewares)

  //const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  //const composedEnhancers = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState)//, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}