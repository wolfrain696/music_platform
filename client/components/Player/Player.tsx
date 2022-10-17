import { Box, Grid, IconButton, Typography } from '@mui/material';
import { stopPropagation } from '../../utils/stopPropagation';
import PauseIcon from '@mui/icons-material/Pause';
import PlayIcon from '@mui/icons-material/PlayCircle';
import VolumeUp from '@mui/icons-material/VolumeUp';
import * as React from 'react';
import styled from '@emotion/styled';
import { TrackProgress } from '../TrackProgress/TrackProgress';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import {
  setPlay,
  setPause,
  setVolume,
  setCurrentTime,
  setDuration,
} from '../../store/slices/playerSlice';
import { BaseSyntheticEvent, useEffect } from 'react';
import { StyledPlayerContainer } from './styled';

let audio: HTMLAudioElement | undefined;

export const Player = () => {
  const { active, pause, volume, duration, currentTime } = useAppSelector(
    (state) => state.player,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      handleSetAudio();
      handlePlay();
    }
  }, [active]);

  useEffect(() => {
    if (pause) {
      audio?.play();
    } else {
      audio?.pause();
    }
  }, [pause]);

  const handleSetAudio = () => {
    if (!active || !audio) return;
    audio.src = 'http://localhost:5000/' + active.audio;
    audio.volume = volume / 100;
    audio.onloadedmetadata = () => {
      dispatch(setDuration(Math.ceil(audio!.duration)));
    };
    audio.ontimeupdate = () => {
      dispatch(setCurrentTime(Math.ceil(audio!.currentTime)));
    };
  };

  const handlePlay = () => {
    if (!audio) return;
    if (pause) {
      dispatch(setPlay());
    } else {
      dispatch(setPause());
    }
  };
  const handleChangeVolume = (e: BaseSyntheticEvent) => {
    audio!.volume = e.target.value / 100;
    dispatch(setVolume(+e.target.value));
  };
  const handleChangeCurrentTime = (e: BaseSyntheticEvent) => {
    audio!.currentTime = e.target.value;
    dispatch(setCurrentTime(+e.target.value));
  };
  if (!active) return null;
  return (
    <StyledPlayerContainer>
      <IconButton onClick={handlePlay}>
        {!pause ? <PauseIcon /> : <PlayIcon />}
      </IconButton>
      <Grid>
        <Typography>{active?.name}</Typography>
        <Typography fontSize={12} color={'gray'}>
          {active?.artist}
        </Typography>
      </Grid>
      <TrackProgress
        timeFormat={true}
        left={currentTime}
        right={duration}
        onChange={handleChangeCurrentTime}
      />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={volume} right={100} onChange={handleChangeVolume} />
    </StyledPlayerContainer>
  );
};
