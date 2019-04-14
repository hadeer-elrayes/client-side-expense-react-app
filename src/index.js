import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {onLoadingSignIn} from './actions/auth-actions';

store.dispatch(onLoadingSignIn());

ReactDOM.render(<BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter> , document.getElementById('root'));

serviceWorker.unregister();
