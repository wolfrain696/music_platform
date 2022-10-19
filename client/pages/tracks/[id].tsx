import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';
import BackIcon from '@mui/icons-material/ArrowBack';
import {
  IconButton,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { TrackImage } from '../../components/TrackImage/TrackImage';
import styled from '@emotion/styled';
import { useAppSelector } from '../../hooks/redux-hooks';
import { AppThunk, wrapper } from '../../store';
import { fetchTracks, getTrack } from '../../store/asyncThunks/fetchTracks';
import { baseUrlApi } from '../../constants';

export const TrackPageContainer = styled(Grid)`
  gap: 24px;
  margin-top: 24px;
  padding: 0 12px;
`;

const TrackPage = () => {
  const { currentTrack } = useAppSelector((state) => state.tracks);
  const router = useRouter();
  const handleGoToBack = () => {
    router.back();
  };
  return (
    <MainLayout>
      <IconButton onClick={handleGoToBack}>
        <BackIcon />
      </IconButton>
      <TrackPageContainer container>
        <TrackImage src={baseUrlApi + currentTrack?.picture} />
        <Box>
          <Typography variant={'h3'}>{currentTrack?.name}</Typography>
          <Typography color="gray" variant={'h5'}>
            {currentTrack?.artist}
          </Typography>
          <Typography variant={'body1'}>
            Listens: {currentTrack?.listens}
          </Typography>
        </Box>
      </TrackPageContainer>
      <Box p={2}>
        <Typography variant={'h5'}>Lyrics :</Typography>
        <Typography variant={'subtitle1'}>{currentTrack?.text}</Typography>
      </Box>
      <Box p={2}>
        <Typography variant={'h5'}>Comments:</Typography>
        <Grid container gap={2}>
          <TextField label="Your name" fullWidth />
          <TextField label="Comment" multiline rows={3} fullWidth />
          <Button variant={'outlined'}>Sudbmit</Button>
        </Grid>
      </Box>
      <Box p={2}>
        {currentTrack?.comments.map((comment) => (
          <div key={comment._id}>
            <Typography variant={'h5'}>{comment.userName}</Typography>
            <Typography variant={'subtitle1'}>{comment.text}</Typography>
          </div>
        ))}
      </Box>
    </MainLayout>
  );
};

export default TrackPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      const dispatch = store.dispatch as AppThunk;
      if (query.id) await dispatch(await getTrack(query.id.toString()));
      return {
        props: {},
      };
    },
);
