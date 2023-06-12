import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
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
import { Avatar, Divider, Link} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

// path, pageName, no need Auth
const pages = [["/catalog", "Каталог", true],
              ["/learn", "Мое обучение", false],
              ["/study", "Преподавание", false]
              ]
const currentPage = window.location.pathname;

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

export default function MyAppBar( {isAuth, userName, userAvatar, notification }) {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link href="/profile" color="inherit">Профиль</Link>
      </MenuItem>
      {
        {notification} ? 
        <MenuItem onClick={handleMenuClose}>
          <Link href="/notification" color="inherit">Уведомления ({notification})</Link>
          </MenuItem>
        :
        <MenuItem onClick={handleMenuClose}>
          <Link href="/notification" color="inherit">Уведомления</Link>
        </MenuItem>
      }
      
      <Divider/>
      <MenuItem onClick={handleMenuClose}>
        <Link href="/" color="inherit">Выйти</Link>
      </MenuItem>
    </Menu>
  );

  const menuAppBarPages = isAuth ? pages 
        :   pages.filter(item => isAuth ? true : item[2]);
  const menuAppBar = menuAppBarPages.map(function(item, i) {
    const variant = item[0].includes(currentPage) && currentPage.length > 1 ? "h6" : "p";
    return  (  
       <Box key={item[1]}>
        <Typography
          variant={variant}
          color="inherit"
          noWrap
          component="a"
          href={item[0]}
          sx={{
            mr: 1,
            color: 'inherit',
            pl: 0.5,
            pr: 0.5,
            textDecoration: 'none',
            display: { xs: 'none', md: 'block' }
          }}
        >{item[1]}</Typography>
       </Box>
    )
  });
  
  const menuNavBarPages = menuAppBarPages.map((item) => (
      <MenuItem key={item[0]} onClick={handleCloseNavMenu}>
        <Typography textAlign="center"
          component="a"
          href={item[0]}
          sx={{color: 'inherit', textDecoration: 'none'}}
        >{item[1]}</Typography>
      </MenuItem>
    ))
 
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Box>
          <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
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
      </AppBar>
      {renderMenu}
    </Box>
  );
}
