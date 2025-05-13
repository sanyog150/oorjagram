import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

import utparn from "../assets/DrUtparn.jpeg"
import renita from "../assets/RenitaDubey.jpg"
import ganesh from "../assets/GaneshanChandrsekharan.jpeg"
import mahendra from "../assets/MPSingh1.jpg"
import shailendra from "../assets/SNPandey.jpg"

const Teams = () => {
  return (
    <>
      <Box id="team" sx={{ mb: 10, scrollMarginTop: "80px" }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            OUR TEAM
          </Typography>
          {/* <Typography
            variant="body1"
            paragraph
            align="center"
            sx={{ maxWidth: 800, mx: "auto", mb: 4 }}
          >
            Meet the passionate professionals driving India's renewable energy
            revolution
          </Typography> */}
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                name: "Dr. Utparn Dubey",
                role: "Managing Director",
                title: "Original Thinker & Rural Practitioner",
                image: [utparn],
              },
              {
                name: "Dr. Renita Dubey",
                role: "Executive Director & Bhagyodaya Head",
                title: "Knowledge Driver and Training Enthusiast",
                image: [renita],
              },
            ].map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ textAlign: "center" }}>
                  <CardMedia
                    loading="lazy"
                    component="img"
                    height="250"
                    image={member.image}
                    alt={member.name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* Advisory Teams */}
        <Box id="team" sx={{ mb: 10, scrollMarginTop: "80px" }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            Our Advisory Team
          </Typography>
          {/* <Typography
            variant="body1"
            paragraph
            align="center"
            sx={{ maxWidth: 800, mx: "auto", mb: 4 }}
          >
            Meet the passionate professionals driving India's renewable energy
            revolution
          </Typography> */}
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                name: "Mr. Ganesh Chandrasekaran",
                role: "Advisor - Innovation & Analytics",
                title: "Empowering Startups with Technology",
                image: [ganesh],
              },
              {
                name: "Dr. Mahendra P. Singh",
                role: "Advisor - Energy & Innovation",
                title: "Champion of Sustainable Energy Solutions",
                image: [mahendra],
              },
              {
                name: "Dr. Shailendra Nath Pandey",
                role: "Advisor - Agriculture and Rural Development",
                title: "Focussing on Sustainable Growth of Rural India",
                image: [shailendra],
              },
            ].map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ textAlign: "center" }}>
                  <CardMedia
                    loading="lazy"
                    component="img"
                    height="250"
                    image={member.image}
                    alt={member.name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
    </>
  );
}

export default Teams;
