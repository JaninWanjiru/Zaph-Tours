// Footer.tsx
import {
  Box,
  Grid,
  Typography,
  Stack,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  Email,
  Phone,
} from "@mui/icons-material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#3d5236", color: "#fff", p: 2, mt: 2 }}
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography variant="h6" fontWeight="bold">
            Zaph Tours
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Best Safaris and Adventures in Kenya.
          </Typography>
          <Typography variant="body2">Nairobi, Kenya</Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography variant="h6" fontWeight="bold">
            Quick Links
          </Typography>
          <Stack spacing={1} sx={{ mt: 1 }}>
            <Link href="/" color="inherit" underline="hover">
              Home
            </Link>
            <Link href="/destinations" color="inherit" underline="hover">
              Destinations
            </Link>
            <Link href="/trips" color="inherit" underline="hover">
              Trips
            </Link>
            <Link href="/contact" color="inherit" underline="hover">
              Contact
            </Link>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography variant="h6" fontWeight="bold">
            Contact
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" mt={1}>
            <Email fontSize="small" />
            <Typography variant="body2" sx={{ pb: 1 }}>
              zaph.tours@gmail.com
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Phone fontSize="small" />
            <Typography variant="body2">+254 712 345678</Typography>
          </Stack>

          <Stack direction="row" spacing={1} mt={2}>
            <IconButton
              href="https://github.com/JaninWanjiru"
              sx={{ color: "#fff" }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://github.com/JaninWanjiru"
              sx={{ color: "#fff" }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://github.com/JaninWanjiru"
              sx={{ color: "#fff" }}
            >
              <Twitter />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>

      <Box textAlign="center" mt={4} pt={2}>
        <Divider sx={{ border: "1px solid #F2EED7", mb: 1 }}></Divider>
        <Typography variant="body2">
          &copy; 2025 Zaph Tours. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
