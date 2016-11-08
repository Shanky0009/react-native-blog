import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../../components/Button';
import Meteor, {MeteorComplexListView, MeteorListView} from 'react-native-meteor';
import { MenuContext } from 'react-native-menu';

import TopNavigation from '../../../layouts/TopNavigation';
import images from '../../../config/images';
import styles from './styles';

const Blog = (props) => {
	const { blogData, currentUser, oneBlog, updateState } = props;
	return (
		<MenuContext style={{ flex: 1 }}>
	    	<TopNavigation/>
			<Image 
				style={styles.backgroundImage}
	       		source={images.backGround} >

				<View>
				{currentUser?
					<Button
						style={{textAlign:'center'}}
						text = "Add new Blog here!!!!"
						onPress={props.onAddBlogPress}
					/>
				:
					<Text style={styles.header}>Log In to add a Blog! {currentUser}</Text>
				}
				</View>
				{blogData?
					<View>
						{oneBlog?
							<MeteorComplexListView
						        contentContainerStyle={styles.list}
						        elements={()=>{return Meteor.collection('blogs').find(oneBlog._id)}}
						        enableEmptySections={true}
						        renderRow={(blog) => 
						        	<View>
							        	{blog?
							        		<View style={styles.item}>
														<View style={styles.titleTop}>
											        		<Text style={styles.messageBoxTitleText} onPress={() => props.onOneBlogPress(blog._id)}>
											        			{blog.title}
											        		</Text>
											        		<TouchableOpacity style={styles.cornerButton} onPress={() => props.onDeleteBlogPress(blog._id)}>
														      <Text style={styles.buttonText} >
														        &times;
														      </Text>
														    </TouchableOpacity>
											        	
														</View>	
									        	<Text style={styles.messageBoxBodyText}>{blog.content}</Text>

									        	{blog.comments?
									        		<MeteorComplexListView
												        contentContainerStyle={styles.list}
												        elements={()=>{return blog.comments}}
												        enableEmptySections={true}
												        renderRow={(comments) => 
												        	<Text>{comments.comment}</Text>
												        }
												      />  	
									        	:
									        		<View></View>
									        	}
									        	<View>

									        	</View>
									        	<View>
										        	<TextInput
															placeholder="Comment......."
													        autoCapitalize="none"
													        autoCorrect={false}
													        onChangeText={(comment) => updateState({ comment })}
													        style={styles.main}
													    />
													    <TouchableOpacity style={styles.commentButton} onPress={() => props.onCommentBlogPress(blog._id)}>
													      	<Text style={styles.buttonText} >
													        	Comment
													      	</Text>
													    </TouchableOpacity>
											    	</View>
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
							<MeteorListView
						        contentContainerStyle={styles.list}
						        collection="blogs"
						        options={{sort: {createdAt: -1}}}
						        enableEmptySections={true}
						        renderRow={(blog) => 
						        	<View>
							        	{blog?
							        		<View style={styles.item}>
												<View style={styles.titleTop}>
									        		<Text style={styles.messageBoxTitleText} onPress={() => props.onOneBlogPress(blog._id)}>
									        			{blog.title}
									        		</Text>
									        		<TouchableOpacity style={styles.cornerButton} onPress={() => props.onDeleteBlogPress(blog._id)}>
												      <Text style={styles.buttonText} >
												        &times;
												      </Text>
												    </TouchableOpacity>
									        	
												</View>	
								        		<Text numberOfLines={1} style={styles.messageBoxBodyText}>{blog.content}</Text>
								        	
								        		
							        		</View>		
							        	:
							        		<View>
												<Text>No Blog Avaliable</Text>
											</View>	
							        	}
							        </View>	
						        }	
						     />
						}	
				     </View>
				:
					 <View>
					 	<Text>Loading......</Text>
					 </View>    
				}
			</Image>
		</MenuContext>	
	)
} 

export default Blog;