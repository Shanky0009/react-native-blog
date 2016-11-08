import React, { Component, PropTypes } from 'react';
import Meteor, { createContainer, Accounts } from 'react-native-meteor';
import Routes from '../../../config/routes';
import Blog from './Blog';

class BlogContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      oneBlog: '',
      flag:true
    };
    this.onDeleteBlogPress = this.onDeleteBlogPress.bind(this)
  }

  onDeleteBlogPress(id){
    if(Meteor.userId()){
      Meteor.call('blogs.remove', id, function(err){
        console.log(err)
        if(err){
          alert(err.error)
        }
      });
    }
  }

  onCommentBlogPress(id){
    
    let blogOwner = Meteor.collection('blogs').findOne({_id:id}).username
    console.log(this.state.comment, id, blogOwner)
    if(Meteor.userId()){
      Meteor.call('blogs.comment', this.state.comment, id, blogOwner, function(err){
        if(err){
          alert(err.error)
        }
      });
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({oneBlog:''})
  }

  onOneBlogPress(id){
    this.setState({oneBlog: Meteor.collection('blogs').findOne({_id:id})});
  }

  render(){
      return (
      <Blog
        onAddBlogPress={() => this.props.navigator.push(Routes.getAddBlogRoute())}
        onDeleteBlogPress={(id) => this.onDeleteBlogPress(id)}
        onOneBlogPress={(id) => this.onOneBlogPress(id)}
        onCommentBlogPress={(id) => this.onCommentBlogPress(id)}
        oneBlog={this.setState.bind(this)}
        updateState={this.setState.bind(this)}
        blogData={this.props.blogData}
        currentUser={this.props.currentUser}
        {...this.state}
      />
    );
  }
  
  
}

BlogContainer.propTypes = {
  blogData: PropTypes.bool,
};

export default createContainer(() => {
  blogData = Meteor.subscribe('blogs');

  if(!Meteor.user()){
    user = '';
  } else {
    user = Meteor.user()
  }
  return {
    blogData: blogData.ready(),
    currentUser: user,
    blogs:Meteor.collection('blogs').find(),
  };
}, BlogContainer);
