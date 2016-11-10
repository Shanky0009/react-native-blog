import {StyleSheet} from 'react-native';
import {colors} from '../../../config/styles';


export default StyleSheet.create({
	container:{
		marginTop:10,
		marginBottom:10,
		height:60
	},
	main:{
		fontSize:20,
		fontWeight:'300',
		fontStyle:'italic',
		backgroundColor:"#FFFFFF",
		borderRadius:10
	},
	backgroundImage: {
	    flex: 1,
	    width: null,
    	height: null,
  	},
  	header:{
  		color:"#FFFFFF",
  		textAlign:"center",
  		fontSize:20,
  		paddingBottom:10,
  		paddingTop:10
  	},
  	button:{
  		width:350,
  		paddingVertical: 10,
	    paddingHorizontal: 20,
	    margin: 5,
		backgroundColor:'#ef553a',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius:10,
		paddingBottom:10,
		paddingTop:10,

  	},
	buttonText: {
	    color: '#fff',
	    fontSize: 16,
	    fontWeight: '500',
	    textAlign:'center',
	},
	buttons:{
		width:600,
	}
});