import React from 'react';
import Meteor from 'react-native-meteor';
import { MenuContext } from 'react-native-menu';

import TopNavigation from '../layouts/TopNavigation';
import Home from '../routes/Home';
import SignIn from '../routes/Accounts/SignIn';
import SignUp from '../routes/Accounts/SignUp';
import Blog from '../routes/Blog/Blogs';
import AddBlog from '../routes/Blog/AddBlog';
import Chats from '../routes/Chat/Chats';
import ChatView from '../routes/Chat/ChatView';
import ProfileView from '../routes/Profile/ProfileView';
import ProfileUpdate from '../routes/Profile/ProfileUpdate';


export const routes = {
	getHomeRoute(){
		
		return{
			renderScene(navigator){
				return <MenuContext style={{ flex: 1 }}>
						<TopNavigation navigator={navigator} />
						<Home navigator={navigator} />
					</MenuContext>;
			},
			showNavigationBar: false
		}
	},
	getSignInRoute() {
	    return {
		    renderScene(navigator) {
		        return <MenuContext style={{ flex: 1 }}>
				        <TopNavigation navigator={navigator} />
				        <SignIn navigator={navigator} />
				    </MenuContext>;
		    },
		    showNavigationBar: false,
	    };
  	},
  	getSignUpRoute() {
	    return {
		    renderScene(navigator) {
		        return <MenuContext style={{ flex: 1 }}>
				        <TopNavigation navigator={navigator} />
				        <SignUp navigator={navigator} />
				    </MenuContext>;
		    },
		    showNavigationBar: false,
	    };
  	},
  	getBlogRoute() {
	    return {
		    renderScene(navigator) {
		        return <MenuContext style={{ flex: 1 }}>
					        <TopNavigation navigator={navigator} />
					        <Blog navigator={navigator} />
					    </MenuContext>;
		    },
		    showNavigationBar: false,
	    };
  	},
	getAddBlogRoute() {
	    return {
		    renderScene(navigator) {
		        return <MenuContext style={{ flex: 1 }}>
					        <TopNavigation navigator={navigator} />
					        <AddBlog navigator={navigator} />
					      </MenuContext>;
		    },
		    showNavigationBar: true,
	    };
  	},
  	getChatsRoute(){
	    return {
		    renderScene(navigator) {
		        return <MenuContext style={{ flex: 1 }}>
					        <TopNavigation navigator={navigator} />
					        <Chats navigator={navigator} />
					    </MenuContext>;
		    },
		    showNavigationBar: false,
	    };
  	},
  	getChatViewRoute(user){
	    return {
		    renderScene(navigator) {
		        return <MenuContext style={{ flex: 1 }}>
					        <TopNavigation navigator={navigator} />
					        <ChatView navigator={navigator} user={user} />
					    </MenuContext>;
		    },
		    showNavigationBar: false,
	    };
  	},
  	getProfileViewRoute() {
	    return {
		    renderScene(navigator) {
		        return <MenuContext style={{ flex: 1 }}>
					        <TopNavigation navigator={navigator} />
					        <ProfileView navigator={navigator} />
					    </MenuContext>;
		    },
		    showNavigationBar: false,
	    };
  	},
  	getProfileUpdateRoute() {
	    return {
		    renderScene(navigator) {
		        return <MenuContext style={{ flex: 1 }}>
					        <TopNavigation navigator={navigator} />
					        <ProfileUpdate navigator={navigator} />
					    </MenuContext>;
		    },
		    showNavigationBar: false,
	    };
  	},
  	getLogoutRoute() {
  		Meteor.subscribe('users')
	    return {
		    renderScene(navigator) {
		    	Meteor.call('users.logout', function(err){
		    		if(err)
		    			alert(err.reason)
		    	})
				Meteor.logout();
				
		    	
		        return <MenuContext style={{ flex: 1 }}>
		        				<TopNavigation navigator={navigator} />
		        				<Home navigator={navigator} />
		        			</MenuContext>;
		    },
	    };
  	},
}

export default routes;