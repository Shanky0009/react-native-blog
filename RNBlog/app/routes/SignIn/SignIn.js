import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Button from '../../components/Button';
import images from '../../config/images';
import styles from './styles';


const SignIn = (props) => {
	const {updateState, signIn, createAccount, error , confrimPaswordVisible } = props;

	return (
		<Image 
			style={styles.backgroundImage}
       		source={images.backGround} >
			<View>
				<View>
					<Text>
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
				
				<View>
					<Button text="Sign In" onPress={signIn} />
					<Button text="Create Account" onPress={createAccount} />     
				</View>
				
				<KeyboardSpacer />
			</View>	
		</Image>
	)
};

export default SignIn;