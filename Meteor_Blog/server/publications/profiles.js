import { Meteor } from 'meteor/meteor';

export default () => {
	Meteor.publish('users', () => {
		return Meteor.users.find();
	});
}

Meteor.methods({
	'users.profileUpdate'(profileData){

		if(! this.userId){
			throw new Meteor.Error('not-authorized');
		}

		Meteor.users.update({_id:this.userId}, { 
			$set: { 
				profile: profileData 
			} 
		},{
			validate: false
		});
			
	},
	'users.sessionUpdate'(){
		Meteor.users.update({_id:this.userId},{
			$set: {
				session:'available'
			}
		})
	},
	'users.logout'(){
		console.log(this.userId)
		Meteor.users.update({_id:this.userId},{
			$set: {
				session:'unavailable'
			}
		})
	}
})