import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import OwnerProperties from "./pages/owner/OwnerProperties";
import PostAd from "./pages/owner/PostAd";

const Home = lazy(() => import("./pages/landing/Home"));
const Landing = lazy(() => import("./pages/landing/landing"));
const PropertyCategories = lazy(() =>
  import("./pages/landing/PropertyCategories")
);
const Lands = lazy(() => import("./pages/Properties/Lands"));
const LandDetails = lazy(() => import("./pages/Properties/LandDetails"));
const Houses = lazy(() => import("./pages/Properties/Houses"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const Login = lazy(() => import("./pages/auth/Login"));
const ContactUs = lazy(() => import("./pages/landing/ContactUs"));
const AboutUs = lazy(() => import("./pages/landing/AboutUs"));
const OwnerDashboard = lazy(() => import("./pages/owner/OwnerDashboard"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/property-categories" element={<PropertyCategories />} />
          <Route path="/properties/lands" element={<Lands />} />
          <Route path="/properties/houses" element={<Houses />} />
          <Route
            path="/properties/lands/land-details"
            element={<LandDetails />}
          />
          <Route path="/owner/dashboard" element={<OwnerDashboard />} />
          <Route path="/owner/properties" element={<OwnerProperties />} />
          <Route path="/owner/post-ad" element={<PostAd />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
