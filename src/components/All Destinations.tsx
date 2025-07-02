import {     
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Paper,
  Button
} from "@mui/material";
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Mt. Kenya",
    image: "/Mt.Kenya.jpg",
    description:
      "Experience the majesty of Kenya's highest peak with scenic hiking trails and wildlife.",
    groupPrice: "Ksh.5,500",
    individualPrice: "Ksh.1,500",
    link: "#",
  },
  {
    name: "Mt. Ruwenzori",
    image: "/Mt.Rwenzori.jpg",
    description:
      "Explore the mystical Ruwenzori Mountains with snow-capped peaks and lush rainforests.",
    groupPrice: "Ksh.5,650",
    individualPrice: "Ksh.1,650",
    link: "#",
  },
  {
    name: "Lake Nakuru",
    image: "/Lake Nakuru.jpg",
    description:
      "Famous for flamingos and rhinos with overwhelming scenic beauty",
    groupPrice: "Ksh.3,400",
    individualPrice: "Ksh.1,800",
    link: "#",
  },
  {
    name: "Tsavo National Park",
    image: "/Tsavo.jpeg",
    description:
      "Kenya's largest park with a variety of landscapes and abundant wildlife",
    groupPrice: "Ksh.4,550",
    individualPrice: "Ksh.2,000",
    link: "#",
  },
  {
    name: "Nairobi National Park",
    image: "/Nairobi park.jpg",
    description:
      "A unique park located in a city, to spot wildlife in the background",
    groupPrice: "Ksh.4,300",
    individualPrice: "Ksh.1,650",
    link: "#",
  },
  {
    name: "Coastal Kenya",
    image: "/coastal.jpg",
    description:
      "Relax along Kenya's coastline with pristine beaches and Swahili culture.",
    groupPrice: "Ksh.5700",
    individualPrice: "Ksh.3,500",
    link: "#",
  },
];

function AllDestinations() {
  return (
    <Box component="section" sx={{ padding: { xs: 2, md: 4 }, bgcolor: "#f5f5f5"  }}>
      <Typography variant="h3" align="center" color="primary" gutterBottom sx={{ mt: 6 }}>
        Our Destinations
      </Typography>

      <Grid container spacing={4}>
        {destinations.map((destination, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
            <Card sx={{ width: "100%" }}>
              <CardMedia
                component="img"
                image={destination.image}
                alt={destination.name}
                height="200"
              />
              <CardContent>
                <Typography variant="h6" color="primary">
                  {destination.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {destination.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                <Paper sx={{ p: 1 }} elevation={5}>
                  <Typography variant="body2" color="primary">
                    Group Price: {destination.groupPrice}
                  </Typography>
                  <Typography variant="body2" color="primary">
                    Individual Price: {destination.individualPrice}
                  </Typography>
                </Paper>
                <Button
                  component={Link}
                  to={destination.link}
                  size="small"
                  color="secondary"
                  variant="contained"
                  sx={{ textTransform: "capitalize" }}
                >
                  View details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AllDestinations;
