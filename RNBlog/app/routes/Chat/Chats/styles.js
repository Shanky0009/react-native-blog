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
		color:'#484040',
		fontWeight:'400',
		fontStyle:'italic',
	},
	backgroundImage: {
	    flex: 1,
	    width: null,
    	height: null,
  	},
  	header:{
  		color:"#484040",
  		textAlign:"center",
  		fontSize:20,
  		paddingBottom:10,
  		paddingTop:10
  	},
  	list: {
  		flexDirection: 'column',
	    flexWrap: 'wrap',
	    justifyContent: 'center',
	    // backgroundColor:'#ebeef0',
        alignItems:'center',
	 },
	item: {
	    backgroundColor:'#2b2926',
	    alignSelf:'stretch',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        // paddingRight:20, 
        marginBottom:10,
        borderRadius:3,
        
	},
	chatButton: {
	    color: '#fff',
	    fontSize: 16,
	    fontWeight: '500',
	    textAlign:'left',
	},
	chatTouch:{
		flexDirection:'row',
		justifyContent:'flex-start'
	},
	chatDp:{
		width:40,
		height:40,
		borderRadius:20,
		paddingRight:5,
		marginLeft:5,
	},
	chatUser:{
		marginLeft:10,
		width:250
	},
	availability:{
		flexDirection:'column',
		alignItems:'flex-end',
		justifyContent:'center',
	},
	chatAvailability:{
		width:10,
		height:10,
		borderRadius:30,
		alignSelf:'flex-end'
	}
});