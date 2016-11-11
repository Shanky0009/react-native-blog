import { Meteor } from 'meteor/meteor';
import { Chats } from '../../lib/collections';

export default () => {
	Meteor.publish('chats', () => {
		return Chats.find();
	});
}

Meteor.methods({
	'users.chat'(chatMessage, user, currentUser){
		if(! this.userId){
			throw new Meteor.Error('not-authorized');
		}
		
		let userId1=currentUser._id;
		let userId2=user._id;
		let chats = Chats.findOne({ _id: { $in: [userId1+userId2, userId2+userId1] } });

		let talks={
			chatMessage:chatMessage,
			sender:currentUser.username,
			receiver:user.username
		};

		chatData = {
			_id:userId1+userId2,
			userId1 : userId1,
			userId2 : userId2,
			talks : talks,
		}


		if(chats!=undefined){

			Chats.update({_id:chats._id},{ $push: { talks: talks } } ,{ validate: false });
		} else {

			Chats.insert({ 
				_id: userId1+userId2,
				userId1:userId1,
				userId2:userId2,
				talks:[talks],
			},{ 
				validate: false 
			});	
		}
	},
})