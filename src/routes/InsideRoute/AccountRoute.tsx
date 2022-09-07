import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {AccountStackScreensParams, ScreensName} from '../types';
import Account from '@src/screens/Account';

const AccountStack = createStackNavigator<AccountStackScreensParams>();

const AccountRoute = () => {
  return (
    <AccountStack.Navigator
      initialRouteName={ScreensName.Account}
      screenOptions={() => ({
        ...TransitionPresets.SlideFromRightIOS,
      })}>
      <AccountStack.Screen
        name={ScreensName.Account}
        component={Account}
        options={{headerShown: false}}
      />
    </AccountStack.Navigator>
  );
};

export default AccountRoute;
