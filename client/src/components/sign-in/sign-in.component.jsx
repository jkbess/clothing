import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import { SignInContainer, ButtonsContainer, SignInTitle } from './sign-in.styles';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [ userCredentials, setCredentials ] = useState({ email: '', password: ''});

  const  { email, password } = userCredentials;

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  }

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={ handleSubmit }>
        <FormInput 
          name='email' 
          type='email' 
          id='email' 
          value={ email } 
          label='email'
          handleChange={ handleChange }
          required 
        />

        <FormInput 
          name='password' 
          type='password' 
          id='password' 
          label='password'
          value={ password } 
          handleChange={ handleChange } 
          required 
        />

        <ButtonsContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton 
            type='button'
            onClick={ googleSignInStart } 
            isGoogleSignIn
          >Sign In with Google</CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>    
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);