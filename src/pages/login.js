import React, { Component } from 'react';
import  { Button , FormGroup , Label , Input , FormFeedback  , Alert} from 'reactstrap';
import {Formik} from 'formik';
import{Link} from 'react-router-dom';
import{connect} from 'react-redux';
import {logIn} from '../actions/auth-actions';

class LoginPage extends Component {

    componentDidUpdate(){
        const {error , isAuth} = this.props;
        if(error){
            this.bag.setSubmitting(false);
        }
        if(isAuth){
            this.props.history.push('/')
        }
    }
    _handleFormSubmit(values , bag)
    {
        this.props.logIn(values);
       this.bag = bag;
    }
    render() { 
        return (
             <div style={{padding:20}}>
                 <h3>Sign In To Your Account !</h3>
                 <hr />
                 <Formik
                     initialValues={{email:'',password:''}}
                     onSubmit={this._handleFormSubmit.bind(this)}
                    
                     render = {({
                         handleChange,
                         handleSubmit,
                         isSubmitting
                     }) =>(
                         <div>
                        <FormGroup>
                     <Label>Email</Label>
                     <Input name='email' type='email' placeholder='aa@aa.aa' onChange={handleChange}/>                    
                 </FormGroup>
                 <FormGroup >
                     <Label>Password</Label>
                     <Input name='password' type='password' onChange={handleChange} />
                 </FormGroup>
                 <Button block onClick={handleSubmit} disabled={ isSubmitting} >Log In</Button>
                 </div>
                     )}

                 />
                <Link to='/register'>Do not have an account ? Register</Link>
                 
             </div>
             
              );
    }
}
const mapStateToProps = ({auth}) =>{
    return{
        attempting : auth.attempting,
        error : auth.error,
        isAuth :auth.isAuth

    }
}
 const Login = connect(mapStateToProps,{logIn})(LoginPage)
export default Login;