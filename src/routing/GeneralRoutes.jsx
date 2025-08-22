import React from "react";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader";

// Lazy load public pages

const Landing = lazy(() => import("../pages/landing/landing"));
const Login = lazy(() => import("../pages/auth/Login"));
const SignUp = lazy(() => import("../pages/auth/SignUp"));
const Contact = lazy(() => import("../pages/Contact"));
const ContactUs = lazy(() => import("../pages/landing/ContactUs"));
const AboutUs = lazy(() => import("../pages/landing/AboutUs"));
const PropertyCategories = lazy(() =>
  import("../pages/landing/PropertyCategories")
);
const Lands = lazy(() => import("../pages/Properties/Lands"));
const LandDetails = lazy(() => import("../pages/Properties/LandDetails"));
const Houses = lazy(() => import("../pages/Properties/Houses"));
const PropertyDetails = lazy(() => import("../components/PropertyDetails"));

// Import user-specific routing
import BuyerRoutes from "./BuyerRoutes";
import OwnerRoutes from "./OwnerRoutes";
import AgentRoutes from "./AgentRoutes";

const GeneralRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/property-categories" element={<PropertyCategories />} />
        <Route path="/properties/lands" element={<Lands />} />
        <Route path="/properties/houses" element={<Houses />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route
          path="/properties/lands/land-details"
          element={<LandDetails />}
        />

        {/* User-specific Routes */}
        <Route path="/buyer/*" element={<BuyerRoutes />} />
        <Route path="/owner/*" element={<OwnerRoutes />} />
        <Route path="/agent/*" element={<AgentRoutes />} />
      </Routes>
    </Suspense>
  );
};

export default GeneralRoutes;
