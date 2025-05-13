import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

// Sample images for the carousel (replace with your actual images)
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const carouselImages = [
  {
    img: image1,
    title: "Sustainable Energy Solutions",
    description: "Innovative technologies for a greener future",
  },
  {
    img: image2,
    title: "Community Power Projects",
    description: "Empowering communities through renewable energy",
  },
  {
    img: image3,
    title: "Cutting-Edge Research",
    description: "Leading the energy revolution with our R&D",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="home" style={{ margin: 0, padding: 0 }}>
      {/* Hero Carousel Section */}
      <Box sx={{ 
        position: "relative", 
        width: "75vw",
        height: "75vh", 
        overflow: "hidden",
        margin: 0,
        padding: 0,
        borderRadius:'20px'
      }}>
        {carouselImages.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: index === activeIndex ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textAlign: "center",
              margin: 0,
              padding: 0,
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                p: 4,
                borderRadius: 2,
                maxWidth: "80%",
              }}
            >
              <Typography variant="h2" component="h1" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="h5" component="p" gutterBottom>
                {item.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 3 }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        ))}

        {/* Carousel Controls */}
        <IconButton
          sx={{
            position: "absolute",
            left: 20,
            top: "50%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
          onClick={handlePrev}
        >
          <KeyboardArrowLeft fontSize="large" />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            right: 20,
            top: "50%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
          onClick={handleNext}
        >
          <KeyboardArrowRight fontSize="large" />
        </IconButton>

        {/* Indicators */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
          }}
        >
          {carouselImages.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor:
                  index === activeIndex ? "primary.main" : "grey.500",
                cursor: "pointer",
              }}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Home;