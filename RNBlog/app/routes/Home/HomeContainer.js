import React, { PropTypes } from 'react';
import Home from './Home';
import Meteor , { createContainer } from 'react-native-meteor';
import Routes from '../../config/routes';

const HomeContainer = (props) => {
	return (
		<Home
			onSignInPress={() => props.navigator.push(Routes.getSignInRoute())}
			onLogoutPress={() => props.navigator.push(Routes.getLogoutRoute())}
			user={props.user}
		/>	
	);
};

export default createContainer(() => {
	if(!Meteor.user()){
		user = ''
	} else {
		user = Meteor.user();
	}
  return {
    user: user,
  };
}, HomeContainer);

