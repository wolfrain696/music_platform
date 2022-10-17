import { createAsyncThunk } from '@reduxjs/toolkit';
import { tracksAPI } from '../../api';

export const fetchTracks = createAsyncThunk(
  'tracks/allTracks',
  async (_, thunkAPI) => {
    try {
      const { data } = await tracksAPI.getTracks();
      return data;
    } catch (e: any) {
      console.log(e.response.message);
      return e.response.message;
    }
  },
);

export const deleteTrack = createAsyncThunk(
  'tracks/deleteTrack',
  async (id: string, thunkAPI) => {
    try {
      const { data } = await tracksAPI.deleteTrack(id);
      return data;
    } catch (e: any) {
      console.log(e.response.message);
      return e.response.message;
    }
  },
);

export const createTrack = createAsyncThunk(
  'tracks/createTrack',
  async (params: any, thunkAPI) => {
    try {
      console.log(params);
      const { data } = await tracksAPI.addTrack(params);
      return data;
    } catch (e: any) {
      console.log(e.response.message);
      return e.response.message;
    }
  },
);
