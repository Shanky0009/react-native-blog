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
	Meteor.subscribe('users')

	if(!Meteor.user()){
		user = ''
	} else {
		user = Meteor.user();
		Meteor.call('users.sessionUpdate', function(err){
			if(err)
				console.log("err",err)
		})
	}
  return {
    user: user,
  };
}, HomeContainer);

