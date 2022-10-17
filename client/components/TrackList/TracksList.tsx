import * as React from 'react';
import { ITrack } from '../../types/track';
import { Box, Grid } from '@mui/material';
import { TrackItem } from '../TrackItem/TrackItem';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { AppThunk, wrapper } from '../../store';
import { deleteTrack, fetchTracks } from '../../store/asyncThunks/fetchTracks';

export const TracksList: React.FC = () => {
  const { tracks } = useAppSelector((state) => state.tracks);
  const dispatch = useAppDispatch() as AppThunk;

  const handleDeleteTrack = async (id: string) => {
    await dispatch(deleteTrack(id));
    await dispatch(fetchTracks());
  };
  return (
    <Grid container direction={'column'}>
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem
            onDelete={handleDeleteTrack}
            key={track._id}
            track={track}
          />
        ))}
      </Box>
    </Grid>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (params) => {
    console.log('даааааа бля ');

    const dispatch = store.dispatch as AppThunk;
    dispatch(fetchTracks());
    return {
      props: {},
    };
  },
);
