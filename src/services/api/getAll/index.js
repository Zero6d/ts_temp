import {base, API_PATHS} from '../index';

export const getAllDummy = async () => {
  const result = await base.get(API_PATHS.DUMMY_GET_ALL);

  return result.data;
};
