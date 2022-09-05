import { base, API_PATHS, privateRequestPostPut } from '../index';

export const logout = async (params: any) => {
  const result = await privateRequestPostPut(
    base.post,
    API_PATHS.LOG_OUT,
    params,
  );

  return result.data;
};
