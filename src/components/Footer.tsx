import { Box, Grid, Typography, Stack } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#5E2F1C", color: "#DFD0B8", p: 3 }}>
      <Grid
        container
        justifyContent="space-evenly"
        sx={{ textAlign: "center" }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 0.5 }}>
            Email
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Email fontSize="small" />
            <Typography variant="body2"> enquiries@zaphtours.com</Typography>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold", my: 0.8 }}>
            Phone
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Phone fontSize="small" />
            <Typography variant="body2">+254 712 345678</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Box textAlign="center" mt={3}>
        <Typography variant="body2">
          &copy; 2025 Zaph Tours. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Made with &hearts; by{" "}
          <a
            href="https://github.com/JaninWanjiru"
            style={{ textDecoration: "none", color: "#f9a825" }}
          >
            Jane Ndung'u
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
