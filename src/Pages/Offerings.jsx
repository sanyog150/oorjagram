import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

import offer1 from "../assets/offerings/SOLaNLYSER.png"
import offer2 from "../assets/offerings/SMECHUB.png"
import offer3 from "../assets/offerings/IOTis.png"

const Offerings = () => {
  return (
    <>
      <Box id="offerings" sx={{ mb: 10, scrollMarginTop: "80px" }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          OFFERINGS
        </Typography>
        <Grid container spacing={2}>
          {[
            {
              name: "offer1",
              image: [offer1],
            },
            {
              name: "offer2",
              image: [offer2],
            },
            {
              name: "offer3",
              image: [offer3],
            },
          ].map((offerings, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ textAlign: "center" }}>
                <CardMedia
                  loading="lazy"
                  component="img"
                  height="250"
                  image={offerings.image}
                  alt={offerings.name}
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

export default Offerings;
