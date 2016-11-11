import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import ChatView from './ChatView';

class ChatViewContainer extends Component{
	constructor(props){
		super(props)
		this.state={
			msg:''
		}
	}

	submitChat(){
		currentUser = Meteor.user();
          user = this.props.user;
          message = this.state.msg;
         
         console.log(currentUser._id, user._id, message) 
          Meteor.call('users.chat', message, user, currentUser , function(err){
            if(err){
              alert(err.reason)
            }
          });
        this.setState({msg:''});
	}

	render(){
		return(
			<ChatView 
				user={this.props.user}
				chats={Meteor.collection('chats').findOne({ _id: { $in: [this.props.user._id+Meteor.userId(), Meteor.userId()+this.props.user._id] } })}
				submitChat={this.submitChat.bind(this)}
				updateState={this.setState.bind(this)}
				{...this.state}
			/>	
		)
	}
}

export default createContainer(() => {
	Meteor.subscribe('users')
	var chatHandle = Meteor.subscribe('chats')
	userChat = Meteor.collection('chats').findOne({ _id: { $in: [user._id+Meteor.userId(), Meteor.userId()+user._id] } })
	return {
		chatHandle:chatHandle.ready(),
		userChat:userChat
	}
}, ChatViewContainer);