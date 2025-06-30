import { AppBar, Toolbar, Stack, Link, IconButton} from "@mui/material";

function Nav() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton sx={{ marginRight:'auto'}}>
          ZaphTours
        </IconButton>
        <Stack direction='row' spacing={3}> 
          <Link variant='body1' underline='none' href="#" sx={{ color: "pink" }}>
            Home
          </Link>
          <Link variant='body1' underline='none' href="#" sx={{ color: "pink" }}>
            Destinations
          </Link>
          <Link variant='body1' underline='none' href="#" sx={{ color: "pink" }}>
            Trips
          </Link>
          <Link variant='body1' underline='none' href="#" sx={{ color: "pink" }}>
            Blogs
          </Link>
          <Link variant='body1' underline='none' href="#" sx={{ color: "pink" }}>
            Contact
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;

