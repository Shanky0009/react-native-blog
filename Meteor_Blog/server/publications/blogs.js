import { Meteor } from 'meteor/meteor';
import { Blogs } from '../../lib/collections';

export default () => {
	Meteor.publish('blogs', () => {
		return Blogs.find();
	});
}

Meteor.methods({
	'blogs.addEdit'(title, content, userId){


		if(! this.userId){
			throw new Meteor.Error('not-authorized');
		}

		blogData = {
			title: title,
			content:content
		}
		
		console.log(blogData)
		Blogs.insert( blogData, function(error, result) {
			console.log(result)
			if(error){
				throw Meteor.Error("Invalid Data");
			}
		});
			
	},
	
	
})