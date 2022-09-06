// import {NavigatorScreenParams} from '@react-navigation/native';
import {NavigatorScreenParams} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

// import { LatLng } from 'react-native-maps';

export enum ScreensName {
  Outside = 'Outside',
  Inside = 'Inside',
  SignIn = 'SignIn',
  Home = 'Home',
  Account = 'Account',
  HomeRoute = 'HomeRoute',
  AccountRoute = 'AccountRoute',
}

export type AccountStackScreensParams = {
  [ScreensName.Account]: undefined;
};

export type AccountRouteScreenProps<T extends keyof AccountStackScreensParams> =
  StackScreenProps<AccountStackScreensParams, T>;

export type BuyTicketRouteStackScreensParams = {
  // [ScreensName.BuyTicketScreen]: undefined;
};

export type BuyTicketRouteScreenProps<
  T extends keyof BuyTicketRouteStackScreensParams,
> = StackScreenProps<BuyTicketRouteStackScreensParams, T>;

export type RentRouteStackScreensParams = {
  // [ScreensName.RentScreen]: undefined;
};

export type RentRouteScreenProps<T extends keyof RentRouteStackScreensParams> =
  StackScreenProps<RentRouteStackScreensParams, T>;

export type UnlockRouteStackScreensParams = {
  // [ScreensName.UnlockScreen]: undefined;
};

export type UnlockRouteStackScreensProps<
  T extends keyof UnlockRouteStackScreensParams,
> = StackScreenProps<UnlockRouteStackScreensParams, T>;

export type HomeRouteStackScreensParams = {
  [ScreensName.Home]: undefined;
};

export type HomeRouteScreenProps<T extends keyof HomeRouteStackScreensParams> =
  StackScreenProps<HomeRouteStackScreensParams, T>;

export type InsideScreenParams = {
  [ScreensName.HomeRoute]: NavigatorScreenParams<HomeRouteStackScreensParams>;
  [ScreensName.AccountRoute]: NavigatorScreenParams<AccountStackScreensParams>;
};

export type InsideScreenProps<T extends keyof InsideScreenParams> =
  StackScreenProps<InsideScreenParams, T>;

export type OutsideScreenParams = {
  [ScreensName.SignIn]: undefined;
};

export type OutsideScreenProps<T extends keyof OutsideScreenParams> =
  StackScreenProps<OutsideScreenParams, T>;

export type RootStackScreensParams = {
  [ScreensName.Outside]: undefined;
  [ScreensName.Inside]: undefined;
};

export type RootStacksScreenProps<T extends keyof RootStackScreensParams> =
  StackScreenProps<RootStackScreensParams, T>;
