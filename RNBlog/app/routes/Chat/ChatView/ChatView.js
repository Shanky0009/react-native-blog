import React from 'react';
import {Text, TextInput, Image, View, TouchableOpacity } from 'react-native';
import Meteor, {MeteorListView, MeteorComplexListView} from 'react-native-meteor';

import styles from './styles';
import images from '../../../config/images';

const ChatView = (props) => {
	const { user , updateState} = props;
	return(
		<Image
			source={images.backGround}
			style={styles.backgroundImage}
		>
			{props.chats?
				<MeteorComplexListView
					contentContainerStyle={styles.list}
			        keyboardShouldPersistTaps={true}
			        elements={()=>{return props.chats.talks}}
			        enableEmptySections={true}
			        renderRow={(chats) =>
			        	<View>
			        	{chats.sender==Meteor.user().username?
			        		<View style={styles.chatMessage}>
			        		<View style={styles.chatMessage1}>
			        			<Text >{chats.sender}</Text>
			        			<Text >{chats.chatMessage}</Text>
			        		</View>
			        		</View>	
			        	:
			        		<View style={styles.chatMessage2}>
			        			<Text >{chats.sender}</Text>
			        			<Text >{chats.chatMessage}</Text>
			        		</View>
			        	}		
			        	</View>
			        }	
				/>
			:
				<View >
        			<Text style={styles.chatButton}>No chats yet....</Text>
        		</View>
			
			}
			
			
			<View >
				<TextInput
					placeholder="Enter your message......."
			        autoCapitalize="none"
			        autoCorrect={false}
			        onChangeText={(msg) => updateState({ msg })}
			        style={styles.main}
			    />
			    <TouchableOpacity
					onPress={props.submitChat}
					style={styles.enterButton}
				>
					<Text style={styles.chatButton}>Enter</Text>
				</TouchableOpacity>
			</View>	
		</Image>	
	)
}

export default ChatView;