import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Box from '@src/components/Box';
import Icon from '@src/components/Icon';
import {IconType} from '@src/components/Icon/type';
import COLORS from '@src/configs/theme/colors';
import i18n from '@src/utils/i18n';
import React, {useEffect} from 'react';
import {Alert, Platform} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {InsideScreenParams, ScreensName} from '../types';
import AccountRoute from './AccountRoute';
import BuyTicketRoute from './BuyTicketRoute';
import HomeRoute from './HomeRoute';
import RentRoute from './RentRoute';
import UnlockRoute from './UnlockRoute';
import messaging from '@react-native-firebase/messaging';

const RootTabs = createBottomTabNavigator<InsideScreenParams>();

const InsideRoute = () => {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  useEffect(() => {
    requestUserPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);
  return (
    <RootTabs.Navigator
      initialRouteName={ScreensName.HomeRoute}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.WHITE,
        },
        tabBarLabelStyle: {
          marginBottom: Platform.select({
            ios: isIphoneX() ? -5 : 10,
            android: 10,
          }),
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
        tabBarIcon: ({color, size}) => {
          let iconName: IconType | undefined;
          if (route.name === ScreensName.HomeRoute) {
            iconName = 'updated_home';
          } else if (route.name === ScreensName.RentRoute) {
            iconName = 'bicycle';
          } else if (route.name === ScreensName.UnlockRoute) {
            iconName = 'updated_qr';
          } else if (route.name === ScreensName.BuyTicketRoute) {
            iconName = 'ticket';
          } else if (route.name === ScreensName.AccountTab) {
            iconName = 'user';
          }

          if (!iconName) {
            return null;
          }
          if (iconName !== 'updated_qr') {
            return <Icon name={iconName} size={size} color={color} />;
          } else {
            return (
              <Box
                margin={[10, 0, 0, 0]}
                background="PRIMARY_500"
                circle={60}
                align="center"
                justify="center">
                <Icon name={iconName} size={40} color={COLORS.WHITE} />
              </Box>
            );
          }
        },
        tabBarActiveTintColor: COLORS.PRIMARY_500,
        tabBarInactiveTintColor: COLORS.MONO_500,
      })}>
      <RootTabs.Screen
        name={ScreensName.HomeRoute}
        component={HomeRoute}
        options={{tabBarLabel: i18n.t('home')}}
      />
      <RootTabs.Screen
        name={ScreensName.RentRoute}
        component={RentRoute}
        options={{tabBarLabel: i18n.t('renting_bike')}}
      />
      <RootTabs.Screen
        name={ScreensName.UnlockRoute}
        component={UnlockRoute}
        options={{
          tabBarLabel: i18n.t(''),
        }}
      />
      <RootTabs.Screen
        name={ScreensName.BuyTicketRoute}
        component={BuyTicketRoute}
        options={{tabBarLabel: i18n.t('buy_ticket')}}
      />
      <RootTabs.Screen
        name={ScreensName.AccountTab}
        component={AccountRoute}
        options={{
          tabBarLabel: i18n.t('account'),
        }}
      />
    </RootTabs.Navigator>
  );
};

export default InsideRoute;
