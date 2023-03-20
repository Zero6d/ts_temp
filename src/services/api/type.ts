export type FunctionReturnString = (...args: any[]) => string;
export interface IAPI_PATHS {
  [key: string]: string | FunctionReturnString;
}

export interface watchlistType {
  type: 'fund' | 'ctck' | 'pro_trader';
}
const API_PATHSFunc =
  <T>() =>
  <U extends T>(argument: U) =>
    argument;

const FUND_BY_ID: FunctionReturnString = (id: string) => `/funds/${id}`;

const PRO_BY_ID: FunctionReturnString = (id: string, userId?: string) =>
  `/pros/${id}/portfolios${userId ? `/?userId=${userId}` : ''}`;

const CTCK_BY_ID: FunctionReturnString = (id: string, userId?: string) =>
  `/secs/${id}?userId=${userId}`;

const PACKAGE_PRO: FunctionReturnString = (id: string) =>
  `/packages/pros?proId=${id}`;

const PAYMENT: FunctionReturnString = (type: string, packageId: string) =>
  `/payments/9pay?type=${type}&packageId=${packageId}`;

const PORTFOLIOS_FUND: FunctionReturnString = (id: string, userId?: string) =>
  `/funds/${id}/portfolios?userId=${userId}`;

const GET_MAP: FunctionReturnString = (startDate: string, endDate: string) =>
  `/maps?startDate=${startDate}&endDate=${endDate}`;

const GET_CTCK: FunctionReturnString = (
  name: string,
  sortBy: string,
  limit: number,
  page: number,
) => `/secs?limit=${limit}&page=${page}`;

const GET_FUND: FunctionReturnString = (
  name: string,
  sortBy: string,
  limit: number,
  page: number,
) => `/funds?name=${name}&sortByName=${sortBy}&limit=${limit}&page=${page}`;

const RECOMMENDS: FunctionReturnString = (limit: number, page: number) =>
  `/recs?limit=${limit}&page=${page}`;

const RECOMMENDS_CTCK: FunctionReturnString = (
  id: string,
  limit: number,
  page: number,
) => `/recs/secs?secsId=${id}&limit=${limit}&page=${page}`;

const RECOMMENDS_DETAIL: FunctionReturnString = (id: string) => `/recs/${id}`;

const POST_DETAIL: FunctionReturnString = (id: string) => `/posts/${id}`;

const POST_COMMENTS: FunctionReturnString = (id: string) =>
  `/posts/${id}/comments`;

const POST_COMMENTS_EDIT: FunctionReturnString = (
  id: string,
  idComment: string,
) => `/posts/${id}/comments/${idComment}`;

const GET_POST: FunctionReturnString = (
  author: string,
  limit: number,
  page: number,
) => `/posts?author=${author}&limit=${limit}&page=${page}`;

const WATCHLIST: FunctionReturnString = (type: string, objectId: string) =>
  `/watchlists?type=${type}&objectId=${objectId}`;

const FOLLOW: FunctionReturnString = (type: string, objectId: string) =>
  `/follows?type=${type}&objectId=${objectId}`;

const GET_WATCHLIST: FunctionReturnString = (
  type: string,
  limit: number,
  page: number,
) => `/watchlists?type=${type}&limit=${limit}&page=${page}`;

const GET_FOLLOW: FunctionReturnString = (
  type: string,
  limit: number,
  page: number,
) => `/follows?type=${type}&limit=${limit}&page=${page}`;

const IS_WATCHLIST: FunctionReturnString = (type: string, objectId: string) =>
  `/watchlists/is-watchlist?type=${type}&objectId=${objectId}`;

const RECOMMEND_TOP: FunctionReturnString = (limit: string, page: string) =>
  `/recs/top?limit=${limit}&page=${page}`;

const TOP_10_FUND: FunctionReturnString = (userId?: string) =>
  `/funds/top${userId ? `/?userId=${userId}` : ''}`;

const TOP_10_CTCK: FunctionReturnString = (userId?: string) =>
  `/secs/top${userId ? `/?userId=${userId}` : ''}`;

const TOP_10_PRO: FunctionReturnString = (filter: string, userId?: string) =>
  `/pros/top?filter=${filter}${userId ? `&userId=${userId}` : ''}`;

export const API_PATHS = API_PATHSFunc<IAPI_PATHS>()({
  LOGIN_WITH_PHONE: '/auth/login/mobile',
  SIGNUP_PHONE: '/auth/signup/mobile',
  FORGOT_PASSWORD: '/auth/forgot-password/mobile',
  CHANGE_PASSWORD: '/users/update-password',
  USER_INFOR: '/users/profile',
  TOP_10_FUND,
  TOP_10_CTCK,
  TOP_10_PRO,
  PACKAGE_PLATFORM: '/packages/platforms',
  PACKAGE_SUBSCRIPTION_PRO: '/packages/pros/subscriptions',
  PACKAGE_SUBSCRIPTION_PLATFORM: '/packages/platforms/subscriptions',
  PACKAGE_PRO,
  NOTIFICATION_ON: '/notifications/on',
  NOTIFICATION_OFF: '/notifications/off',
  POST: '/posts',
  GET_POST,
  POST_DETAIL,
  POST_COMMENTS,
  POST_COMMENTS_EDIT,
  FUND_BY_ID,
  CTCK_BY_ID,
  RECOMMENDS,
  RECOMMENDS_CTCK,
  RECOMMENDS_DETAIL,
  PRO_BY_ID,
  PORTFOLIOS_FUND,
  GET_CTCK,
  GET_FUND,
  WATCHLIST,
  RECOMMEND_TOP,
  GET_WATCHLIST,
  FOLLOW,
  GET_FOLLOW,
  IS_WATCHLIST,
  GET_MAP,
  REFRESH_TOKEN: '/auth/refresh-tokens',
  PAYMENT,
});
