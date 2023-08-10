import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {Button, AppBar as MuiAppBar} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Divider} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

// path, pageName, no need Auth
const pages = [["/catalog", "Каталог", true],
              ["/learn", "Мое обучение", false],
              ["/study", "Преподавание", false]
              ]

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function AppBar( {isAuth, userName, userAvatar, notification }) {
  
  let currentPage = window.location.pathname;
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (href=null) => {
    setAnchorElNav(null);
    if (href) 
    {navigate(href);
    }
  };


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (href=null) => {
    setAnchorEl(null);
    if (href) 
      {navigate(href);
      }
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose.bind(this, null)}
    >
      <MenuItem onClick={handleMenuClose.bind(this, "/profile")}>Профиль
      </MenuItem>
      {
        {notification} ? 
        <MenuItem onClick={handleMenuClose.bind(this, "/notification")}>Уведомления ({notification})
        </MenuItem>
        :
        <MenuItem onClick={handleMenuClose.bind(this, "/notification")}>Уведомления
        </MenuItem>
      }
      <Divider/>
      <MenuItem onClick={handleMenuClose.bind(this, "/")}>Выйти
      </MenuItem>
    </Menu>
  );

  const menuAppBarPages = isAuth ? pages 
        :   pages.filter(item => isAuth ? true : item[2]);
  
  const menuAppBar = menuAppBarPages.map(function(item, i) {
    const fontWeight = item[0].includes(currentPage) && currentPage.length > 1 ? 700 : 500;
    return  (  
       <Button key={item[0]}
          color="inherit"
          onClick={navigate.bind(this, item[0])}
          sx={{
            mr: 1,
            color: 'inherit',
            pl: 0.5,
            pr: 0.5,
            fontWeight: fontWeight,
            display: { xs: 'none', md: 'block' }
          }}
       >{item[1]}
      </Button>
    )
  });

  const menuNavBarPages = menuAppBarPages.map((item) => (
      <MenuItem key={item[0]} onClick={handleCloseNavMenu.bind(this, item[0])}>
        <Typography textAlign="center"
        >{item[1]}</Typography>
      </MenuItem>
    ))
 
  console.log("currentPage " + currentPage);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar>
        <Box>
          <Typography
              variant="h5"
              noWrap
              onClick={navigate.bind(this, "/")}
              sx={{
                mr: 1,
                color: 'inherit',
                border: 3,
                borderRadius: 2,
                pl: 0.5,
                pr: 0.5,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >ABC</Typography>
          </Box>
         {menuAppBar}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="acopen menu"
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
            {menuNavBarPages}
            </Menu>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            {isAuth 
            ?        
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Badge badgeContent={notification} color="error">
                  <Avatar  alt={userName} src={userAvatar} sx={{ width: 24, height: 24 }}/>
                </Badge>
              </IconButton>
            :            
            <IconButton
              size="large"
              aria-label="Войти"
              color="inherit"
              aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
            >
                <LoginIcon />
            </IconButton> 
          }
          </Box>
        </Toolbar>
      </MuiAppBar>
      {renderMenu}
    </Box>
  );
}
