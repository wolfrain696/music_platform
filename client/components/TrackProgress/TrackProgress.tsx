import { BaseSyntheticEvent, FC, useMemo } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { getTime } from '../../utils/getTime';

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e: BaseSyntheticEvent) => void;
  timeFormat?: boolean;
}

export const TrackProgress: FC<TrackProgressProps> = ({
  left,
  right,
  onChange,
  timeFormat,
}) => {
  return (
    <Box display={'flex'}>
      <input
        type={'range'}
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <Typography variant={'subtitle1'}>
        {timeFormat ? getTime(left) : left} {' / '}
        {timeFormat ? getTime(right) : right}
      </Typography>
    </Box>
  );
};
