import {
  AppBar,
  Toolbar,
  Stack,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../App.css";

function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton
          size="large"
          sx={{
            marginRight: "auto",
            color: "inherit",
            fontFamily: '"Merienda", cursive',
          }}
        >
          ZaphTours
        </IconButton>

        {/* desktop navigation */}
        <Stack
          direction="row"
          spacing={3}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link link" : "link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/destinations"
            className={({ isActive }) =>
              isActive ? "active-link link" : "link"
            }
          >
            Destinations
          </NavLink>
          <NavLink
            to="/tripTypes"
            className={({ isActive }) =>
              isActive ? "active-link link" : "link"
            }
          >
            Trips
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active-link link" : "link"
            }
          >
            Contact
          </NavLink>
        </Stack>

        {/* mobile navigation*/}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Box sx={{ p: 2 }}>
              <List>
                <ListItem>
                  <NavLink
                    to="/"
                    style={{ color: "#a05a3c" }}
                    className={({ isActive }) =>
                      isActive ? "active-link link" : "link"
                    }
                  >
                    Home
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink
                    to="/destinations"
                    style={{ color: "#a05a3c" }}
                    className={({ isActive }) =>
                      isActive ? "active-link link" : "link"
                    }
                  >
                    Destinations
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink
                    to="/tripTypes"
                    style={{ color: "#a05a3c" }}
                    className={({ isActive }) =>
                      isActive ? "active-link link" : "link"
                    }
                  >
                    Trips
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink
                    to="/contact"
                    style={{ color: "#a05a3c" }}
                    className={({ isActive }) =>
                      isActive ? "active-link link" : "link"
                    }
                  >
                    Contact
                  </NavLink>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
