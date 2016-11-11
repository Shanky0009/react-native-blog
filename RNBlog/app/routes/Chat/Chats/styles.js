import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../config/styles';



export default StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	main:{
		fontSize:20,
		textAlign:'center',
		color:'#eff0f1',
		fontWeight:'400',
		fontStyle:'italic',
	},
	backgroundImage: {
	    flex: 1,
	    width: null,
    	height: null,
  	},
  	header: {
	    marginBottom: 25,
	    alignItems: 'center',
	    textAlign:'center',
	    color:"#FFFFFF"
  	},
  	list: {
  		flexDirection: 'column',
	    flexWrap: 'wrap',
	    justifyContent: 'center',
	    // backgroundColor:'#ebeef0',
        alignItems:'center',
	 },
	item: {
	    backgroundColor:'#ef553a',
        width:550,
        paddingTop:10,
        paddingBottom:20,
        // paddingLeft:20,
        // paddingRight:20, 
        marginBottom:10,
        borderRadius:3
	},
	chatButton: {
	    color: '#fff',
	    fontSize: 16,
	    fontWeight: '500',
	    textAlign:'center',
	},
});