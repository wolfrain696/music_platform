import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { TrackItem } from '../TrackItem/TrackItem';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { AppThunk, wrapper } from '../../store';
import { deleteTrack, fetchTracks } from '../../store/asyncThunks/fetchTracks';

export const TracksList: React.FC = () => {
  const { tracks } = useAppSelector((state) => state.tracks);
  const { active } = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch() as AppThunk;

  const handleDeleteTrack = async (id: string) => {
    await dispatch(deleteTrack(id));
  };
  return (
    <Grid container direction={'column'}>
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem
            trackActive={track._id === active?._id}
            onDelete={handleDeleteTrack}
            key={track._id}
            track={track}
          />
        ))}
      </Box>
    </Grid>
  );
};
