import { Paper } from '@mui/material';
import { FC } from 'react';
import styled from '@emotion/styled';

interface TrackImageProps {
  src: string;
  width?: number;
  height?: number;
}

export const StyledImage = styled.img`
  display: block;
  width: 100%;
`;

export const StyledImageContainer = styled(Paper)`
  border-radius: 8px;
  overflow: hidden;
`;

export const TrackImage: FC<TrackImageProps> = ({
  src,
  width = 150,
  height = 200,
}) => {
  return (
    <StyledImageContainer sx={{ width: width, height: height }}>
      <StyledImage src={src} />
    </StyledImageContainer>
  );
};
