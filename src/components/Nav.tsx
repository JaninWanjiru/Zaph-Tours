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
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton size="large" sx={{ marginRight: "auto", color: "inherit" }}>
          ZaphTours
        </IconButton>
        <Stack
          direction="row"
          spacing={3}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/destinations"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Destinations
          </Link>
          <Link
            to="/tripTypes"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Trips
          </Link>
          <Link
            to="/contact"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Contact
          </Link>
        </Stack>
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
            <Box
              sx={{
                p: 2,
              }}
            >
              <List>
                <ListItem>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#a05a3c",
                      fontWeight: "bold",
                    }}
                    to="/"
                  >
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#a05a3c",
                      fontWeight: "bold",
                    }}
                    to="/destinations"
                  >
                    Destinations
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#a05a3c",
                      fontWeight: "bold",
                    }}
                    to="/tripTypes"
                  >
                    Trips
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#a05a3c",
                      fontWeight: "bold",
                    }}
                    to="/contact"
                  >
                    Contact
                  </Link>
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
