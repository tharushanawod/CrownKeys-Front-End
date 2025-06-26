import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import OwnerProperties from "./pages/owner/OwnerProperties";


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
const OwnerDashboard = lazy(() => import("./pages/Owner/OwnerDashboard"));
const Packages = lazy(() => import("./pages/Owner/Packages"));
const Profile = lazy(() => import("./pages/Owner/Profile"));
const OwnerProperties = lazy(() => import("./pages/owner/OwnerProperties"));
const PostAd = lazy(() => import("./pages/owner/PostAd"));
const Inquiries = lazy(() => import("./pages/Owner/Inquiries"));
const Offers = lazy(() => import("./pages/Owner/Offers"));
const Analytics = lazy(() => import("./pages/Owner/Analytics"));
const Financial = lazy(() => import("./pages/Owner/Financial"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
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
          <Route path="/owner/packages" element={<Packages />} />
          <Route path="/owner/settings" element={<Profile />} />
          <Route path="/owner/inquiries" element={<Inquiries />} />
          <Route path="/owner/offers" element={<Offers />} />
          <Route path="/owner/analytics" element={<Analytics />} />
          <Route path="/owner/financial" element={<Financial />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
