import {combineReducers} from 'redux';
import auth from './auth'
import expense from './expense_reducer';
import errors from './error_reducer';
export default combineReducers({
    auth,
    expense,
    errors
});