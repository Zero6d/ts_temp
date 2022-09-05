import React from 'react';
import { KYCStep3StackScreensParams, ScreensName } from '../types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import i18n from '@vbike/utils/i18n';
import KYCStep3First from '@vbike/screens/KYCStep3First';
import KYCStep3Second from '@vbike/screens/KYCStep3Second';
import KYCStep3Third from '@vbike/screens/KYCStep3Third';
import KYCTabBar from '@vbike/components/KYCTabBar';

const Tab = createMaterialTopTabNavigator<KYCStep3StackScreensParams>();

const KYCStep3Route = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreensName.KYCStep3First}
      tabBar={props => <KYCTabBar {...props} />}
    >
      <Tab.Screen
        name={ScreensName.KYCStep3First}
        component={KYCStep3First}
        options={{ tabBarLabel: i18n.t('cccd') }}
      />
      <Tab.Screen
        name={ScreensName.KYCStep3Second}
        component={KYCStep3Second}
        options={{ tabBarLabel: i18n.t('passport') }}
      />
      <Tab.Screen
        name={ScreensName.KYCStep3Third}
        component={KYCStep3Third}
        options={{ tabBarLabel: i18n.t('driver_lisence') }}
      />
    </Tab.Navigator>
  );
};

export default KYCStep3Route;
