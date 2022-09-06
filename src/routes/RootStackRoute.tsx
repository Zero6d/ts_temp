import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OutsideRoute from './OutsideRoute';
// import { useAuthenStateValue } from '@src/atom/authen';
import InsideRoute from './InsideRoute';
import {RootStackScreensParams, ScreensName} from './types';
import {storage, StorageKey} from '@src/storage';

const RootStack = createStackNavigator<RootStackScreensParams>();

const RootStackRoute = () => {
  const token = storage.getString(StorageKey.Authen);
  console.log(token);
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {token ? (
        <RootStack.Screen name={ScreensName.Inside} component={InsideRoute} />
      ) : (
        <RootStack.Screen name={ScreensName.Outside} component={OutsideRoute} />
      )}
    </RootStack.Navigator>
  );
};

export default RootStackRoute;
