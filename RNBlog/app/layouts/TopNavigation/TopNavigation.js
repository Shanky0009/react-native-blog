import React from 'react';
import { View, Text } from 'react-native';
import Meteor , { createContainer }  from 'react-native-meteor';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import styles from './styles';
import Routes from '../../config/routes';

 
 // <MenuContext style={{ flex: 1 }}>
   // <TopNavigation/>
    //<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Hello!</Text></View>
  // </MenuContext>
 
const TopNavigationContainer = (props) => {
  return(
  <View style={{ padding: 10, flexDirection: 'row', backgroundColor: 'black' }}>
    <View style={{ flex: 1}}><Text style={{ color:"#FFFFFF" }}>Bloggers' Blog!!</Text></View>
     <Menu onSelect={this.setMessage}>
            <MenuTrigger style={styles.menuTrigger}>
              <Text style={styles.menuTriggerText}>&#8942;</Text>
            </MenuTrigger>
            <MenuOptions style={styles.menuOptions}>
              <MenuOption value="normal">
                <Text onPress={props.onSignInPress}>Home</Text>
              </MenuOption>
              <MenuOption value="normal">
                <Text onPress={props.onSignInPress}>Blogs</Text>
              </MenuOption>
              {Meteor.user()?
                <MenuOption value="normal">
                  <Text>Logout</Text>
                </MenuOption>  
              :
                <MenuOption value="normal">
                 <Text>Sign In</Text>
                </MenuOption>
              }
              
              <View style={styles.divider}/>
              <MenuOption value={{ message: 'Hello World!' }}>
                <Text>Option with object value</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
  </View>
  )
};

const TopNavigation = (props) => {
  return (
    <TopNavigationContainer
      onSignInPress={() => props.navigator.resetTo(Routes.getSignInRoute())}
      onLogoutPress={() => props.navigator.resetTo(Routes.getLogoutRoute())}
    />  
  );
};




export default TopNavigation