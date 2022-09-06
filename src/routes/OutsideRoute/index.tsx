import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import LogoHeaderLeft from '@src/components/LogoHeaderLeft';

import {OutsideScreenParams, ScreensName} from '../types';
import SignIn from '../../screens/SignIn';

const OutsideStack = createStackNavigator<OutsideScreenParams>();

const OutsideRoute = () => {
  return (
    <OutsideStack.Navigator initialRouteName={ScreensName.SignIn}>
      <OutsideStack.Screen
        name={ScreensName.SignIn}
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
    </OutsideStack.Navigator>
  );
};

export default OutsideRoute;
