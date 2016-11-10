import React from 'react';
import {Text, View, Image} from 'react-native';
import Meteor from 'react-native-meteor';

import images from '../../../config/images';
import styles from './styles';

const ProfileView = (props) => {
	const {profile} = props;
	return (
		<Image
			style={styles.backgroundImage}
			source={images.backGround}>
			{profile?
				<View style={styles.container}>
					<Text style={styles.main}>
						Username: 
						{Meteor.user().username}
					</Text>
					<Text style={styles.main}>
						First Name: 
						{profile.firstName}
					</Text>
					<Text style={styles.main}>
						Last Name: 
						{profile.lastName}
					</Text>
					<Text style={styles.main}>
						Address: 
						{profile.address}
					</Text>
					<Text style={styles.main}>
						Phone no.: 
						{profile.phnNo}
					</Text>
				</View>		
			:
				<View style={styles.container}>
					<Text style={styles.main}>
						No Profile to display, please update your Profile..!!!
					</Text>
				</View>			
			}
		</Image>	
	)
}

export default ProfileView;