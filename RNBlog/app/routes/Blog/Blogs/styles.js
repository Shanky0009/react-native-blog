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
  	},
	item: {
	    backgroundColor: colors.buttonBackground,
	    // color: colors.buttonText,
	    width: cardSize,
	    height: cardSize,
	    // marginHorizontal: MARGIN_HORIZONTAL,
	    marginVertical: 5,
	    paddingTop: cardSize / 2.3,
	    // fontSize: 16,
	    // fontWeight: '500',
	    // textAlign: 'center',
	    alignItems: 'center',
	},
});