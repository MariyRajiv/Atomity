import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Providers } from "./providers";
import { Home } from "../pages/Home";
import { Solutions } from "../pages/Solutions";
import { Pricing } from "../pages/Pricing";
import { ScrollToTop } from "../components/ui/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Providers>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Providers>
    </Router>
  );
}
