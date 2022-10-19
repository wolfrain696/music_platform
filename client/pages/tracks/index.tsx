import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Button } from '@mui/material';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { TracksList } from '../../components/TrackList/TracksList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchTracks } from '../../store/asyncThunks/fetchTracks';
import { AppThunk, wrapper } from '../../store';
import { useEffect } from 'react';

const StyledCard = styled(Card)`
  width: 900px;
  padding: 0 16px;
`;

const Index = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.tracks);
  const handleGoCreateTrackPage = () => {
    router.push('/tracks/create');
  };

  useEffect(() => {
    dispatch(fetchTracks());
  }, []);

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Grid container justifyContent={'center'}>
        <StyledCard>
          <Grid container justifyContent={'space-between'}>
            <h1>Track list</h1>
            <Button onClick={handleGoCreateTrackPage}>Upload</Button>
          </Grid>
          <TracksList />
        </StyledCard>
      </Grid>
    </MainLayout>
  );
};

export default Index;
