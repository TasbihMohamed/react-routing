import * as React from "react";

import {
  Stack,
  Typography,
  IconButton,
  AppBar,
  Box,
  Toolbar,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";

const pages = ["about", "portfolio", "contact"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (index) => {
    // setIsClicked(index);
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#2c3e50" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters
          sx={{
            // ".MuiBox-root": {
            //   justifyContent: "flex-end",
            // },
            ".MuiBox-root.css-1t6c9ts": {
              justifyContent: "flex-end",
            },
          }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to={""} style={{ color: "white", textDecoration: "none" }}>
              START FRAMEWORK
            </Link>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "flex", md: "none" },

            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ mx: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },

                ".MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.MuiMenu-paper.MuiMenu-paper.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":
                {
                  width: "100%",
                  m: 0,
                  left: "0px !important",
                  backgroundColor: "#2c3e50",
                  boxShadow: "0px 0px 0px !important",
                  maxWidth: '100%'
                },
              }}
            >
              {/* small screen */}
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button
                    key={page}
                    onClick={() => handleCloseNavMenu(index)}
                    sx={{
                      my: 2,
                      display: "block",
                 
                    }}
                  >
                    <NavLink
                      to={page}

                      className={({ isActive, isPending }) =>
                        isActive ? "active" : ""
                      }
                      style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          color: "white",
                          textDecoration: "none",
                          fontWeight: 'bold',
                          fontSize: 20,
                          padding: 10,

                          backgroundColor: isActive ? "#1abc9c" : "transparent",
                          borderRadius: 5

                        };
                      }}
                    >
                      {page}
                    </NavLink>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Stack> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 'bold', fontSize: 30,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              order: 1
            }}
          >
            <Link to={""} style={{ color: "white", textDecoration: "none" }}>
              START FRAMEWORK
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(index)}
                sx={{
                  my: 2,
                  display: "block",
              
                }}
              >

                <NavLink
                  to={page}

                  className={({ isActive, isPending }) =>
                    isActive ? "active" : ""
                  }
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      color: "white",
                      textDecoration: "none",
                      fontWeight: 'bold',
                      fontSize: 20,
                      padding: 10,

                      backgroundColor: isActive ? "#1abc9c" : "transparent",
                      borderRadius: 5

                    };
                  }}
                >
                  {page}
                </NavLink>
                {/* <Link
                  to={page}
                  style={{
                    color: "white",
                    textDecoration: "none", fontWeight: 'bold', fontSize: 20
                  }}
                >
                  {page}
                </Link> */}
              </Button>
            ))}
          </Box>
          {/* </Stack> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
