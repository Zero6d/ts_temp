import {base, API_PATHS} from '../index';

export const getAllDummy = async (limit: any, skip: any) => {
  const result = await base.get(API_PATHS.DUMMY_GET_ALL(limit, skip));

  return result.data;
};
