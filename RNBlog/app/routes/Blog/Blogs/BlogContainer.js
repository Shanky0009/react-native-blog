import React, { Component, PropTypes } from 'react';
import Meteor, { createContainer, Accounts } from 'react-native-meteor';
import { Keyboard, Platform } from 'react-native';

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
    ;[
      'handleKeyboardShow', 'handleKeyboardHide',
      'handleLayout', 'handleScroll',
    ].forEach((method) => {
      this[method] = this[method].bind(this)
    })

    let scroller = null;
    this.onDeleteBlogPress = this.onDeleteBlogPress.bind(this);
    textInput = null;
  }

  componentDidMount () {
    Keyboard.addListener('keyboardDidShow', this.handleKeyboardShow)
    Keyboard.addListener('keyboardDidHide', this.handleKeyboardHide)
  }
  
  componentWillUnmount () {
    Keyboard.removeListener('keyboardDidShow', this.handleKeyboardShow)
    Keyboard.removeListener('keyboardDidHide', this.handleKeyboardHide)
  }

  handleKeyboardShow () {
    this.scrollToBottom()
  }
  
  handleKeyboardHide () {
    const { scrollY, scrollHeight, contentHeight } = this

    if (Platform.OS === 'ios') {
        if (scrollY > contentHeight - scrollHeight) {
          scroller.scrollTo({ y: 0 })
        } else {
          scroller.scrollTo({ y: scrollY })
      }
    }
  }

  handleScroll (e) {
    this.scrollY = e.nativeEvent.contentOffset.y
  }
  handleLayout (e) {
    this.scrollHeight = e.nativeEvent.layout.height
  }

  scrollToBottom () {
    const { scrollHeight, contentHeight } = this
    if (scrollHeight == null) {
      return
    }
    if (contentHeight > scrollHeight) {
      scroller.scrollTo({ y: contentHeight - scrollHeight })
    }
  }

  onDeleteBlogPress(id){
    if(Meteor.userId()){
      Meteor.call('blogs.remove', id, function(err){
        console.log(err)
        if(err){
          alert(err.error)
        }
      });
      this.props.navigator.push(Routes.getBlogRoute())
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
      textInput.setNativeProps({text: ''});
      
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
