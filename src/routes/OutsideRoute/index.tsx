import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import LogoHeaderLeft from '@vbike/components/LogoHeaderLeft';
import {OutsideScreenParams, ScreensName} from '@src/routes/types';
import Notification from '@src/screens/Notification';

const OutsideStack = createStackNavigator<OutsideScreenParams>();

const OutsideRoute = () => {
  return (
    <OutsideStack.Navigator initialRouteName={ScreensName.test}>
      <OutsideStack.Screen
        name={ScreensName.test}
        component={Notification}
        options={{
          headerShown: false,
        }}
      />
    </OutsideStack.Navigator>
  );
};

export default OutsideRoute;
