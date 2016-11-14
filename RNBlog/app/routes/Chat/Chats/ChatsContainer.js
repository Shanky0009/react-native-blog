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
		this.props.navigator.resetTo(Routes.getChatViewRoute(user))		
	}

	renderChatDetails(id){
		console.log("id",id+Meteor.userId(), Meteor.userId()+id)
		console.log(Meteor.collection('chats').find())
	}

	render(){
		return(
			<Chats
				onOpenChat={(user) => this.onOpenChat(user)}
				renderChatDetails={(id) => this.renderChatDetails(id)}
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