import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import Routes from '../../../config/routes';
import Chats from './Chats';
import ChatView from '../ChatView/ChatView.js'

class ChatsContainer extends Component{
	constructor(props){
		super(props)
	}

	onOpenChat(user){
		console.log("ok")
		// return(
		// 	<ChatView user={Meteor.user()} />
		// )
		this.props.navigator.resetTo(Routes.getChatViewRoute(user))
		
	}

	render(){
		return(
			<Chats
				onOpenChat={(user) => this.onOpenChat(user)}
			/>	
		)
	}
}

export default createContainer(() => {
	Meteor.subscribe('users')
	var chatHandle = Meteor.subscribe('chats')
	return {
		chatHandle:chatHandle.ready()
	}
}, ChatsContainer);