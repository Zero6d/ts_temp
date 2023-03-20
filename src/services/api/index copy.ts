import TokenManager, { injectBearer, parseJwt } from 'brainless-token-manager';
import { BACK_END_URL } from '@env';
import { rootStackUpdateRef } from '@src/routes/RootStackRoute';
import { storage, StorageKey } from '@src/storage';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';
import { refresh_token_api } from './user';
import { useRequest } from 'ahooks';
export const base: AxiosInstance = axios.create({
  baseURL: 'https://api.winvestcorp.vn/v1/',
});

base.interceptors.response.use(undefined, error => {
  if (error.response && error.response.data && error.response.data.error) {
    return Promise.reject(error?.response?.data);
  }
  return Promise.reject(error?.response?.data);
});

export const tokenManager = new TokenManager({
  getAccessToken: async () => {
    const token = storage.getString(StorageKey.Authen);
    return `${token}`;
  },
  getRefreshToken: async () => {
    const refreshToken = storage.getString(StorageKey.Refresh_token);

    return `${refreshToken}`;
  },
  isValidToken: async (token: string) => {
    const decode: any = token && jwt_decode(token);

    const current_time = dayjs(new Date());
    return current_time < dayjs(decode?.exp * 1000);
  },
  isValidRefreshToken: async (refresh_token: string) => {
    if (!refresh_token) {
      storage.set(StorageKey.Authen, '');
      storage.set(StorageKey.Refresh_token, '');
      rootStackUpdateRef?.setUpdate(new Date().toISOString());
      return false;
    }
    const decode: any = refresh_token && jwt_decode(refresh_token);

    const current_time = dayjs(new Date());
    return current_time < dayjs(decode?.exp * 1000);
  },
  onInvalidRefreshToken: () => {
    storage.set(StorageKey.Authen, '');
    storage.set(StorageKey.Refresh_token, '');
    rootStackUpdateRef?.setUpdate(new Date().toISOString());
  },

  executeRefreshToken: async () => {
    const refreshToken = storage.getString(StorageKey.Refresh_token);

    if (!refreshToken) {
      return {
        token: '',
        refresh_token: '',
      };
    } else {
      try {
        const r = await refresh_token_api(refreshToken);
        console.log(r);
        return {
          token: r?.access?.token,
          refresh_token: r?.refresh?.token,
        };
      } catch (e: any) {
        console.log('asdf', e);
        storage.set(StorageKey.Authen, '');
        storage.set(StorageKey.Refresh_token, '');
        rootStackUpdateRef?.setUpdate(new Date().toISOString());
      }
    }
  },

  onRefreshTokenSuccess: ({ token, refresh_token }) => {
    if (token && refresh_token) {
      storage.set(StorageKey.Authen, token);
      storage.set(StorageKey.Refresh_token, refresh_token);
    }
  },
});

export const privateRequestGetDelete = async (
  request?: any,
  url?: string,
  configs?: AxiosRequestConfig,
) => {
  const token: any = await tokenManager.getToken();
  return request(url, injectBearer(token, configs));
};

export const privateRequestPostPut = async (
  request?: any,
  url?: string,
  data?: any,
  configs?: AxiosRequestConfig,
) => {
  const token: any = await tokenManager.getToken();
  return request(url, data, injectBearer(token, configs));
};
