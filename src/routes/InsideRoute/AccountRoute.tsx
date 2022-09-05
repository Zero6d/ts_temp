import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountStackScreensParams, ScreensName } from '../types';
import COLORS from '@vbike/configs/theme/colors';
import KYCStep1 from '@vbike/screens/KYCStep1';
import KYCStep2 from '@vbike/screens/KYCStep2';
import KYCStep4 from '@vbike/screens/KYCStep4';

import HeaderLeftBack from '@vbike/components/HeaderLeftBack';
import KYCStep3Route from './KYCStep3Route';
import CameraScreen from '@vbike/screens/CameraScreen';
import Account from '@vbike/screens/Account';
import Profile from '@vbike/screens/Profile';
import MyWallet from '@vbike/screens/MyWallet';
import AddPoints from '@vbike/screens/AddPoints';
import PromoRoute from './PromoRoute';
import i18n from '@vbike/utils/i18n';
import HeaderTitle from '@vbike/components/HeaderTitle';
import OnlinePayment from '@vbike/screens/OnlinePayment';
import DetailPayment from '@vbike/screens/DetailPayment';
import HowToUseStep1 from '@vbike/screens/HowToUseStep1';
import HowToUseStep3 from '@vbike/screens/HowToUseStep3';
import HowToUseStep2 from '@vbike/screens/HowToUseStep2';
import Setting from '@vbike/screens/Setting';
import ChangePassword from '@vbike/screens/ChangePassword';
import ChangeLanguage from '@vbike/screens/ChangeLanguage';
import InviteFriend from '@vbike/screens/InviteFriend';
import HistoryBuyTicketScreen from '@vbike/screens/BuyTicketScreen';
import BuyTicketScreen from '@vbike/screens/BuyTicketScreen/BuyTicket';
import ListNearStation from '@vbike/screens/ListNearStation';
import MyTrip from '@vbike/screens/MyTrip';
import NotificationAndNews from '@vbike/screens/NotificationAndNews';
import Notification from '@vbike/screens/Notification';
import News from '@vbike/screens/News';
import DetailNewsAndNoti from '@vbike/screens/DetailNewsAndNoti';
import SharePointScreen from '@vbike/screens/SharePointScreen';
import SharePointDetail from '@vbike/screens/SharePointDetail';
import PaymentPage from '@vbike/screens/PaymentPage';

const AccountStack = createStackNavigator<AccountStackScreensParams>();

const AccountRoute = () => {
  return (
    <AccountStack.Navigator
      initialRouteName={ScreensName.Account}
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
      <AccountStack.Screen
        name={ScreensName.Account}
        component={Account}
        options={{
          headerLeft: () => null,
          headerTitle: () => null,
          headerStyle: {
            height: 25,
          },
        }}
      />
      <AccountStack.Screen
        name={ScreensName.Profile}
        component={Profile}
        options={{
          title: i18n.t('user_information'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.KYCStep1}
        component={KYCStep1}
        options={{
          headerTitle: () => null,
        }}
      />
      <AccountStack.Screen
        name={ScreensName.KYCStep2}
        component={KYCStep2}
        options={{
          title: i18n.t('verify_account'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.KYCStep3Route}
        component={KYCStep3Route}
        options={{
          title: i18n.t('take_photo_lisence'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.KYCStep4}
        component={KYCStep4}
        options={{
          headerLeft: () => null,
          headerTitle: () => null,
        }}
      />
      <AccountStack.Screen
        name={ScreensName.CameraScreen}
        component={CameraScreen}
        options={{
          title: i18n.t('take_photo_lisence'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.MyWallet}
        component={MyWallet}
        options={{
          title: i18n.t('my_wallet'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.AddPoints}
        component={AddPoints}
        options={{
          title: i18n.t('add_pts'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.PromoRoute}
        component={PromoRoute}
        options={{
          title: i18n.t('promo'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.OnlinePayment}
        component={OnlinePayment}
        options={{
          title: i18n.t('online_pay'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.DetailPayment}
        component={DetailPayment}
        options={{
          title: i18n.t('add_pts'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.HowToUseStep1}
        component={HowToUseStep1}
        options={{
          headerShown: false,
        }}
      />
      <AccountStack.Screen
        name={ScreensName.HowToUseStep2}
        component={HowToUseStep2}
        options={{
          presentation: 'transparentModal',
          headerShown: false,
        }}
      />
      <AccountStack.Screen
        name={ScreensName.HowToUseStep3}
        component={HowToUseStep3}
        options={{
          presentation: 'transparentModal',
          headerShown: false,
        }}
      />
      <AccountStack.Screen
        name={ScreensName.Setting}
        component={Setting}
        options={{
          title: i18n.t('setting_and_support'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.ChangePassword}
        component={ChangePassword}
        options={{
          title: i18n.t('setting_and_support'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.ChangeLanguage}
        component={ChangeLanguage}
        options={{
          title: i18n.t('setting_and_support'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.InviteFriend}
        component={InviteFriend}
        options={{
          title: i18n.t('invite_friend'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.HistoryBuyTicketScreen}
        component={HistoryBuyTicketScreen}
        options={{
          title: i18n.t('buy_ticket'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.BuyTicketScreen}
        component={BuyTicketScreen}
        options={{
          title: i18n.t('buy_ticket'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.ListNearStation}
        component={ListNearStation}
        options={{
          title: i18n.t('near_station'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.MyTrip}
        component={MyTrip}
        options={{
          title: i18n.t('my_trip'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.NotificationAndNews}
        component={NotificationAndNews}
        options={{
          title: i18n.t('noti_and_news'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.Notification}
        component={Notification}
        options={{
          title: i18n.t('notification'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.News}
        component={News}
        options={{
          title: i18n.t('news'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.DetailNewsAndNoti}
        component={DetailNewsAndNoti}
        options={{
          title: i18n.t('news'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.SharePointScreen}
        component={SharePointScreen}
        options={{
          title: i18n.t('share_pts'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.SharePointDetail}
        component={SharePointDetail}
        options={{
          title: i18n.t('share_pts'),
        }}
      />
      <AccountStack.Screen
        name={ScreensName.PaymentPage}
        component={PaymentPage}
        options={{
          title: i18n.t('pay'),
        }}
      />
    </AccountStack.Navigator>
  );
};

export default AccountRoute;
