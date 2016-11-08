import React, { PropTypes } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { MenuContext } from 'react-native-menu';

import TopNavigation from '../../../layouts/TopNavigation';
import Button from '../../../components/Button';
import Meteor from 'react-native-meteor';
import images from '../../../config/images';
import styles from './styles';

const AddBlog = (props) =>{
	const {updateState, addBlog} = props;
	return(
		<MenuContext style={{ flex: 1 }}>
	    	<TopNavigation/>
			<Image 
				style={styles.backgroundImage}
	       		source={images.backGround} >

				<View style={styles.container}>
	          		<Text style={styles.main}>
						Add a new Blog!!! 
					</Text>
					

					<TextInput
						placeholder="Start typing title......."
				        autoCapitalize="none"
				        autoCorrect={false}
				        onChangeText={(title) => updateState({ title })}
				        style={styles.main}
				    />
				    <TextInput
						placeholder="Start typing......."
				        autoCapitalize="none"
				        autoCorrect={false}
				        onChangeText={(content) => updateState({ content })}
				        style={styles.main}
				    />

					<Button
						text = "Add"
						onPress={props.addBlog}
					/>
				
				</View>	
			</Image>
		</MenuContext>
	);
};



export default AddBlog;