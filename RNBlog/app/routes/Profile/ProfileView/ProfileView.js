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
				<View>
					<Text>Username:   {Meteor.user().Username}</Text>
					<Text>First Name: {profile.firstName}</Text>
					<Text>Last Name:  {profile.lastName}</Text>
					<Text>Address:    {profile.address}</Text>
					<Text>Phone no.:  {profile.phnNo}</Text>
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