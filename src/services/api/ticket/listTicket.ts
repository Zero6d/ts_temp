import { base, API_PATHS, privateRequestGetDelete } from './../index';
export const getListTicket = async (data: any, status: string | undefined) => {
  const result = await privateRequestGetDelete(
    base.get,
    status
      ? `${API_PATHS.TICKET_MY}?page=${data}&pageSize=200&status=${status}`
      : `${API_PATHS.TICKET_MY}?page=${data}&pageSize=200`,
  );
  return result.data;
};
