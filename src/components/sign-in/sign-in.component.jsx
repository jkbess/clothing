import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInContainer, ButtonsContainer, SignInTitle } from './sign-in.styles';

class SignIn extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const  { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''});
    } catch (error) {
      console.error(error);
    }
    this.setState({ email: '', password: ''});
  }

  render () {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={ this.handleSubmit }>
          <FormInput 
            name='email' 
            type='email' 
            id='email' 
            value={ this.state.email } 
            label='email'
            handleChange={ this.handleChange }
            required 
          />

          <FormInput 
            name='password' 
            type='password' 
            id='password' 
            label='password'
            value={ this.state.password } 
            handleChange={ this.handleChange } 
            required 
          />

          <ButtonsContainer>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton 
              type='button'
              onClick={ signInWithGoogle } 
              isGoogleSignIn
            >Sign In with Google</CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>    
    );
  }
}

export default SignIn;