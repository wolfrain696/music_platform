import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import styled from '@emotion/styled';
import AudioTrackIcon from '@mui/icons-material/Audiotrack';
import HomeIcon from '@mui/icons-material/Home';
import AlbumIcon from '@mui/icons-material/Album';
import Link from 'next/link';

export const StyledSideBar = styled(Drawer)`
  & .MuiDrawer-paper {
    width: ${({ open }) => (open ? 156 : 64)}px;
    overflow: hidden;
    position: fixed;
    z-index: 0;
    left: 0;
    transition: 0.3s all ease;
  }
`;

const navRouters = [
  { label: 'Main', path: '/', icon: <HomeIcon /> },
  { label: 'Tracks', path: '/tracks', icon: <AudioTrackIcon /> },
  { label: 'Albums', path: '/albums', icon: <AlbumIcon /> },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawerOpen} edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <StyledSideBar open={open} variant="permanent">
        <Toolbar />
        <Box>
          <List>
            {navRouters.map(({ path, icon, label }) => (
              <Link key={path} href={path}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={label} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </StyledSideBar>
    </Box>
  );
}
