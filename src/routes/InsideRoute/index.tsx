import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS from '@src/configs/theme/colors';
import i18n from '@src/utils/i18n';
import React from 'react';
import {Platform} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {InsideScreenParams, ScreensName} from '../types';
import AccountRoute from './AccountRoute';
import HomeRoute from './HomeRoute';

const RootTabs = createBottomTabNavigator<InsideScreenParams>();

const InsideRoute = () => {
  return (
    <RootTabs.Navigator
      initialRouteName={ScreensName.HomeRoute}
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.WHITE,
        },
        tabBarLabelStyle: {
          marginBottom: Platform.select({
            ios: isIphoneX() ? -5 : 10,
            android: 10,
          }),
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
        tabBarActiveTintColor: COLORS.PRIMARY_500,
        tabBarInactiveTintColor: COLORS.MONO_500,
      })}>
      <RootTabs.Screen
        name={ScreensName.HomeRoute}
        component={HomeRoute}
        options={{tabBarLabel: i18n.t('home')}}
      />
      {/* <RootTabs.Screen
        name={ScreensName.AccountRoute}
        component={AccountRoute}
        options={{
          tabBarLabel: i18n.t('account'),
        }}
      /> */}
    </RootTabs.Navigator>
  );
};

export default InsideRoute;
