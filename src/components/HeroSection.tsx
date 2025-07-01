import { Box, Typography, Button } from "@mui/material";

function HeroSection() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(/hero2.jpg)`,
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
      <Button variant="contained" color="secondary" sx={{ mt: 3 ,
    borderRadius: '1rem'}}>
        Start your adventure
      </Button>
    </Box>
  );
}

export default HeroSection;
