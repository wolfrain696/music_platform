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

export const TrackPageContainer = styled(Grid)`
  gap: 24px;
  margin-top: 24px;
  padding: 0 12px;
`;

const TrackPage = () => {
  const router = useRouter();
  const handleGoToBack = () => {
    router.back();
  };
  const track: ITrack = {
    _id: '6346b8be7b4ed3c6c7e5463f',
    name: 'track 1',
    artist: 'author 1 ',
    text: 'text 1',
    listens: 0,
    picture: 'image/b782244c-1eb7-4c42-b559-e142b750583b.jpg',
    audio: 'audio/22ca4902-5bb7-43d0-8566-fc70dd72dda7.mp3',
    comments: [{ _id: '12312312123', userName: 'ruslan', text: 'gooood' }],
  };
  return (
    <MainLayout>
      <IconButton onClick={handleGoToBack}>
        <BackIcon />
      </IconButton>
      <TrackPageContainer container>
        <TrackImage src={'http://localhost:5000/' + track.picture} />
        <Box>
          <Typography variant={'h3'}>{track.name}</Typography>
          <Typography color="gray" variant={'h5'}>
            {track.artist}
          </Typography>
          <Typography variant={'body1'}>Listens: {track.listens}</Typography>
        </Box>
      </TrackPageContainer>
      <Box p={2}>
        <Typography variant={'h5'}>Lyrics :</Typography>
        <Typography variant={'subtitle1'}>{track.text}</Typography>
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
        {track.comments.map((comment) => (
          <div>
            <Typography variant={'h5'}>{comment.userName}</Typography>
            <Typography variant={'subtitle1'}>{comment.text}</Typography>
          </div>
        ))}
      </Box>
    </MainLayout>
  );
};

export default TrackPage;
