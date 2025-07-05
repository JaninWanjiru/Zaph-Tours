import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  Email,
  Phone,
  LocationPin,
} from "@mui/icons-material";

function ContactSection() {
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
        sx={{ mt: 8, mb: 3 }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={4} justifyContent="space-evenly">
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card elevation={3}>
            <CardContent>
              <Typography
                variant="h6"
                align="center"
                color="primary"
                fontWeight="bold"
                gutterBottom
              >
                Send us a message
              </Typography>
              <Stack spacing={2}>
                <TextField label="Full Name" fullWidth />
                <TextField label="Email Address" type="email" fullWidth />
                <TextField label="Subject" fullWidth />
                <TextField label="Message" multiline rows={4} fullWidth />
                <Button variant="contained" color="primary">
                  Submit
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card elevation={3}>
            <CardContent>
              <Typography
                variant="h6"
                color="primary"
                fontWeight="bold"
                gutterBottom
              >
                Get in touch
              </Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1}>
                  <Email color="primary" />
                  <Typography>enquiries@zaphtours.com</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Phone color="primary" />
                  <Typography>+254 712 345678</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <LocationPin color="primary" />
                  <Typography>Nairobi, Kenya</Typography>
                </Stack>

                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    color="primary"
                  >
                    Office Hours
                  </Typography>
                  <Typography>Monday - Friday: 9:00am - 5:00pm</Typography>
                  <Typography>Saturday: 10:00am - 1:00pm</Typography>
                  <Typography>Sunday: Closed</Typography>
                </Box>

                <Box>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    fontWeight="bold"
                    sx={{ mt: 2 }}
                  >
                    Follow Us
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <IconButton
                      href="https://facebook.com"
                      target="_blank"
                      color="primary"
                    >
                      <Facebook />
                    </IconButton>
                    <IconButton
                      href="https://twitter.com"
                      target="_blank"
                      color="primary"
                    >
                      <Twitter />
                    </IconButton>
                    <IconButton
                      href="https://instagram.com"
                      target="_blank"
                      color="primary"
                    >
                      <Instagram />
                    </IconButton>
                  </Stack>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h6" color="primary" fontWeight="bold" gutterBottom>
          Find Us Here
        </Typography>
        <Box
          sx={{
            overflow: "hidden",
            height: "300px",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.36447613733!2d36.799728930576045!3d-1.2681246795166878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec8!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1751748672091!5m2!1sen!2ske"
            width="100%"
            height={600}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactSection;
