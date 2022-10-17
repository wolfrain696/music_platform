import {
  Action,
  AnyAction,
  configureStore,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { playerSlice } from './slices/playerSlice';
import { tracksSlice } from './slices/tracksSlice';

const store = () =>
  configureStore({
    reducer: {
      [playerSlice.name]: playerSlice.reducer,
      [tracksSlice.name]: tracksSlice.reducer,
    },
    devTools: true,
  });

export type RootState = ReturnType<typeof store>;
export type AppDispatch = RootState['dispatch'];
export type AppState = ReturnType<RootState['getState']>;
export type AppThunk = ThunkDispatch<AppState, void, AnyAction>;

export const wrapper = createWrapper<RootState>(store);
