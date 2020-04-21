import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

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
      <div className='sign-in'>
        <h2>I already have an account</h2>
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

          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign In with Google</CustomButton>
          </div>
        </form>
      </div>    
    );
  }
}

export default SignIn;