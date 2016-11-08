import React, {Component} from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import settings from './config/settings';
import Logged from './layouts/Logged';
import LoggedIn from './layouts/LoggedIn';
import Home from './routes/Home';

Meteor.connect(settings.METEOR_URL);

class Blog extends Component{
	render(){
		const { status, user, loggingIn } = this.props;

		if (user !== null) {
		    return <LoggedIn />;
		} else {
			return <Logged />;
		}
		
		
	}
	
}

export default createContainer(() => {
  return {
    status: Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
  };
}, Blog);