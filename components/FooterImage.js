import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

const FooterImage = () => {
  return (
    <View style={styles.footer}>
      <Image
        resizeMode={'contain'}
        style={styles.image}
        source={require('../assets/images/bitmap.png')}
      />
    </View>
  );
};

// calculate image to fit screen
const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 173) / 320);
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  image: {
    height: imageHeight,
    width: imageWidth
  }
});

export default FooterImage;
