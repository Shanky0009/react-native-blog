import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { MenuContext } from 'react-native-menu';

import TopNavigation from '../../../layouts/TopNavigation';
import Button from '../../../components/Button';
import images from '../../../config/images';
import styles from './styles';


const SignIn = (props) => {
	const {updateState, signIn, createAccount, error , confrimPaswordVisible } = props;

	return (
		<Image 
			style={styles.backgroundImage}
       		source={images.backGround} >
			<View>
				<View>
					<Text style={styles.header}>
						Sign In to Blogger's Blogger
					</Text>
				</View>

				<View style={styles.container}>
					<TextInput
						placeholder="Email Address"
				        autoCapitalize="none"
				        autoCorrect={false}
				        onChangeText={(email) => updateState({ email })}
				        style={styles.main}
				      />
				</View>      
				<View style={styles.container}>
				     <TextInput
				     	placeholder="Password"
				     	autoCorrect={false}
				     	autoCapitalize="none"
				     	onChangeText={(password) => updateState({password})}
				     	style={styles.main}
				     />
				</View>
				
				<View style={styles.buttons}>
					<TouchableOpacity style={styles.button} onPress={signIn}>
				      	<Text style={styles.buttonText} >
				        	Sign In
				      	</Text>
				    </TouchableOpacity>
				    <Text style={styles.buttonText}>
				    	Or
				    </Text>
					<TouchableOpacity style={styles.button} onPress={createAccount}>
				      	<Text style={styles.buttonText} >
				        	Create Account
				      	</Text>
				    </TouchableOpacity>    
				</View>
				
				<KeyboardSpacer />
			</View>	
		</Image>
	)
};

export default SignIn;