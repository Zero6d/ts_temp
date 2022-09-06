import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RentRouteStackScreensParams, ScreensName} from '../types';
import COLORS from '@src/configs/theme/colors';
import RentScreen from '@src/screens/RentScreen';
import HomeScreen from '@src/screens/Home';
import RentSuccessScreen from '@src/screens/RentScreen/RentSuccessScreen';
import SuppostScreen from '@src/screens/SupportScreen';
import i18n from '@src/utils/i18n';

const RentStack = createStackNavigator<RentRouteStackScreensParams>();

const RentRoute = () => {
  return (
    <RentStack.Navigator
      initialRouteName={ScreensName.RentScreen}
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: COLORS.WHITE,
        },
        headerTitleStyle: {
          color: COLORS.BLUE_500,
        },
      }}>
      <RentStack.Screen
        name={ScreensName.RentScreen}
        component={RentScreen}
        options={{headerShown: false}}
      />
      <RentStack.Screen
        name={ScreensName.RentSuccessScreen}
        component={RentSuccessScreen}
        options={{headerShown: false}}
      />
      <RentStack.Screen
        name={ScreensName.SuppostScreen}
        component={SuppostScreen}
        options={{
          title: i18n.t('report'),
        }}
      />
    </RentStack.Navigator>
  );
};

export default RentRoute;
