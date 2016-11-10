import React from 'react';
import { View, ActivityIndicator, Text, Image } from 'react-native';
import styles from './styles';
import images from '../../config/images';


const Loading = (props) => {
  return (
    <Image 
        style={styles.backgroundImage}
        source={images.backGround} >
      <View style={styles.container}>
        <Text style={styles.message}>{props.message}</Text>
        <ActivityIndicator
          animating
          size={props.size}
          {...props}
        />
      </View>
    </Image>    
  );
};

Loading.propTypes = {
  size: React.PropTypes.string,
};

Loading.defaultProps = {
  size: 'large',
};

export default Loading;
