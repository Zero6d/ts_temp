import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from '@src/components/CustomBottomTab';
import React from 'react';
import {InsideScreenParams, ScreensName} from '../types';
import AccountRoute from './AccountRoute';
import HomeRoute from './HomeRoute';

const RootTabs = createBottomTabNavigator<InsideScreenParams>();

const InsideRoute = () => {
  return (
    <RootTabs.Navigator
      initialRouteName={ScreensName.HomeRoute}
      tabBar={props => <CustomBottomTab {...props} />}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <RootTabs.Screen name={ScreensName.HomeRoute} component={HomeRoute} />
      <RootTabs.Screen
        name={ScreensName.AccountRoute}
        component={AccountRoute}
      />
    </RootTabs.Navigator>
  );
};

export default InsideRoute;
