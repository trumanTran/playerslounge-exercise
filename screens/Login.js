import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function Login(props) {
  _signInAsync = async () => {
    props.navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Button title="Sign in!" onPress={_signInAsync} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
