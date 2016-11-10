import React from 'react';
import {Text, View, TextInput, Image, TouchableOpacity} from 'react-native'
import FileInput from 'react-file-input';
import images from '../../../config/images';
import styles from './styles';  

const ProfileUpdate = (props) => {
	const {updateState, profile, profilePic} = props;
	return (
		<Image
			style={styles.backgroundImage}
			source={images.backGround}
		>
			<View>
				<Text style={styles.header}>
					Update Your Profile....!!!
				</Text>
			</View>

			<View>
				<View style={styles.profilePicView}>
				{profile.profilePic?
					<Image
						source={profilePic} 
						style={styles.profilePic}>
						
							<TouchableOpacity
								style={styles.profilePicButton}
								onPress={props.uploadPress}
								>
							<Image 
									source={images.camera}
									style={styles.profilePicButtonImage} />
							</TouchableOpacity>
						
					</Image>
				:
					<Image
						source={images.avatar} 
						style={styles.profilePic}>
						<View style={styles.profilePicButtonView}>
							<TouchableOpacity
								style={styles.profilePicButton}
								onPress={props.uploadPress}
								>
								<Image 
									source={images.camera}
									style={styles.profilePicButtonImage}/>
							</TouchableOpacity>
						</View>
					</Image>
				}
						
				</View>


				<View style={styles.container}>
					<TextInput 
						placeholder="First Name"
						defaultValue={profile.firstName}
				        onChangeText={(firstName) => updateState({ firstName })}
				        style={styles.main}
					/>
				</View>
				<View style={styles.container}>
					<TextInput 
						placeholder="Last Name"
						defaultValue={profile.lastName}
				        onChangeText={(lastName) => updateState({ lastName })}
				        style={styles.main}
					/>
				</View>
				<View style={styles.container}>
					<TextInput 
						placeholder="Address"
						defaultValue={profile.address}
				        onChangeText={(address) => updateState({ address })}
				        style={styles.main}
					/>
				</View>
				<View style={styles.container}>
					<TextInput 
						placeholder="Phone Number"
						defaultValue={profile.phnNo}
				        onChangeText={(phnNo) => updateState({ phnNo })}
				        style={styles.main}
					/>

				</View>
				<View style={styles.buttons}>
					<TouchableOpacity
						style={styles.button}
						onPress={props.onProfileUpdatePress}
					>
						<Text style={styles.buttonText}>Update</Text>
					</TouchableOpacity>
				</View>		
			</View>
		</Image>			
	)
}

export default ProfileUpdate;