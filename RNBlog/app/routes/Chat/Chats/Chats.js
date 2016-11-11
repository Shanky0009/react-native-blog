import React from 'react'
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Meteor, {MeteorComplexListView} from 'react-native-meteor';

import images from '../../../config/images';
import Loading from '../../../components/Loading';
import styles from './styles';

const Chats = (props) => {
	return (
		<Image 
			source={images.backGround}
			style={styles.backgroundImage}
			>
			<View>
				<Text style={styles.header}>
					Messages
				</Text>
			</View>
			<View>
				<MeteorComplexListView
					        contentContainerStyle={styles.list}
					        keyboardShouldPersistTaps={true}
					        elements={()=>{return Meteor.collection('users').find({_id:{$ne:Meteor.userId()}})}}
					        enableEmptySections={true}
					        renderRow={(user) =>

					        	<View style={styles.item}>
					        		<TouchableOpacity style={styles.cornerButton} onPress={() => props.onOpenChat(user)}>
										<Text style={styles.chatButton}>{user.username}</Text>
						        		{props.chatHandle?
						        			<Text style={styles.header}>Inside</Text>
						        		:
						        			<Text style={styles.header}>Outside</Text>
						        		}			      
									</TouchableOpacity>
					        		
					        	</View>
					        }	
				/>
			</View>
		</Image>			
	)
}

export default Chats;