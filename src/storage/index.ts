import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export enum StorageKey {
  Language = 'Language',
  Authen = 'Authen',
  Refresh_token = 'Refresh_token',
}
