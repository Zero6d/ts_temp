import React from 'react';
import {PromoStackScreensParams, ScreensName} from '../types';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import PromoTabBar from '@src/components/PromoTabBar';
import Promotions from '@src/screens/Promotions';
import Redeemtions from '@src/screens/Redeemtions';
import i18n from '@src/utils/i18n';

const Tab = createMaterialTopTabNavigator<PromoStackScreensParams>();

const PromoRoute = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreensName.Promotions}
      tabBar={props => <PromoTabBar {...props} />}>
      <Tab.Screen
        name={ScreensName.Promotions}
        component={Promotions}
        options={{tabBarLabel: i18n.t('promo')}}
      />
      <Tab.Screen
        name={ScreensName.Redeemtions}
        component={Redeemtions}
        options={{tabBarLabel: i18n.t('redeemtions')}}
      />
    </Tab.Navigator>
  );
};

export default PromoRoute;
