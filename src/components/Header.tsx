import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { Menu as MenuIcon } from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import InputBase from '@mui/material/InputBase';
import { ShoppingCart as ShoppingCartIcon } from '@material-ui/icons';
import {myTheme} from "../styles/myTheme";
import avatar from '../images/avatar.jpg';
import {Link} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: myTheme.light.background.primary,
    },
  },
});

const user = {
  fullName: 'Neshataieva Nadiia',
  avatar: avatar
}

const Search = styled('div')(({ theme }) => ({
  color: myTheme.dark.text.primary,
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

//const pages = ['Home', 'Products', 'About', 'Contact'];
const pages = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Products',
    href: '/products'
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Contact',
    href: '/contact'
  }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky">
        <Box sx={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'space-between',
              backgroundColor: myTheme.dark.background.primary,
              }}
        >
          <Container maxWidth="xl"
                     sx={{
                       display: 'flex',
                       flexFlow: 'row nowrap',
                       p: 2
                      }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontWeight: '300',
                color: myTheme.common.accent,
                display: {
                  xs: 'none',
                  sm: 'flex'
                },
                alignItems: 'center',
                flexGrow: 1
              }}
            >
              SNOWBOARDING
            </Typography>
            <Box sx={{
              flexGrow: {
                xs: 1,
                sm: 0,
              },
              display: 'flex' }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.fullName} src={user.avatar} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Container>
        </Box>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{
            display: 'flex',
            flexFlow: 'row nowrap',
          }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.title}>
                    <Link
                      href={page.href}
                      textAlign="center"
                      sx={{
                        textDecoration: 'none',
                        color: myTheme.light.text.primary
                    }}
                    >
                      {page.title}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Divider orientation="vertical" flexItem />
              {pages.map((page) => {
                return (
                  <Box sx={{ display: 'flex' }} key={page.title}>
                    <Link
                      href={page.href}
                      sx={{color: myTheme.light.text.primary, display: 'block', p:1 }}
                    >
                      {page.title}
                    </Link>
                    <Divider orientation="vertical" flexItem />
                  </Box>
                )
              })}
            </Box>
            <Box sx={{ flexGrow: 0, display: 'flex'}}>
              <Divider orientation="vertical" flexItem />
              <IconButton size="large" aria-label="show 4 new mails" color="inherit"
                          sx={{ p:1 }}>
                <Badge badgeContent={4} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <Divider orientation="vertical" flexItem sx={{ml:1}}/>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Header;
