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

const destinations = [
  {
    name: "Mt.Kenya",
    image: "/Mt.Kenya.jpg",
    description: "Experience the majesty of Kenya's highest peak",
    price: "Ksh.5500"
  },
  {
    name: "Mt.Ruwenzori",
    image: "/Mt.Rwenzori.jpg",
    description: "Explore the mystical Ruwenzori mountains",
    price: "Ksh.5650"
  },
  {
    name: "Lake Nakuru",
    image: "/Lake Nakuru.jpg",
    description: "Famous for flamingos and rhinos with scenic beauty",
    price: "Ksh.3400"
  },
  {
    name: "Tsavo National Park",
    image: "/Tsavo.jpeg",
    description: "Kenya's largest park with a variety of landscapes and abundant wildlife",
    price: "Ksh.4550"
  },
  {
    name: "Nairobi National Park",
    image: "/Nairobi park.jpg",
    description: "A unique park to spot wildlife in the background",
    price: "Ksh.4300"
  },
  {
    name: "Coastal Kenya",
    image: "/coastal.jpg",
    description: "Relax along Kenya's coastline with pristine beaches and Swahili culture.",
    price: "Ksh.5700"
  },
];

function DestinationsSection() {
  return (
    <Box component="section" sx={{ bgcolor:'#F8F8F8', padding: { xs: 2, md: 4 } }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="primary"
        textAlign="center"
        sx={{ mb: 2 }}
      >
        Featured Destinations
      </Typography>
      <Grid container spacing={3}>
        {destinations.map((destination, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
          <Card sx={{ width: "300px" }}>
            <CardMedia component="img" height="200px" image={destination.image} />
            <CardContent >
              <Typography variant="h6">{destination.name}</Typography>
              <Typography variant="body1">
                {destination.description}
              </Typography>
              <Typography variant="subtitle2" color="primary">
                  {destination.price}
                </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" href="/destinations" sx={{borderRadius: '1rem'}}>
                Explore Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DestinationsSection;
