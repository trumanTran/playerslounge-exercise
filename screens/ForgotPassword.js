import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import FooterImage from '../components/FooterImage';
import styles from './Styles/LoginStyles';

const ForgotPassword = ({ navigation }) => {
  // check whether font has loaded
  const [fontLoaded, setFontLoaded] = useState(false);
  // email
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Load fonts
    async function loadFont() {
      await Font.loadAsync({
        'lato-regular': require('../assets/fonts/Lato-Regular.ttf'),
        'lato-bold': require('../assets/fonts/Lato-Bold.ttf')
      });
      setFontLoaded(true);
    }

    loadFont();
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {fontLoaded ? (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.leftContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                hitSlop={{top: 20, bottom: 20, left: 16, right: 50}}
              >
                <Ionicons name="md-arrow-back" size={16} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.title}>
              <Text style={[styles.titleText, { fontFamily: 'lato-bold' }]}>
                Forgot your password?
              </Text>
              <Text style={[styles.subtitleText, { fontFamily: 'lato-regular' }]}>
                Enter the email address used to sign up
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputBox}>
                <Text
                  style={[styles.inputHeader, { fontFamily: 'lato-regular' }]}
                >
                  Email address
                </Text>
                <TextInput
                  style={styles.textInput}
                  value={email}
                  keyboardType="default"
                  returnKeyType="go"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={text => setEmail(text)}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <View style={styles.loginButton}>
                  <Text style={[styles.loginText, { fontFamily: 'lato-bold' }]}>
                    Send password reset link
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <FooterImage />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default ForgotPassword;
