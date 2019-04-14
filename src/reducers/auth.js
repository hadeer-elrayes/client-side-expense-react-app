import {AUTH_ATTEMPTING ,AUTH_SUCCESS , AUTH_FAILD , USER_LOGEDOUT, FETCHED_PROFILE} from '../actions/types'



const INITIAL_STATE = {

    attempting:false,
    isAuth:false,
    profile:{},
    error:null
};
 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_ATTEMPTING :
            return {...state,attempting:true,isAuth:false,error:null}
        case AUTH_SUCCESS :
            return {...state,attempting:false,isAuth:true,error:null}
        case AUTH_FAILD :
            return {...state,attempting:false,isAuth:false,error:action.payload}
        case USER_LOGEDOUT :
            return {...state,attempting:false,isAuth:false,profile:{}}
        case FETCHED_PROFILE :
            return {...state,profile:action.payload}
        default:
            return state
    }
}