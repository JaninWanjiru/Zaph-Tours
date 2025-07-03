import { AppBar, Toolbar, Stack, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton size="large" sx={{ marginRight: "auto", color: "inherit" }}>
          ZaphTours
        </IconButton>
        <Stack direction="row" spacing={3}>
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
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
