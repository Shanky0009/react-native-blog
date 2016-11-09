import React from 'react';
import {Text, View, TextInput, Image, TouchableOpacity} from 'react-native'

import images from '../../../config/images';
import styles from './styles';  

const ProfileUpdate = (props) => {
	const {updateState} = props;
	return (
		<Image
			style={styles.backgroundImage}
			source={images.backGround}
		>
			<View>
				<TextInput 
					placeholder="First Name"
			        onChangeText={(firstName) => updateState({ firstName })}
			        style={styles.main}
				/>
				<TextInput 
					placeholder="last Name"
			        onChangeText={(lastName) => updateState({ lastName })}
			        style={styles.main}
				/>
				<TextInput 
					placeholder="Address"
			        onChangeText={(address) => updateState({ address })}
			        style={styles.main}
				/>
				<TextInput 
					placeholder="Phone Number"
			        onChangeText={(PhnNo) => updateState({ PhnNo })}
			        style={styles.main}
				/>

				<TouchableOpacity
					onPress={()=> props.onProfileUpdate}
				>
					<Text>Update</Text>
				</TouchableOpacity>		
			</View>
		</Image>			
	)
}

export default ProfileUpdate;