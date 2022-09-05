import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BuyTicketRouteStackScreensParams, ScreensName } from '../types';
import COLORS from '@vbike/configs/theme/colors';
import HeaderLeftBack from '@vbike/components/HeaderLeftBack';
import HistoryBuyTicketScreen from '@vbike/screens/BuyTicketScreen';
import BuyTicketScreen from '@vbike/screens/BuyTicketScreen/BuyTicket';

import i18n from '@vbike/utils/i18n';

const BuyTicketStack = createStackNavigator<BuyTicketRouteStackScreensParams>();

const BuyTicketRoute = () => {
  return (
    <BuyTicketStack.Navigator
      initialRouteName={ScreensName.HistoryBuyTicketScreen}
      screenOptions={{
        headerLeft: () => <HeaderLeftBack />,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: COLORS.WHITE,
        },
      }}
    >
      <BuyTicketStack.Screen
        name={ScreensName.HistoryBuyTicketScreen}
        component={HistoryBuyTicketScreen}
        options={{
          title: i18n.t('buy.ticket'),
          headerTitleStyle: {
            color: COLORS.BLUE_400,
          },
        }}
      />
      <BuyTicketStack.Screen
        name={ScreensName.BuyTicketScreen}
        component={BuyTicketScreen}
        options={{
          title: i18n.t('buy.ticket'),
          headerTitleStyle: {
            color: COLORS.BLUE_400,
          },
        }}
      />
    </BuyTicketStack.Navigator>
  );
};

export default BuyTicketRoute;
