import React, { Component, PropTypes } from 'react';
import Meteor, { createContainer, Accounts } from 'react-native-meteor';
import Routes from '../../../config/routes';
import Blog from './Blog';

const BlogContainer = (props) => {
  return (
    <Blog
      onAddBlogPress={() => props.navigator.push(Routes.getAddBlogRoute())}
      blogData={props.blogData}
      currentUser={props.currentUser}
    />
  );
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
    currentUser: user
  };
}, BlogContainer);
