import {AUTH_ATTEMPTING , AUTH_FAILD ,AUTH_SUCCESS ,USER_LOGEDOUT , FETCHED_PROFILE , REGISTER} from './types';
import axios from 'axios';
const cs = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

export const logIn = request_data => {
     return async dispatch => {
       dispatch({type:AUTH_ATTEMPTING})
         try{
           const {data} = await axios.post(`${cs}/users/authentication` , request_data);
           dispatch(success(data))
           dispatch(fetchProfile(data.token))
         }catch(e){
             dispatch(error(e.response.data.error))
         }
     };

};

export const Signup = request_data => {
  return async dispatch => {
    dispatch({type:REGISTER})
      try{
        const {data} = await axios.post(`${cs}/users/register` , request_data);
        dispatch(success(data))
      }catch(e){
          dispatch(error(e.response.data.error))
      }
  };

};

export const fetchProfile = (token) =>{
  return async dispatch =>{
    try {
      if(token)
      {
        axios.defaults.headers.common['authorization'] = token;
      }else {
       delete axios.defaults.headers.common['authorization']
      }
    
    const {data :{user}} = await axios.get(`${cs}/users/profile`,token)
    dispatch({type:FETCHED_PROFILE , payload:user})
  }catch(e){
    console.error(e);
  }
}
}

export const onLoadingSignIn = () =>{
  return dispatch =>{
    try {
      // const token = localStorage.getItem('expense-app-token')
      // if(token !== null || token !== 'undefined')
      // {
      //   dispatch(success(token))
      // }


    }catch(e){
      console.error(e)
    }
     
  }
}

export const logUserOut = ()=>
{
  localStorage.clear();
  return ({type:USER_LOGEDOUT})
}

const success = (data)=>{
  localStorage.setItem('expense-app-token',data.token);
  localStorage.setItem('expense_app_user',data.user._id)
  return {type : AUTH_SUCCESS}
}
const error = (data)=>{
  return {type:AUTH_FAILD, payload:data}
}