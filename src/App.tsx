import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DestinationsPage from "./pages/DestinationsPage";
import TripTypesPage from "./pages/TripTypesPage";
import ContactPage from "./pages/ContactPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a05a3c",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f9a825",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: '"Merienda", cursive',
    h3: {
      fontSize: "3.5rem",
    },
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/tripTypes" element={<TripTypesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
