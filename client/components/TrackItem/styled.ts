import styled from '@emotion/styled';
import { Card, CardMedia, Grid } from '@mui/material';

export const StyleCardImage = styled(CardMedia)`
  width: 70px;
  height: 70px;
  border-radius: 8px;
`;

export const StyledTrackCard = styled(Card)`
  margin: 16px;
  padding: 8px;
  display: flex;
  align-items: center;
`;

export const StyledTrackContentWrapper = styled(Grid)`
  width: 200px;
  margin: 0 20px;
`;
