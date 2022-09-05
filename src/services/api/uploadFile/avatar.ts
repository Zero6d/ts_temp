import { API_PATHS, TokenManager } from '../index';
import { BACK_END_URL } from '@env';

export const uploadAvatar = async (
  data: any,
  onSuccess?: any,
  onError?: any,
  onRefresh?: any,
) => {
  const formData = new FormData();
  formData.append('avatar', {
    originalname: data.filename,
    name: data.fileName,
    type: data.type,
    uri: data.uri,
  });
  const token = await TokenManager.getToken();
  fetch(`${BACK_END_URL}${API_PATHS.AVATAR}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })
    .then(res => res.json())
    .then(res => {
      onSuccess && onSuccess(res);
    })
    .then(() => {
      onRefresh && onRefresh();
    })
    .catch(e => onError(e));
};
