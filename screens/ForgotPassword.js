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

import { emails } from '../assets/misc/emails'; // hardcoded emails to test

const ForgotPassword = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false); // state to check whether font has loaded
  const [email, setEmail] = useState(''); // state for email
  const [emailFocused, setEmailFocus] = useState(false); // state to check whether email input is onFocus
  const [emailError, setEmailError] = useState(false); // state check to see if there's error finding email

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

  onChangeHandler = text => {
    setEmailError(false);
    setEmail(text);
  };

  // Iterate through array of emails. If email exists, return true. Else return false and setEmailError to true
  sendResetLink = () => {
    let found = false;
    for (let elem of emails) {
      if (elem === email.toLowerCase().trim()) {
        console.log('Success!');
        found = true;
        break;
      }
    }
    if (!found) {
      setEmailError(true);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {fontLoaded ? (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.leftContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                hitSlop={{ top: 20, bottom: 20, left: 16, right: 50 }}
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
              <Text
                style={[styles.subtitleText, { fontFamily: 'lato-regular' }]}
              >
                Enter the email address used to sign up
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <View
                style={[
                  styles.inputBox,
                  emailError
                    ? styles.inputBoxError
                    : emailFocused
                    ? styles.inputBoxFocused
                    : styles.inputBoxBlurred
                ]}
              >
                <Text
                  style={[
                    styles.inputHeader,
                    emailError
                      ? styles.inputHeaderError
                      : emailFocused
                      ? styles.inputHeaderFocused
                      : styles.inputHeaderBlurred,
                    { fontFamily: 'lato-regular' }
                  ]}
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
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  onChangeText={text => onChangeHandler(text)}
                  underlineColorAndroid="transparent"
                />
              </View>
              {emailError ? (
                <Text
                  style={[styles.errorMessage, { fontFamily: 'lato-regular' }]}
                >
                  Sorry, we didn't recognize that email address
                </Text>
              ) : null}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => sendResetLink()}
              >
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
