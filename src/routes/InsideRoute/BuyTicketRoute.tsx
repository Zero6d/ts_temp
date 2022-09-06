import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BuyTicketRouteStackScreensParams, ScreensName} from '../types';
import COLORS from '@src/configs/theme/colors';
import HeaderLeftBack from '@src/components/HeaderLeftBack';
import HistoryBuyTicketScreen from '@src/screens/BuyTicketScreen';
import BuyTicketScreen from '@src/screens/BuyTicketScreen/BuyTicket';

import i18n from '@src/utils/i18n';

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
      }}>
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
