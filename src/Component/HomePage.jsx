import React, { Container } from "@mui/material";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Teams from "../Pages/Teams";
import Testimonials from "../Pages/Testimonials";
import Offerings from "../Pages/Offerings";
import Contact from "../Pages/Contact";

const HomePage = () => {
  return (
    <>
        {/* Navigation Sections */}
        <Container maxWidth="lg" sx={{ py: 5 }}>
          {/* Home Section */}
          <Home />
          {/* About Us Section */}
          <About />
          {/* Services Section */}
          <Services />
          {/* Our Team Section */}
          <Teams />
          {/* Testimonials Section */}
          <Testimonials />
          {/* Offerings Section */}
          <Offerings />
          {/* Contact Section */}
          <Contact />
        </Container>
    </>
  );
};

export default HomePage;
