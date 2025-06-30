import { Box, Typography, Button } from "@mui/material";

function HeroSection() {
  return (
    <Box
      sx={{
        height: "90vh",
        backgroundImage: 'url(/hero2.jpg)',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        p: 2,
      }}
    >
      <Typography variant="h3" fontWeight="bold" mb={2}>
        Best Safaris and Adventures
      </Typography>
      <Typography variant="h6" >
        Explore the World with Us
      </Typography>
      <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
        View Destinations
      </Button>
    </Box>
  );
}

export default HeroSection;
