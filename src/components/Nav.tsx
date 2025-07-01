import { AppBar, Toolbar, Stack, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton sx={{ marginRight: "auto", color: 'pink'}}>ZaphTours</IconButton>
        <Stack direction="row" spacing={3}>
          <Link to="/" style={{ color: "pink", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/destinations"
            style={{ color: "pink", textDecoration: "none" }}
          >
            Destinations
          </Link>
          <Link
            to="/tripTypes"
            style={{ color: "pink", textDecoration: "none" }}
          >
            Trips
          </Link>
          <Link to="/blog" style={{ color: "pink", textDecoration: "none" }}>
            Blogs
          </Link>
          <Link to="/contact" style={{ color: "pink", textDecoration: "none" }}>
            Contact
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
