import React, { Component , PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import Routes from '../../../config/routes';
import ProfileUpdate from './ProfileUpdate';

class ProfileUpdateContainer extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<ProfileUpdate 
				onProfileUpdatePress={()=> this.props.navigator.push(Routes.getProfileUpdate())}
				updateState={this.setState.bind(this)}
				{...this.state}
			/>	
		)
	}
}

export default createContainer(()=>{
	
	if(Meteor.user().profile){
		profile=Meteor.user().profile;
	} else {
		profile='';
	}

	return {
		profile:profile
	}
}, ProfileUpdateContainer)