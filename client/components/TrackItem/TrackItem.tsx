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
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { setActive, setPause, setPlay } from '../../store/slices/playerSlice';
import { BaseSyntheticEvent } from 'react';
import { getTime } from '../../utils/getTime';
import { baseUrlApi } from '../../constants';

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
  const { pause, active, currentTime, duration } = useAppSelector(
    (state) => state.player,
  );
  const dispatch = useAppDispatch();
  const handleGoToTrack = () => {
    router.push(`/tracks/${track._id}`);
  };

  const handleSetPlay = (e: BaseSyntheticEvent) => {
    e.stopPropagation();
    if (!trackActive) {
      dispatch(setActive(track));
    }
    if (pause) {
      dispatch(setPlay());
    } else {
      dispatch(setPause());
    }
  };

  const handleDeleteTrack = (e: BaseSyntheticEvent) => {
    e.stopPropagation();
    onDelete(track._id);
  };

  return (
    <StyledTrackCard onClick={handleGoToTrack}>
      <IconButton onClick={handleSetPlay}>
        {pause && trackActive ? <PauseIcon /> : <PlayIcon />}
      </IconButton>
      <StyleCardImage image={baseUrlApi + track.picture} />
      <StyledTrackContentWrapper>
        <Typography>{track.name}</Typography>
        <Typography fontSize={12} color={'gray'}>
          {track.artist}
        </Typography>
      </StyledTrackContentWrapper>
      {trackActive && (
        <div> {`${getTime(currentTime)} / ${getTime(duration)}`} </div>
      )}
      <IconButton onClick={handleDeleteTrack} style={{ marginLeft: 'auto' }}>
        <Delete />
      </IconButton>
    </StyledTrackCard>
  );
};
