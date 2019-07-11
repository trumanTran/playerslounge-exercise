import React from 'react';
import { Button, View } from 'react-native';

import FooterImage from '../components/FooterImage';
import styles from './Styles/LoginStyles';

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="BACK!!" onPress={() => navigation.navigate('Login')} />
      <FooterImage />
    </View>
  );
};

export default ForgotPassword;
