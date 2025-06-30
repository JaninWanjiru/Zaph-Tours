import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DestinationsPage from "./pages/DestinationsPage";
import TripTypesPage from "./pages/TripTypesPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
