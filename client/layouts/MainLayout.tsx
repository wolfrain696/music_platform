import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import styled from '@emotion/styled';
import { Container } from '@mui/material';
import { Player } from '../components/Player/Player';

interface Props {
  children: React.ReactNode;
}

const StyledContentContainer = styled(Container)`
  margin: 72px 0 68px 68px;
`;

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <StyledContentContainer>{children}</StyledContentContainer>
      <Player />
    </>
  );
};

export default MainLayout;
