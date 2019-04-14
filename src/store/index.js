import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';
const middleWares = [thunk]
const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
export default createStore(reducers,{},storeEnhancer(applyMiddleware(...middleWares)));