import React, { PropTypes } from 'react';
import { Text, View, Image } from 'react-native';
import { MenuContext } from 'react-native-menu';

import Button from '../../components/Button';
import TopNavigation from '../../layouts/TopNavigation';
import Meteor from 'react-native-meteor';
import images from '../../config/images';
import styles from './styles';

const Home = (props) =>{
	const {user} = props;

	return(
		<MenuContext style={{ flex: 1 }}>
	    	<TopNavigation/>
			<Image 
				style={styles.backgroundImage}
	       		source={images.backGround} >

				<View style={styles.container}>
	          		<Text style={styles.main}>
						Welcome to blogger's Blog!!! 
					</Text>
					
					{user?
						<Button
							text = "Logout"
							onPress={props.onLogoutPress}
						/>
					:
						<Button
							text = "Log In"
							onPress={props.onSignInPress}
						/>
					}
				</View>	
			</Image>
		</MenuContext>	
	);
};



export default Home;