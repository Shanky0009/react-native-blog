import React from 'react';
import Meteor from 'react-native-meteor';
import Home from '../routes/Home';
import SignIn from '../routes/SignIn';
import Blog from '../routes/Blog/Blogs';
import AddBlog from '../routes/Blog/AddBlog';

export const routes = {
	getHomeRoute(){
		return{
			renderScene(navigator){
				return <Home navigator = {navigator} />;
			},

			getTitle(){
				return 'Home';
			},
		}
	},
	getSignInRoute() {
	    return {
		    renderScene(navigator) {
		        return <SignIn navigator={navigator} />;
		    },
		    showNavigationBar: false,
	    };
  	},
  	getBlogRoute() {
	    return {
		    renderScene(navigator) {
		        return <Blog navigator={navigator} />;
		    },

		    getTitle() {
		        return 'Blogs';
		    },
	    };
  	},
	getAddBlogRoute() {
	    return {
		    renderScene(navigator) {
		        return <AddBlog navigator={navigator} />;
		    },
	    };
  	},
  	getLogoutRoute() {

	    return {
		    renderScene(navigator) {
		    	Meteor.logout();
		        return <Home navigator={navigator} />;
		    },
	    };
  	},
}

export default routes;