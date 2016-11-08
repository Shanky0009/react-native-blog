import React from 'react';
import Meteor , { createContainer } from 'react-native-meteor';
import TabNavigator from 'react-native-tab-navigator';
import { Image } from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import Routes from '../../config/routes';
import images from '../../config/images';
import styles from './styles';

class LoggedIn extends React.Component {
	constructor(props){
		super(props);
		this.state={
			selectedTab:'Home',
		};
	}

	renderTabItem(title, initialRoute, Icon){
		const { selectedTab } = this.state;
		const sceneStyle = [];
		if(initialRoute.showNavigationBar !== false){
			sceneStyle.push({paddingTop:64 });
		}

		return(
			<TabNavigator.Item
				selected={selectedTab === title}
				title = {title}
				renderIcon={() => <Image style={styles.icon} source={Icon} />}
		        renderSelectedIcon={() => (
		          <Image
		            style={[styles.icon, styles.iconSelected]}
		            source={Icon}
		          />
		        )}
				onPress={() => this.setState({ selectedTab: title })}
			>
				<ExNavigator
					initialRoute={initialRoute}
					style={{flex:1}}
					sceneStyle={sceneStyle}
					showNavigationBar={initialRoute.showNavigationBar}	
				/>
			</TabNavigator.Item>	
		);
	}
	render(){
		console.log(this.props.currentUser)
		return(
			<TabNavigator>
				{this.renderTabItem('Home', Routes.getHomeRoute(), images.icons.home)}
				{this.renderTabItem('Blogs', Routes.getBlogRoute(), images.icons.blog)}
				{this.renderTabItem('Logout', Routes.getLogoutRoute(), images.icons.profile)}
			</TabNavigator>	
		);
	}
};

export default LoggedIn;