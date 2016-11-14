import React, { PropTypes } from 'react';
import { Text, View, Image, TextInput, ScrollView } from 'react-native';

import Button from '../../../components/Button';
import Meteor from 'react-native-meteor';
import images from '../../../config/images';
import styles from './styles';

const AddBlog = (props) =>{
	const {updateState, addBlog} = props;
	return(
		<Image 
			style={styles.backgroundImage}
       		source={images.backGround} >

       		<ScrollView 
					ref={(scrollView) =>  this.scroller = scrollView}
			        automaticallyAdjustContentInsets={false}
			        scrollEventThrottle={200}
			        onScroll={props.handleScroll}
			        onLayout={props.handleLayout}
			        onContentSizeChange={props.handleContentChange}
			        >
			<View style={styles.container}>
          		<Text style={styles.main}>
					Add a new Blog!!! 
				</Text>
				

				
				
					<TextInput
						placeholder="Start typing title......."
				        autoCapitalize="none"
				        autoCorrect={false}
				        onChangeText={(title) => updateState({ title })}
				        style={styles.title}
				    />
				    <TextInput
						placeholder="Start typing......."
				        autoCapitalize="none"
				        autoCorrect={false}
				        onChangeText={(content) => updateState({ content })}
				        style={styles.content}
				    />
			    
				<Button
					text = "Add"
					onPress={props.addBlog}
				/>
			</View>
			</ScrollView>	
		</Image>
	);
};



export default AddBlog;