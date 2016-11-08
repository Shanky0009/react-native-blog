import React, { Component } from 'react';
import { LayoutAnimation } from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import Routes from '../../config/routes';
import SignIn from './SignIn';

class SignInContainer extends Component {
  constructor(props) {
    super(props);

    this.mounted = false;
    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleError(error) {
    if (this.mounted) {
      this.setState({ error });
    }
  }

  validInput() {
    const { email, password } = this.state;
    let valid = true;

    if (email.length === 0 || password.length === 0) {
      this.handleError('Email and password cannot be empty.');
      valid = false;
    }

    if (valid) {
      this.handleError(null);
    }

    return valid;
  }

  handleSignIn() {
    if (this.validInput(true)) {
      const { email, password } = this.state;
      console.log("users :", email, password)
      Meteor.loginWithPassword({email:email}, password, (err) => {
        if (err) {
          console.log(err);
          console.log(Meteor.user())
        } else {
          console.log("in")
          this.props.navigator.resetTo(Routes.getHomeRoute())
        }
      });
    }
  }

  handleCreateAccount() {
    const { email, password } = this.state;
    console.log(email, password);
    if (this.validInput()) {
      
      Accounts.createUser({ email, password }, function(err) {
        if (err) {
          console.log(err.reason);
        } else {
          console.log("SignIn")
          this.handleSignIn();
        }
      });
    } else {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }
  }

  render() {
    return (
      <SignIn
        updateState={this.setState.bind(this)}
        signIn={this.handleSignIn.bind(this)}
        createAccount={this.handleCreateAccount.bind(this)}
        {...this.state}
      />
    );
  }
}

export default SignInContainer;
