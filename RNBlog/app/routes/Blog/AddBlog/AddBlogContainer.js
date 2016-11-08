import React, { Component } from 'react';
import { LayoutAnimation } from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import Routes from '../../../config/routes';
import AddBlog from './AddBlog';

export default class AddBlogContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
 
    };
  }

  handleAddBlog() {    
      const { title, content } = this.state;
      console.log("Blog Data :", title, content)
     Meteor.call('blogs.addEdit', title, content, Meteor.userId(), function(err){
        console.log(err)
      });
     this.props.navigator.resetTo(Routes.getBlogRoute())
  }


  render() {
    return (
      <AddBlog
        updateState={this.setState.bind(this)}
        addBlog={this.handleAddBlog.bind(this)}
        {...this.state}
      />
    );
  }
}
