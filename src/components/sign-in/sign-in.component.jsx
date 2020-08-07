import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import { SignInContainer, ButtonsContainer, SignInTitle } from './sign-in.styles';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

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
    const { emailSignInStart } = this.props;
    const  { email, password } = this.state;
    emailSignInStart(email, password);
  }

  render () {
    const { googleSignInStart } = this.props;
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
              onClick={ googleSignInStart } 
              isGoogleSignIn
            >Sign In with Google</CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>    
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);