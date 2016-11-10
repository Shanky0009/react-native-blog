import React, { Component, PropTypes } from 'react';
import Meteor, { createContainer, Accounts } from 'react-native-meteor';
import Routes from '../../../config/routes';
import Blog from './Blog';

class BlogContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      oneBlog: '',
      comment:'',
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
    let blogOwner = Meteor.collection('blogs').findOne({_id:id}).owner;
    console.log(id, blogOwner, Meteor.userId())
    if(Meteor.userId() && this.state.comment != ''){
      Meteor.call('blogs.comment', this.state.comment, id, blogOwner, Meteor.userId(), Meteor.user().username, function(err){
        if(err){
          alert(err.error)
        }
      });
      this.setState({flag:false})
      
    }
  }

  onDeleteCommentPress(blogId, commentId){
    let blogOwner = Meteor.collection('blogs').findOne({_id:blogId}).owner;
    console.log(blogId, blogOwner, Meteor.userId())
    if(Meteor.userId()){
      Meteor.call('blogs.removeComment', blogId, commentId, blogOwner, Meteor.userId(), function(err){
        if(err){
          alert(err.error)
        }
      });
      this.setState({flag:false})
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.state.flag)  
      this.setState({oneBlog:''})
    else
      this.setState({comment:''})
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
        onDeleteCommentPress={(blogId, commentId) => this.onDeleteCommentPress(blogId, commentId)}
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
  console.log(blogData.ready())
  return {
    blogData: blogData.ready(),
    currentUser: user,
  };
}, BlogContainer);
