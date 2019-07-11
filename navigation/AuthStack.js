import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: { header: null }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: { header: null }
  }
});

export default AuthStack;
