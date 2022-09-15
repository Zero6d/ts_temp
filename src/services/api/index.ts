import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

export const base: AxiosInstance = axios.create({
  baseURL: 'https://dummyjson.com',
});
type FunctionReturnString = (...args: any[]) => string;
export interface IAPI_PATHS {
  [key: string]: string | FunctionReturnString;
}
base.interceptors.response.use(undefined, error => {
  if (error.response && error.response.data && error.response.data.error) {
    return Promise.reject(error?.response?.data);
  }
  return Promise.reject(error?.response?.data);
});

type TApiService = () => {};

const API_PATHSFunc =
  <T>() =>
  <U extends T>(argument: U) =>
    argument;

const DUMMY_GET_ALL: FunctionReturnString = (limit: any, skip: any) =>
  `products?limit=${limit}&skip=${skip}`;

export const API_PATHS = API_PATHSFunc<IAPI_PATHS>()({
  DUMMY_GET_ALL,
});

// export const injectBearer = (token: string, configs?: AxiosRequestConfig) => {
//   if (!configs) {
//     return {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Accept-Language': 'vi',
//       },
//     };
//   }

//   if (configs.headers) {
//     return {
//       ...configs,
//       headers: {
//         ...configs.headers,
//         Authorization: `Bearer ${token}`,
//       },
//     };
//   }
//   return {
//     ...configs,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

// export const TokenManager = new TokenManagement({
//   isTokenValid: async () => {
//     const token = storage.getString(StorageKey.Authen);
//     const decode: any = token && jwt_decode(token);

//     const current_time = dayjs(new Date());
//     return current_time < dayjs(decode?.exp * 1000);
//   },

//   getAccessToken: async () => {
//     const token = storage.getString(StorageKey.Authen);
//     return token;
//   },
//   onRefreshToken: async (onDone: any) => {
//     const old_token = storage.getString(StorageKey.Authen);
//     const token = old_token && (await _refreshToken(old_token));
//     if (token) {
//       storage.set(StorageKey.Authen, token);
//       onDone(token);
//     } else {
//       try {
//         storage.set(StorageKey.Authen, '');
//       } catch (error) {}
//     }
//   },
// });

// const _refreshToken = async (old_token: string) => {
//   const result = await base.post(API_PATHS.REFRESH_TOKEN, {
//     refreshToken: old_token,
//   });
//   return result?.data?.access_token;
// };

// export const privateRequestGetDelete = async (
//   request?: any,
//   url?: string,
//   configs?: AxiosRequestConfig,
// ) => {
//   const token = await TokenManager.getToken();
//   return request(url, injectBearer(token, configs));
// };

// export const privateRequestPostPut = async (
//   request?: any,
//   url?: string,
//   data?: any,
//   configs?: AxiosRequestConfig,
// ) => {
//   const token = await TokenManager.getToken();
//   return request(url, data, injectBearer(token, configs));
// };
