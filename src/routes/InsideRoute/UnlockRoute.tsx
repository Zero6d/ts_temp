import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreensName, UnlockRouteStackScreensParams } from '../types';
import COLORS from '@vbike/configs/theme/colors';
import HeaderLeftBack from '@vbike/components/HeaderLeftBack';
import UnlockScreen from '@vbike/screens/UnlockScreen';
import i18n from '@vbike/utils/i18n';
import EnterQrcode from '@vbike/screens/UnlockScreen/EnterQrcode';
import UnlockErrorScreen from '@vbike/screens/UnlockScreen/UnlockError';
import DetailBicycle from '@vbike/screens/Home/DetailBicycle';
import SuppostScreen from '@vbike/screens/SupportScreen';
import AddPoints from '@vbike/screens/AddPoints';
import PromoRoute from './PromoRoute';
import HowToUseStep1 from '@vbike/screens/HowToUseStep1';
import HowToUseStep3 from '@vbike/screens/HowToUseStep3';
import HowToUseStep2 from '@vbike/screens/HowToUseStep2';
import OnlinePayment from '@vbike/screens/OnlinePayment';
import DetailPayment from '@vbike/screens/DetailPayment';
import PaymentPage from '@vbike/screens/PaymentPage';
import BuyTicketScreen from '@vbike/screens/BuyTicketScreen/BuyTicket';

const UnlockStack = createStackNavigator<UnlockRouteStackScreensParams>();

const UnlockRoute = () => {
  return (
    <UnlockStack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeftBack />,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: COLORS.WHITE,
        },
        headerTitleStyle: {
          color: COLORS.BLUE_500,
        },
      }}
    >
      <UnlockStack.Screen
        name={ScreensName.UnlockScreen}
        component={UnlockScreen}
        options={{
          title: i18n.t('home.qrcode.title'),
        }}
      />
      <UnlockStack.Screen
        name={ScreensName.UnlockErrorScreen}
        component={UnlockErrorScreen}
        options={{
          title: i18n.t('home.qrcode.title'),
        }}
      />
      <UnlockStack.Screen
        name={ScreensName.EnterQrcode}
        component={EnterQrcode}
        options={{
          title: i18n.t('home.qrcode.title'),
        }}
      />
      <UnlockStack.Screen
        name={ScreensName.DetailBicycle}
        component={DetailBicycle}
        options={{
          title: i18n.t('home.bicycle.detail'),
        }}
      />
      <UnlockStack.Screen
        name={ScreensName.SuppostScreen}
        component={SuppostScreen}
        options={{
          title: i18n.t('report'),
        }}
      />
      <UnlockStack.Screen
        name={ScreensName.AddPoints}
        component={AddPoints}
        options={{
          title: i18n.t('add_pts'),
        }}
      />
      <UnlockStack.Screen
        name={ScreensName.PromoRoute}
        component={PromoRoute}
        options={{
          title: i18n.t('promo'),
        }}
      />
      <UnlockStack.Screen
        name={ScreensName.HowToUseStep1}
        component={HowToUseStep1}
        options={{
          headerShown: false,
        }}
      />
      <UnlockStack.Screen
        name={ScreensName.HowToUseStep2}
        component={HowToUseStep2}
        options={{
          headerShown: false,
        }}
      />
      <UnlockStack.Screen
        name={ScreensName.HowToUseStep3}
        component={HowToUseStep3}
        options={{
          headerShown: false,
        }}
      />
      <UnlockStack.Screen
        name={ScreensName.OnlinePayment}
        component={OnlinePayment}
        options={{
          title: i18n.t('online_pay'),
        }}
      />
      <UnlockStack.Screen
        name={ScreensName.DetailPayment}
        component={DetailPayment}
        options={{
          title: i18n.t('add_pts'),
        }}
      />
      <UnlockStack.Screen
        name={ScreensName.PaymentPage}
        component={PaymentPage}
        options={{
          title: i18n.t('pay'),
        }}
      />
      <UnlockStack.Screen
        name={ScreensName.BuyTicketScreen}
        component={BuyTicketScreen}
        options={{
          title: i18n.t('buy.ticket'),
        }}
      />
    </UnlockStack.Navigator>
  );
};

export default UnlockRoute;