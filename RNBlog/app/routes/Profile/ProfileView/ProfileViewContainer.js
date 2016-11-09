import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import ProfileView from './ProfileView';

class ProfileContainer extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<ProfileView
				profile={this.props.profile}
			/>	
		)
	}
}

export default createContainer(() => {
	if(Meteor.user().profile){
		profile=Meteor.user().profile
	} else {
		profile=''
	}

	return {
		profile:profile
	}
}, ProfileContainer);
