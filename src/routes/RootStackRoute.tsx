import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OutsideRoute from './OutsideRoute';
// import { useAuthenStateValue } from '@src/atom/authen';
import InsideRoute from './InsideRoute';
import {RootStackScreensParams, ScreensName} from './types';
import {useAuthenStateValue} from '@src/atom/authen';
import {storage, StorageKey} from '@src/storage';
import {useMount} from 'ahooks';

const RootStack = createStackNavigator<RootStackScreensParams>();
export let rootStackUpdateRef: {setUpdate: Function | null} = {
  setUpdate: null,
};

const RootStackRoute = () => {
  const token = storage.getString(StorageKey.Authen);
  const [, setUpdate] = useState(new Date().toISOString());
  useMount(() => {
    rootStackUpdateRef = {
      setUpdate,
    };
  });
  const authen = useAuthenStateValue();
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {authen.token ? (
        <RootStack.Screen name={ScreensName.Inside} component={InsideRoute} />
      ) : (
        <RootStack.Screen name={ScreensName.Outside} component={OutsideRoute} />
      )}
    </RootStack.Navigator>
  );
};

export default RootStackRoute;
