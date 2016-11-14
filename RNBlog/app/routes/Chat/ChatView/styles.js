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
		backgroundColor:'#2b2926',
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
	    backgroundColor:'#2b2926',
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
	    backgroundColor:'#2b2926'
	},
	chatMessage:{
		// flex:1,
		width:null,
		flexDirection:'column',
		alignItems:'flex-end',
		justifyContent: 'flex-end',
		// // content: '',
		// 		position: 'absolute',
		// 		width: 0,
		// 		height: 0,
		// 		top: -12,
				
		// 		borderBottomWidth: 12,
		// 		borderStyle: 'solid',
		// 		borderBottomColor: '#62bf6e',
		// 		borderLeftWidth: 10,
		// 		borderLeftColor: 'transparent',
		// 		borderRightColor: 'transparent',
		// 		borderRightWidth: 10,
	},
	chatMessage1:{
		flex:0,
		backgroundColor:'#2b2926',
		flexDirection:'column',
		alignItems:'flex-end',
		minWidth:180,
		maxWidth:200,
		left:90,
        minHeight:35,
        borderLeftWidth :0,
        justifyContent: 'space-around',
        position: 'relative',
        paddingLeft:20,
        paddingRight:20, 
        marginBottom:10,
        borderRadius:3,
	},
	chatMessage2:{
		backgroundColor:'#2b2926',
        minWidth:180,
		maxWidth:180,
        flexDirection:'column',
		alignItems:'flex-start',
        right:90,
        minHeight:35,
        borderLeftWidth :0,
        justifyContent: 'space-around',
        position: 'relative',
        paddingLeft:20,
        paddingRight:20, 
        marginBottom:10,
        borderRadius:3,
	},
	message:{
		color:'#FFFFFF'
	}
});