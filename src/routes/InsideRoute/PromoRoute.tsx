import React from 'react';
import { PromoStackScreensParams, ScreensName } from '../types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PromoTabBar from '@vbike/components/PromoTabBar';
import Promotions from '@vbike/screens/Promotions';
import Redeemtions from '@vbike/screens/Redeemtions';
import i18n from '@vbike/utils/i18n';

const Tab = createMaterialTopTabNavigator<PromoStackScreensParams>();

const PromoRoute = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreensName.Promotions}
      tabBar={props => <PromoTabBar {...props} />}
    >
      <Tab.Screen
        name={ScreensName.Promotions}
        component={Promotions}
        options={{ tabBarLabel: i18n.t('promo') }}
      />
      <Tab.Screen
        name={ScreensName.Redeemtions}
        component={Redeemtions}
        options={{ tabBarLabel: i18n.t('redeemtions') }}
      />
    </Tab.Navigator>
  );
};

export default PromoRoute;
