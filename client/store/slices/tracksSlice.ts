import { ITrack, TracksState } from '../../types/track';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteTrack, fetchTracks, getTrack } from '../asyncThunks/fetchTracks';
import { HYDRATE } from 'next-redux-wrapper';

const initialState: TracksState = {
  tracks: [],
  error: '',
  loading: false,
  currentTrack: null,
};

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        ...action.payload.tracks,
      };
    },
    [getTrack.fulfilled.type]: (state, action) => {
      state.currentTrack = action.payload;
    },
    [deleteTrack.fulfilled.type]: (
      state,
      { payload }: PayloadAction<ITrack[]>,
    ) => {
      return { ...state };
    },
    [fetchTracks.fulfilled.type]: (
      state,
      { payload }: PayloadAction<ITrack[]>,
    ) => {
      state.error = '';
      state.tracks = payload;
      state.loading = false;
    },
    [fetchTracks.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchTracks.rejected.type]: (
      state,
      { payload }: PayloadAction<string>,
    ) => {
      state.error = payload;
      state.loading = false;
    },
  },
});
