import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

function DestinationsSection() {
  return (
    <Box sx={{ padding: { xs: 4, md: 8 } }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="primary"
        textAlign="center"
        sx={{ mb: 4 }}
      >
        Our Destinations
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card sx={{ width: "300px" }}>
            <CardMedia component="img" height="200px" image="/Mt.Kenya.jpg" />
            <CardContent>
              <Typography variant="h6">Mt.Kenya</Typography>
              <Typography variant="body1">
                Experience the majesty of Kenya's highest peak.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained">
                Book Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DestinationsSection;
