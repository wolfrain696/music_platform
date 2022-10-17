import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PlayerState } from '../../types/player';
import { ITrack } from '../../types/track';
import { HYDRATE } from 'next-redux-wrapper';

const initialState: PlayerState = {
  active: null,
  duration: 0,
  pause: true,
  volume: 50,
  currentTime: 0,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPause: (state) => {
      state.pause = true;
    },
    setPlay: (state) => {
      state.pause = false;
    },
    setCurrentTime: (state, { payload }: PayloadAction<number>) => {
      state.currentTime = payload;
    },
    setVolume: (state, { payload }: PayloadAction<number>) => {
      state.volume = payload;
    },
    setDuration: (state, { payload }: PayloadAction<number>) => {
      state.duration = payload;
    },
    setActive: (state, { payload }: PayloadAction<null | ITrack>) => {
      state.active = payload;
      state.duration = 0;
      state.currentTime = 0;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.player,
      };
    },
  },
});

export const {
  setPlay,
  setPause,
  setActive,
  setVolume,
  setDuration,
  setCurrentTime,
} = playerSlice.actions;
