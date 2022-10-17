import * as React from 'react';
import { ITrack } from '../../types/track';
import { IconButton, Typography } from '@mui/material';
import PauseIcon from '@mui/icons-material/Pause';
import PlayIcon from '@mui/icons-material/PlayCircle';
import { Delete } from '@mui/icons-material';
import { useRouter } from 'next/router';
import {
  StyleCardImage,
  StyledTrackCard,
  StyledTrackContentWrapper,
} from './styled';
import { stopPropagation } from '../../utils/stopPropagation';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { setActive, setPause, setPlay } from '../../store/slices/playerSlice';
import { BaseSyntheticEvent } from 'react';

interface TrackItemProps {
  track: ITrack;
  trackActive?: boolean;
  onDelete: (id: string) => void;
}

export const TrackItem: React.FC<TrackItemProps> = ({
  trackActive = false,
  track,
  onDelete,
}) => {
  const router = useRouter();
  const {} = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();
  const handleGoToTrack = () => {
    router.push(`/tracks/${track._id}`);
  };

  const handleSetPlay = (e: BaseSyntheticEvent) => {
    e.stopPropagation();
    dispatch(setActive(track));
    dispatch(setPause());
  };

  const handleDeleteTrack = (e: BaseSyntheticEvent) => {
    e.stopPropagation();
    onDelete(track._id);
  };

  return (
    <StyledTrackCard onClick={handleGoToTrack}>
      <IconButton onClick={handleSetPlay}>
        {trackActive ? <PauseIcon /> : <PlayIcon />}
      </IconButton>
      <StyleCardImage image={'http://localhost:5000/' + track.picture} />
      <StyledTrackContentWrapper>
        <Typography>{track.name}</Typography>
        <Typography fontSize={12} color={'gray'}>
          {track.artist}
        </Typography>
      </StyledTrackContentWrapper>
      {trackActive && <div> 02:34 / 03:42 </div>}
      <IconButton onClick={handleDeleteTrack} style={{ marginLeft: 'auto' }}>
        <Delete />
      </IconButton>
    </StyledTrackCard>
  );
};
