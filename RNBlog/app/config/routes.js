import React from 'react';
import Meteor from 'react-native-meteor';
import { MenuContext } from 'react-native-menu';

import TopNavigation from '../layouts/TopNavigation';
import Home from '../routes/Home';
import SignIn from '../routes/SignIn';
import Blog from '../routes/Blog/Blogs';
import AddBlog from '../routes/Blog/AddBlog';
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

	    return {
		    renderScene(navigator) {
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