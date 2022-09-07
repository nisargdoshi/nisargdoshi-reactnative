import { createStore, applyMiddleware } from 'redux'
import createSaggaMiddleware from 'redux-saga'
import { reducer } from '../src/root-reducer'
import  hanlder  from '../src/features/prodcut/saga.js';

const sagaMiddleware = createSaggaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(hanlder)
export { store }