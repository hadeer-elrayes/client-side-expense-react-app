import React, { Component } from 'react';
import { Button, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import{connect} from 'react-redux';
import {Signup} from '../actions/auth-actions'

class SignUp extends Component {
  _handleFormSubmit(values) {
    this.props.Signup(values)
    console.log(values);
  }
  render() {
    return (
      <div style={{ padding: 20 }}>
        <h3>Create new account</h3>
        <hr />
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={this._handleFormSubmit.bind(this)}
          validationSchema={Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
              .email()
              .required(),
            password: Yup.string()
              .min(6)
              .required()
          })}
          render={({
            handleChange,
            handleSubmit,
            isValid,
            isSubmitting,
            handleBlur,
            errors,
            touched
          }) => (
            <div>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  invalid={errors.name && touched.name}
                  name='name'
                  type='string'
                  placeholder='Your Name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.name && touched.name && (
                  <FormFeedback>{errors.name}</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  invalid={errors.email && touched.email}
                  name='email'
                  type='email'
                  placeholder='someone@abolkog.com'
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.email && touched.email && (
                  <FormFeedback>{errors.email}</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  invalid={errors.password && touched.password}
                  name='password'
                  type='password'
                  placeholder='Your Password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <FormFeedback>{errors.password}</FormFeedback>
                )}
              </FormGroup>
              <Button
                color='primary'
                block
                onClick={handleSubmit}
                disabled={!isValid || isSubmitting}
              >
                Create Account
              </Button>
            </div>
          )}
        />
        <Link to='/login'>Have an account? Sign In</Link>
      </div>
    );
  }
}
const mapStateToProps = (auth) =>{
  return{
     ptofile:auth.profile

  }
}

const Register = connect(mapStateToProps,{Signup})(SignUp)
export default Register;