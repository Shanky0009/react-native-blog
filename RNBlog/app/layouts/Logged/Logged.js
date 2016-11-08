import React from 'react';
import TabNavigator from 'react-native-tab-navigator';
import ExNavigator from '@exponent/react-native-navigator';
import Routes from '../../config/routes';

class Logged extends React.Component {
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
		return(
			<TabNavigator>
				{this.renderTabItem('Home', Routes.getHomeRoute())}
				{this.renderTabItem('Blogs', Routes.getBlogRoute())}
				{this.renderTabItem('Sign In', Routes.getSignInRoute())}
			</TabNavigator>	
		);
	}
};

export default Logged;