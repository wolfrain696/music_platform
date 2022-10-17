import makeRequest from '../../makeRequest';

export const getTracks = () => {
  return makeRequest({ url: 'tracks' });
};

export const deleteTrack = (id: string) => {
  return makeRequest({ url: `tracks/${id}`, method: 'delete' });
};

export const addTrack = (params: any) =>
  makeRequest({ url: 'tracks', method: 'post', data: params });

export const getTrack = (trackId: string) =>
  makeRequest({ url: `tracks/${trackId}` });
