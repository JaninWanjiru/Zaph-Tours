import { Box, Grid, Typography } from "@mui/material";

function AboutSection() {
  return (
    <Box sx={{ padding: { xs: 4, md: 8 } }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="primary"
        textAlign="center"
        sx={{ mb: 4 }}
      >
        About Zaph Tours
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body1">
            Zaph Tours is a premier travel company based in Kenya that offers
            unforgettable safaris and adventure tours. Our mission is to help
            travelers explore the stunning landscapes, rich wildlife, and
            vibrant cultures of Kenya and beyond.
            <br />
            Whether you're looking for a thrilling wildlife safari, a peaceful
            beach retreat, or a deep dive into local culture, Zaph Tours has
            something for everyone. We are passionate about delivering
            personalized, high-quality travel experiences that create lasting
            memories.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="/about.jpg"
            alt="Zaph Tours"
            sx={{
              width: "100%",
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutSection;
