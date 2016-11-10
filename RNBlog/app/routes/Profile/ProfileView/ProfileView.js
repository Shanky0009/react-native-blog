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
					<View style={styles.profilePicView}>
						<Image source={profile.profilePic}
						style={styles.profilePic}
						/>
					</View>
					<View style={styles.container}>
						<Text style={styles.main}>
							Username: 
							{Meteor.user().username}
						</Text>
					</View>
					<View style={styles.container}>
						<Text style={styles.main}>
							First Name: 
							{profile.firstName}
						</Text>
					</View>
					<View style={styles.container}>
						<Text style={styles.main}>
							Last Name: 
							{profile.lastName}
						</Text>
					</View>
					<View style={styles.container}>
						<Text style={styles.main}>
							Address: 
							{profile.address}
						</Text>
					</View>
					<View style={styles.container}>
						<Text style={styles.main}>
							Phone no.: 
							{profile.phnNo}
						</Text>
					</View>
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