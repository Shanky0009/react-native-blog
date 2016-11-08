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
			content:content,
			owner:userId
		}
		
		console.log(blogData)
		Blogs.insert( blogData, function(error, result) {
			console.log(result)
			if(error){
				throw Meteor.Error("Invalid Data");
			}
		});
			
	},
	'blogs.remove'(blogId){
		const blog = Blogs.findOne(blogId);

		if(blog.private && blog.owner !== this.userId){
			throw new Meteor.Error('not-authorized');
		}

		if(blog.owner == this.userId){
			Blogs.remove(blogId);
		} else {
			console.log("out")
			throw new Meteor.Error('not-authorized');
		}	
	},
	'blogs.comment'(comment, blogId, blogOwner){
		console.log(comment, blogId, blogOwner)
		Blogs.update(blogId, { 
			$push: {
				comments: {
					comment: comment, 
					_id: Math.random(), 
					blogId:blogId, 
					blogOwner:blogOwner, 
				}  
			}
		},{ 
			validate: false 
		});
	},
	
})