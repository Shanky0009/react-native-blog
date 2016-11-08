import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import Button from '../../../components/Button';
import Meteor, {MeteorListView} from 'react-native-meteor';
import images from '../../../config/images';
import styles from './styles';

const Blog = (props) => {
	const { blogData, currentUser } = props;
	return (
		<View>
			<View>
			{currentUser?
				<Button
					text = "Add"
					onPress={props.onAddBlogPress}
				/>
			:
				<Text style={styles.header}>Log In to add a Blog! {currentUser}</Text>
			}
			</View>

			{blogData?
				<MeteorListView
			        contentContainerStyle={styles.list}
			        collection="blogs"
			        enableEmptySections={true}
			        renderRow={(blog) => 
			        	<View>
				        	{blog?
				        		<View style={styles.item}>
				        			<Text >Title: {blog.title}</Text>
				        			<Text >Content: {blog.content}</Text>
				        		</View>		
				        	:
				        		<View>
									<Text>No Blog Avaliable</Text>
								</View>	
				        	}
				        </View>	
			        }	
			     />
			:
				 <View>
				 	<Text>Loading......</Text>
				 </View>    
			}
		</View>
	)
} 

export default Blog;