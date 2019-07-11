import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Text,
  View
} from 'react-native';

import FooterImage from '../components/FooterImage';
import styles from './Styles/LoginStyles';

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftContainer}>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={require('../assets/icons/playersLoungeLogoDark.png')}
            />
          </View>
          <View style={styles.rightContainer}>
            <TouchableWithoutFeedback>
              <Text style={styles.signup}>Signup</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <Button
          title="Sign in!"
          onPress={() => navigation.navigate('ForgotPassword')}
        />
        <FooterImage />
      </View>
    </SafeAreaView>
  );
};

export default Login;
