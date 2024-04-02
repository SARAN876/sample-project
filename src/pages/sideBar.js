import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { List, ListItemButton, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Icon } from '@iconify-icon/react';

const drawerWidth = 220;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    background: '#000044',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: 'border-box',
  },
  '@media (max-width: 600px)': {
    '& .MuiDrawer-paper': {
      width: '50px',
    },
  },
}));

const mdTheme = createTheme({
  palette: {
    primary: {
      light: '#9ffcc980',
      main: '#1dce6e',
      dark: '#1dce6e',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#006097',
      main: '#FF8000',
      dark: '#006097',
      contrastText: '#272727'
    },
    background: {
      paper: '#FFFFFF',
      default: '#FFFFFF'
    }
  }
});

function Sidebar() {
  const location = useLocation();

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <Drawer variant="permanent" width={'220'}>
          <List>
            <ListItemButton>
              <ListItemIcon>
              <Icon icon="lets-icons:setting-alt-line-light" width="2em" height="2em"  style={{color: 'white'}} />              </ListItemIcon>
              <ListItemText primary="Dashboard" primaryTypographyProps={{ color: 'white',fontSize:'20px' }} />
            </ListItemButton>
        
            <ListItemButton
              to="/dashboard"
              component={Link}
              role="button"
              selected={location.pathname === '/dashboard'}
            >
              <ListItemIcon>
              <Icon icon="solar:key-square-outline" width="1.2em" height="1.2em"  style={{color: 'white'}} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" primaryTypographyProps={{ color: 'white' }} />
              <ArrowForwardIosIcon style={{ color: 'white' }}  fontSize='small'/>
            </ListItemButton>
            <ListItemButton to="/product" component={Link} role="button" selected={location.pathname === '/product'}>
              <ListItemIcon>
              <Icon icon="icon-park-outline:benz" width="1.2em" height="1.2em"  style={{color: 'white'}} />
              </ListItemIcon>
              <ListItemText primary="Product" primaryTypographyProps={{ color: 'white' }} />
              <ArrowForwardIosIcon style={{ color: 'white' }} fontSize='small' />
            </ListItemButton>
            <ListItemButton to="/customers" component={Link} role="button" selected={location.pathname === '/customers'}>
              <ListItemIcon>
              <Icon icon="lets-icons:user-box" width="1.2em" height="1.2em"  style={{color: 'white'}} />              
              </ListItemIcon>
              <ListItemText primary="Customers" primaryTypographyProps={{ color: 'white' }} />
              <ArrowForwardIosIcon style={{ color: 'white' }} fontSize='small' /> 
            </ListItemButton>
            <ListItemButton to="/income" component={Link} role="button" selected={location.pathname === '/income'}>
              <ListItemIcon>
              <Icon icon="fluent:book-coins-24-regular" width="1.2em" height="1.2em"  style={{color: 'white'}} />              
              </ListItemIcon>
              <ListItemText primary="Income" primaryTypographyProps={{ color: 'white' }} />
              <ArrowForwardIosIcon style={{ color: 'white' }}  fontSize='small'/> 
            </ListItemButton>
            <ListItemButton to="/promote" component={Link} role="button" selected={location.pathname === '/promote'}>
              <ListItemIcon>
              <Icon icon="iconamoon:discount-light" width="1.2em" height="1.2em"  style={{color: 'white'}} />             
              </ListItemIcon>
              <ListItemText primary="Promote" primaryTypographyProps={{ color: 'white' }} />
              <ArrowForwardIosIcon style={{ color: 'white' }}  fontSize='small'/> 
            </ListItemButton>
            <ListItemButton to="/help" component={Link} role="button" selected={location.pathname === '/help'}>
              <ListItemIcon>
              <Icon icon="mdi:chat-help-outline" width="1.2em" height="1.2em"  style={{color: 'white'}} />              </ListItemIcon>
              <ListItemText primary="Help" primaryTypographyProps={{ color: 'white' }} />
              <ArrowForwardIosIcon style={{ color: 'white' }}  fontSize='small'/> 
            </ListItemButton>
          </List>
          <Divider />
          <List sx={{ marginTop: 'auto', marginBottom: '15px', paddingLeft: 'auto' }}>
            <ListItemButton>
              <ListItemIcon>
                <Avatar >
                  <AccountCircleIcon  />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="John Doe" primaryTypographyProps={{ color: 'white' }} secondary="Project Manager" secondaryTypographyProps={{ color: 'white' }} />
              <ExpandMoreIcon style={{ color: 'white' }}  fontSize='small'/>
            </ListItemButton>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Sidebar;
