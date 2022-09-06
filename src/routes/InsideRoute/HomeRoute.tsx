import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeRouteStackScreensParams, ScreensName} from '../types';
import HomeScreen from '@src/screens/Home';
import ListNearStation from '@src/screens/ListNearStation';
import HeaderLeftBack from '@src/components/HeaderLeftBack';
import COLORS from '@src/configs/theme/colors';
import SearchBicycle from '@src/screens/SearchBicycle';
import DetailBicycle from '@src/screens/Home/DetailBicycle';
import i18n from '@src/utils/i18n';
import BuyTicketScreen from '@src/screens/BuyTicketScreen/BuyTicket';
import RentScreen from '@src/screens/RentScreen';
import RentSuccessScreen from '@src/screens/RentScreen/RentSuccessScreen';

const HomeStack = createStackNavigator<HomeRouteStackScreensParams>();

const HomeRoute = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={ScreensName.HomeScreen}
      screenOptions={{
        headerLeft: () => <HeaderLeftBack />,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: COLORS.WHITE,
        },
        headerTitleStyle: {
          color: COLORS.BLUE_500,
        },
      }}>
      <HomeStack.Screen
        name={ScreensName.HomeScreen}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={ScreensName.ListNearStation}
        component={ListNearStation}
        options={{
          title: i18n.t('list_station'),
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen
        name={ScreensName.SearchBicycle}
        component={SearchBicycle}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={ScreensName.DetailBicycle}
        component={DetailBicycle}
        options={{
          headerTitle: i18n.t('home.bicycle.detail'),
          headerTitleAlign: 'center',
        }}
      />
      {/* <HomeStack.Screen
        name={ScreensName.UnlockScreen}
        component={UnlockScreen}
        options={{
          title: i18n.t('home.qrcode.title'),
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen
        name={ScreensName.UnlockErrorScreen}
        component={UnlockErrorScreen}
        options={{
          title: i18n.t('home.qrcode.title'),
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen
        name={ScreensName.EnterQrcode}
        component={EnterQrcode}
        options={{
          title: i18n.t('home.qrcode.title'),
          headerTitleAlign: 'center',
        }}
      /> */}
      <HomeStack.Screen
        name={ScreensName.BuyTicketScreen}
        component={BuyTicketScreen}
        options={{
          title: i18n.t('buy.ticket'),
          headerTitleStyle: {
            color: COLORS.BLUE_400,
          },

          headerTitleAlign: 'center',
          headerLeft: () => {
            return <HeaderLeftBack color={COLORS.BLUE_400} />;
          },
        }}
      />
      <HomeStack.Screen
        name={ScreensName.RentScreen}
        component={RentScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={ScreensName.RentSuccessScreen}
        component={RentSuccessScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoute;
