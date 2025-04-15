
import {
  Stack,
  Link,
  Toolbar,
  Container,
  AppBar,
} from "@mui/material";
import Logo from './Logo';
import '@fontsource/karla'
import { NavLink } from 'react-router-dom';

const Header = () => {

  return(
    <AppBar color="white">
      <Container>
        <Toolbar>
          <Stack
            sx={{direction:{xs:"column",sm:"column",md:"row",lg:"row",xl:"row"}}}
            justifyContent="space-around"
            alignItems="center"
            width="100%"
          >
            <Logo></Logo>
            <Stack sx={{direction:{xs:"column",sm:"column",md:"row",lg:"row",xl:"row"}}} gap={3}>
            <Link sx={{color: "black", fontFamily: 'Karla, sans-serif'}} underline='none' >
              <NavLink to='/'>HOME</NavLink>
            </Link>
            <Link sx={{color: "black", fontFamily: 'Karla, sans-serif'}} underline='none'>
              <NavLink to='/About'>ABOUT</NavLink>
            </Link>
            <Link sx={{color: "black", fontFamily: 'Karla, sans-serif'}} underline='none'>
              <NavLink to='/Menu'>MENU</NavLink>
            </Link>
            <Link sx={{color: "black", fontFamily: 'Karla, sans-serif'}} underline='none'>
              <NavLink to='/Reservation'>RESERVATION</NavLink>
            </Link>
            <Link sx={{color: "black", fontFamily: 'Karla, sans-serif'}} underline='none'>
              <NavLink to='/OrderOnline'>ORDER ONLINE</NavLink>
            </Link>
            <Link sx={{color: "black", fontFamily: 'Karla, sans-serif'}} underline='none'>
              <NavLink to='/Login'>LOGIN</NavLink>
            </Link>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;