import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeRouteStackScreensParams, ScreensName} from '../types';
import HomeScreen from '@src/screens/Home';
import HeaderLeftBack from '@src/components/HeaderLeftBack';
import COLORS from '@src/configs/theme/colors';
import Home from '@src/screens/Home';

const HomeStack = createStackNavigator<HomeRouteStackScreensParams>();

const HomeRoute = () => {
  return (
    <HomeStack.Navigator initialRouteName={ScreensName.Home}>
      <HomeStack.Screen
        name={ScreensName.Home}
        component={Home}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoute;
