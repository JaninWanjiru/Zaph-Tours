import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DestinationsPage from "./pages/DestinationsPage";
import TripTypesPage from "./pages/TripTypesPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Nav from "./components/Nav";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#235339",
      contrastText: "#fff",
    },
    secondary: {
      main: "#97B067",
      contrastText: "#fff",
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
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <footer>
          Made with &hearts; by{" "}
          <a href="https://github.com/JaninWanjiru">Jane Ndung'u</a>
        </footer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
