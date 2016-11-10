import {StyleSheet} from 'react-native';
import {colors} from '../../../config/styles';


export default StyleSheet.create({
	container:{
		marginTop:10,
		marginBottom:10,
		height:60
	},
	main:{
		marginBottom: 25,
	    alignItems: 'flex-start',
	    fontSize:20,
	    textAlign:'center',
	    color:"#FFFFFF"
	},
	backgroundImage: {
	    flex: 1,
	    width: null,
    	height: null,
  	},
	profilePicView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
		marginBottom:10,
  	},
  	profilePic:{
  		width:100,
    	height: 100,
  	},
  	
});