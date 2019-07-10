import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: { title: 'LOGIN' }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: { title: 'FORGOT PASSWORD' }
  }
});

export default AuthStack;
