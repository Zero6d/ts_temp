import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeRouteStackScreensParams, ScreensName} from '../types';
import Home from '@src/screens/Home';
import PresetComponent from '@src/screens/Demo/PresetComponent';
import FlashListDemo from '@src/screens/Demo/FlashListDemo';
import API from '@src/screens/Demo/API';
import Animation from '@src/screens/Demo/Animation';
import {TransitionPresets} from '@react-navigation/stack';

const HomeStack = createStackNavigator<HomeRouteStackScreensParams>();

const HomeRoute = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={ScreensName.Home}
      screenOptions={() => ({
        ...TransitionPresets.SlideFromRightIOS,
      })}>
      <HomeStack.Screen
        name={ScreensName.Home}
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={ScreensName.PresetComponent}
        component={PresetComponent}
        options={{headerTitle: () => null}}
      />
      <HomeStack.Screen
        name={ScreensName.FlashListDemo}
        component={FlashListDemo}
        options={{headerTitle: () => null}}
      />
      <HomeStack.Screen
        name={ScreensName.API}
        component={API}
        options={{headerTitle: () => null}}
      />
      <HomeStack.Screen
        name={ScreensName.Animation}
        component={Animation}
        options={{headerTitle: () => null}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoute;
