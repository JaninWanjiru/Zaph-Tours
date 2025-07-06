import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const tripTypes = [
  {
    title: "Honeymoon",
    images: "/honeymoon.jpg",
    description:
      "Perfect romantic getaways for newlyweds. Enjoy candlelit dinners, luxury lodges, and private safari drives tailored for couples",
    pricing: "Ksh. 85,000 per couple (includes 3 nights)",
  },
  {
    title: "Family",
    images: "/family.jpg",
    description:
      "Fun and engaging safaris for all ages. Includes guided tours, family-friendly accommodation, and activities for kids",
    pricing: "Ksh. 120,000 for a family of 4",
  },
  {
    title: "Adventure",
    images: "/adventure.jpg",
    description:
      "Thrilling experiences for adrenaline seekers includes mountain climbing, white-water rafting, and deep jungle trekking",
    pricing: "Ksh. 65,000 per person (includes gear & meals)",
  },
  {
    title: "Cultural Tours",
    images: "/cultural tours.jpg",
    description:
      "Discover the rich traditions and heritage of Kenya. Visit local communities, experience tribal dances, food, and stories",
    pricing: "Ksh. 40,000 per person (includes transport & guides)",
  },
  {
    title: "Wildlife Safaris",
    images: "/wildlife safaris.jpg",
    description:
      "Spot the Big Five in their natural habitat with expert guides. Morning and evening game drives included",
    pricing: "Ksh. 55,000 per person (4-day safari)",
  },
  {
    title: "Eco-Tours",
    images: "/eco-tours.jpg",
    description:
      "Travel responsibly and explore nature with minimal impact. Support conservation and local communities",
    pricing: "Ksh. 38,000 per person (eco-certified lodges)",
  },
  {
    title: "Luxury Vacations",
    images: "/luxury vacations.jpg",
    description:
      "Top-tier lodges, private chefs, and first-class travel across Kenya's best locations. The ultimate comfort and service",
    pricing: "Ksh. 200,000+ per person (customizable)",
  },
  {
    title: "Beach Holidays",
    images: "/beach holidays.jpg",
    description:
      "Relax on white sandy beaches along Kenya's coast. Enjoy water sports, seafood, and palm-lined resorts",
    pricing: "Ksh. 60,000 per person (3 nights, half board)",
  },
  {
    title: "Wellness Retreats",
    images: "/wellness retreats.jpeg",
    description:
      "Unwind with yoga, spa treatments, and wellness coaches in peaceful nature escapes",
    pricing: "Ksh. 70,000 per person (includes meals & therapy sessions)",
  },
  {
    title: "Culinary Tours",
    images: "/culinary tours.jpg",
    description:
      "Taste authentic Kenyan cuisine through food trails, cooking classes, and market visits",
    pricing: "Ksh. 45,000 per person (includes food + chef sessions)",
  },
];

function TripsSection() {
  return (
    <Box
      component="section"
      sx={{ padding: { xs: 2, md: 4 }, bgcolor: "#f5f5f5" }}
    >
      <Typography
        variant="h4"
        align="center"
        color="primary"
        fontWeight="bold"
        sx={{ mt: 6, mb: 1.3 }}
      >
        Our Trip Packages
      </Typography>

      <Grid container spacing={4}>
        {tripTypes.map((trip, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={trip.images}
                alt={trip.title}
                sx={{
                  transition: "transform 0.4s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
              <CardContent>
                <Typography variant="h6" color="primary">
                  {trip.title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, mb: 1 }}>
                  {trip.description}
                </Typography>
                <Typography variant="subtitle2" color="secondary">
                  {trip.pricing}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TripsSection;
