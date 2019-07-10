import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthStack from './AuthStack';

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: { screen: AuthStack }
    },
    {
      initialRouteName: 'Auth'
    }
  )
);
