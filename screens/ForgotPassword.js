import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function ForgotPassword(props) {
  _login = async () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Button title="BACK!!" onPress={_login} />
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
