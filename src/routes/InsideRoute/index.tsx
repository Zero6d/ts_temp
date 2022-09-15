import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Icon from '@src/components/Icon';
import {IconType} from '@src/components/Icon/type';
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
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.WHITE,
        },
        tabBarIcon: ({color, size}) => {
          let iconName: IconType | undefined;
          if (route.name === ScreensName.HomeRoute) {
            iconName = 'updated_home';
          } else if (route.name === ScreensName.AccountRoute) {
            iconName = 'user';
          }
          if (!iconName) {
            return null;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.BLUE_400,
        tabBarInactiveTintColor: COLORS.MONO_500,
      })}>
      <RootTabs.Screen
        name={ScreensName.HomeRoute}
        component={HomeRoute}
        options={{tabBarLabel: i18n.t('home')}}
      />
      <RootTabs.Screen
        name={ScreensName.AccountRoute}
        component={AccountRoute}
        options={{tabBarLabel: i18n.t('Account')}}
      />
    </RootTabs.Navigator>
  );
};

export default InsideRoute;
