import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

import award1 from "../assets/Testimonials/tm1.jpeg"
import award2 from "../assets/Testimonials/tm2.jpeg"
import award3 from "../assets/Testimonials/tm3.jpeg"

const Testimonials = () => {
  return (
    <>
      <Box id="testimonials" sx={{ mb: 10, scrollMarginTop: "80px" }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          TESTIMONIALS
        </Typography>
        <Grid container spacing={7}>
          {[
            {
              name: "award1",
              image: [award1],
            },
            {
              name: "award2",
              image: [award2],
            },
            {
              name: "award3",
              image: [award3],
            },
            {
              name: "award1",
              image: [award1],
            },
            {
              name: "award2",
              image: [award2],
            },
          ].map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ textAlign: "center" }}>
                <CardMedia
                  loading="lazy"
                  component="img"
                  height="250"
                  image={testimonial.image}
                  alt={testimonial.name}
                  sx={{ objectFit: "cover" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Testimonials;
