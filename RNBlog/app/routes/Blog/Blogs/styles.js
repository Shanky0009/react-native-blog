import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../config/styles';

const window = Dimensions.get('window');
const MARGIN_HORIZONTAL = 10;
const cardSize = (window.width - (MARGIN_HORIZONTAL * 4)) / 2;


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
        width:300,
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20, 
        marginBottom:10,
        borderRadius:10
	},
	messageBoxTitleText:{
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        fontSize:20,
        marginBottom:10,
        flex:1
    },
    commentBoxTitleText:{
        fontWeight:'bold',
        color:'#fff',
        textAlign:'left',
        fontSize:15,
        marginBottom:10,
        flex:1
    },
    messageBoxBodyText:{
        color:'#fff',
        fontSize:16
    },
	cornerButton:{
		width: 10,
		backgroundColor:'#ef553a',
	},
	commentButton:{
		width: 250,
		flexDirection: 'column',
		flexWrap: 'wrap',
		backgroundColor:'#ef553a',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
	    color: '#fff',
	    fontSize: 16,
	    fontWeight: '500',
	    textAlign:'center',
	},
	titleTop:{
        flexDirection:'row'
	}
});