import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Button } from '@mui/material';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { TracksList } from '../../components/TrackList/TracksList';
import { useAppSelector } from '../../hooks/redux-hooks';
import { fetchTracks } from '../../store/asyncThunks/fetchTracks';
import { AppThunk, wrapper } from '../../store';

const StyledCard = styled(Card)`
  width: 900px;
  padding: 0 16px;
`;

const Index = () => {
  const router = useRouter();
  const { tracks, error } = useAppSelector((state) => state.tracks);
  const handleGoCreateTrackPage = () => {
    router.push('/tracks/create');
  };

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
          <TracksList tracks={tracks} />
        </StyledCard>
      </Grid>
    </MainLayout>
  );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (params) => {
    const dispatch = store.dispatch as AppThunk;
    await dispatch(await fetchTracks());
    console.log('даааааа бля ');

    return {
      props: {},
    };
  },
);
