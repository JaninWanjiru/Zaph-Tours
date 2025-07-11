import { Box, Typography, TextField, Button, Stack } from "@mui/material";

function Newsletter() {
  return (
    <Box
      sx={{
        backgroundColor: "#DFD0B8",
        color: "primary.main",
        p: 4,
        ml: "auto",
        mr: "auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Stay Connected
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Subscribe for weekly updates on safaris and adventures.
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        maxWidth="600px"
        ml="auto"
        mr="auto"
      >
        <TextField
          label="Enter your email"
          variant="filled"
          size="small"
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            input: { color: "black" },
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          sx={{ p: 1.5 }}
        >
          Subscribe
        </Button>
      </Stack>
    </Box>
  );
}

export default Newsletter;
