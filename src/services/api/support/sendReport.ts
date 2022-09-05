import { base, API_PATHS, privateRequestPostPut } from './../index';
export const sendReport = async (params: any) => {
  const result = await privateRequestPostPut(
    base.post,
    API_PATHS.SEND_REPORT,
    params,
  );
  return result.data;
};
