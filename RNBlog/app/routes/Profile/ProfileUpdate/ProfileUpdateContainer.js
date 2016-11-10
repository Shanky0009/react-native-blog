import React, { Component , PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import Routes from '../../../config/routes';
import ProfileUpdate from './ProfileUpdate';

class ProfileUpdateContainer extends Component{
	constructor(props){
		super(props);
		this.state={
			firstName:'',
			lastName:'',
			address:'',
			phnNo:'',
		}
	}

	onProfileUpdatePress(event){
		event.preventDefault();
	 	console.log(this.state)
	 	Meteor.call('users.profileUpdate', this.state, (err) => {
	 		if(err)
	 			alert(err.reason)
	 		else
	 			this.props.navigator.resetTo(Routes.getProfileViewRoute())
	 	});
	}

	componentWillReceiveProps(){
		this.setState(this.props.profile)	
	}

	render(){
		
		return(
			<ProfileUpdate 
				onProfileUpdatePress={this.onProfileUpdatePress.bind(this)}
				updateState={this.setState.bind(this)}
				profile={this.props.profile}
				{...this.state}
			/>	
		)
	}
}

export default createContainer(()=>{
	
	Meteor.subscribe('users');

	if(Meteor.user().profile){
		profile=Meteor.user().profile;
	} else {
		profile='';
	}

	return {
		profile:profile
	}
}, ProfileUpdateContainer)