import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Rating,
} from "@mui/material";

const testimonials = [
  {
    name: "Julius N.",
    quote:
      "Zaph Tours gave me a life-changing safari experience. Everything was so smooth and well organized",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 5,
  },
  {
    name: "Margret N.",
    quote:
      "The guides were friendly and professional. I saw more wildlife than I ever imagined. Highly recommended",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
  },
  {
    name: "Kelly M.",
    quote:
      "Our family trip to Coastal Kenya was unforgettable. The beach resorts and cultural tours were amazing",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    rating: 5,
  },
];

function TestimonialsSection() {
  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, backgroundColor: "#f9f9f9" }}>
      <Typography
        variant="h4"
        color="primary"
        textAlign="center"
        fontWeight="bold"
        padding="2rem"
      >
        Our Travelers Remarks
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
            <Card sx={{ borderRadius: 3, height: "250px" }}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar src={testimonial.avatar} alt={testimonial.name} />
                  <Typography variant="subtitle1" fontWeight="bold">
                    {testimonial.name}
                  </Typography>
                </Stack>
                <Typography variant="body1" color="text.secondary">“{testimonial.quote}”</Typography>
              </CardContent>
              <Rating
                value={testimonial.rating}
                readOnly
                sx={{ color: "secondary.main", padding: "0 1rem" }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TestimonialsSection;
