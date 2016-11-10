import React, { Component } from 'react';
import { LayoutAnimation } from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import Routes from '../../../config/routes';
import SignUp from './SignUp';

class SignUpContainer extends Component {
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
      alert('Email and password cannot be empty.');
      valid = false;
    }

    if (valid) {
      this.handleError(null);
    }

    return valid;
  }

  handleSignUp() {
    if (this.validInput(true)) {
      const { email, password } = this.state;
      Meteor.loginWithPassword({email:email}, password, (err) => {
        if (err) {
          alert(err.reason);
        }
      });
      this.props.navigator.resetTo(Routes.getHomeRoute())
    }
  }

  handleCreateAccount() {
    const { username, email, password } = this.state;
    console.log(email, password);
    if (this.validInput()) {
      
      Accounts.createUser({ username, email, password }, function(err) {
        if (err) {
          alert(err.reason);
        } else {
          console.log("SignUp")
          this.handleSignUp();
        }
      });
    } else {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }
  }

  render() {
    return (
      <SignUp
        updateState={this.setState.bind(this)}
        createAccount={this.handleCreateAccount.bind(this)}
        {...this.state}
      />
    );
  }
}

export default SignUpContainer;
