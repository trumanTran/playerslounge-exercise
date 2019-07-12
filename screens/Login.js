import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
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

const Login = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false); // state to check whether font has loaded
  const [email, setEmail] = useState(''); // state for email
  const [emailFocused, setEmailFocus] = useState(false); // state to check whether email input is onFocus
  const [password, setPassword] = useState(''); // state for password
  const [passwordFocused, setPasswordFocus] = useState(false); // state to check whether pw input is onFocus

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
              <Image
                resizeMode="contain"
                style={styles.logo}
                source={require('../assets/icons/playersLoungeLogoDark.png')}
              />
            </View>
            <View style={styles.rightContainer}>
              <TouchableOpacity>
                <Text style={[styles.signup, { fontFamily: 'lato-regular' }]}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.title}>
              <Text style={[styles.titleText, { fontFamily: 'lato-bold' }]}>
                Log in
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <View
                style={[
                  styles.inputBox,
                  emailFocused ? styles.inputBoxFocused : styles.inputBoxBlurred
                ]}
              >
                <Text
                  style={[
                    styles.inputHeader,
                    emailFocused
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
                  onChangeText={text => setEmail(text)}
                  underlineColorAndroid="transparent"
                />
              </View>
              <View
                style={[
                  styles.inputBox,
                  passwordFocused
                    ? styles.inputBoxFocused
                    : styles.inputBoxBlurred
                ]}
              >
                <Text
                  style={[
                    styles.inputHeader,
                    passwordFocused
                      ? styles.inputHeaderFocused
                      : styles.inputHeaderBlurred,
                    { fontFamily: 'lato-regular' }
                  ]}
                >
                  Password
                </Text>
                <TextInput
                  style={styles.textInput}
                  value={password}
                  keyboardType="default"
                  returnKeyType="go"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  onChangeText={text => setPassword(text)}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <View style={styles.loginButton}>
                  <Text style={[styles.loginText, { fontFamily: 'lato-bold' }]}>
                    Log in
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <View style={styles.facebookButton}>
                  <View style={styles.fbIcon}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/icons/path.png')}
                    />
                  </View>
                  <Text style={[styles.loginText, { fontFamily: 'lato-bold' }]}>
                    Sign in with Facebook
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.forgot}
              onPress={() => navigation.navigate('ForgotPassword')}
              hitSlop={{ top: 20, bottom: 20, left: 16, right: 50 }}
            >
              <Text style={[styles.signup, { fontFamily: 'lato-regular' }]}>
                Forgot password
              </Text>
            </TouchableOpacity>
          </View>
          <FooterImage />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Login;
