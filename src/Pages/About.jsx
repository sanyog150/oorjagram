import React from "react";
import about from "../assets/about.jpg";
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <section id="about">
      <Box id="about" sx={{ mb: 10, scrollMarginTop: "80px" }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          ABOUT US
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sx={{ width: "100%" }}>
            <CardMedia
              component="img"
              image={about}
              alt="About OORJAgram"
              sx={{ borderRadius: 2, height: "50vh" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Pioneering Renewable Energy Solutions
            </Typography>
            <Typography paragraph>
              OORJAgram is a Last Mile Turnkey solutions firm which is driving
              the Renewable Energy based projects on contracting arrangement
              with State Governments and Corporates where the EPC firm is
              engaged, outsourced and made responsible for all the activities
              from design, procurement, construction, to commissioning and
              Operation and Maintenance of the project to the End-User or Owner.
              Projects Ranging from as low as 10KwP to 250 KwP of Renewable
              Energy based power generation solution through Solar, Biomass, Bio
              fuels, Wind, Micro Hydro are our major expertise. In aggregated
              capacity and Individual experience OORJAgram has executed a total
              3.5 MwP (Megawatt Peak) of decentralised Off Grid Rural
              Electrification and 15 Micro Grids Installation across states of
              Uttar Pradesh, Bihar Jharkhand and Rajasthan using Solar as the
              platform. OORJAgram also undertakes professional Operation
              Management and Caretaking "OMC" of large and medium sized projects
              on Franchisee basis and also provide complete hand holding
              solutions to Governments and Organisation which are interested in
              Rural Intervention with CSR and Special Objective Based Outcomes
              (SOBO's).
            </Typography>
            <Button variant="outlined" color="primary">
              Read Our Story
            </Button>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default About;
