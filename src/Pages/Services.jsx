import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Services = () => {
  return (
    <>
      <Box id="services" sx={{ mb: 10, scrollMarginTop: "80px" }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            SERVICES
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "End-to-End Renewable Energy EPC Solutions",
                description:
                  "We provide turnkey EPC services (Engineering, Procurement, Construction) for decentralized renewable energy projects (10kWp–250kWp), handling everything from design to commissioning and long-term O&M. Our expertise spans:",
                image:
                  "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                bullets: ` ● Solar PV Systems (On-grid/Off-grid/Hybrid) ● Biomass & Biofuel Power Plants ● Micro-Hydro & Wind Energy Solutions ● Microgrid Installations (15+ deployed in UP, Bihar, Jharkhand, Rajasthan)`,
              },
              {
                title: " Rural Electrification & Last-Mile Energy Access",
                description:
                  "● Off-grid Solar Solutions for unelectrified villages (3.5MWp deployed). ● Community Microgrids for reliable power in remote areas. ● CSR-Driven Rural Interventions with measurable outcomes (SOBOs).",
                image:
                  "https://blog.feniceenergy.com/wp-content/uploads/2024/05/off-grid-solar-solutions-1024x585.jpg",
              },
              {
                title: "Operation & Maintenance (O&M) Franchisee Model",
                description:
                  "● Professional OMC (Operation Management & Caretaking) for large/medium projects. ● Performance monitoring, preventive maintenance, and asset management.",
                image:
                  "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Government & Corporate Partnerships",
                description:
                  "● Turnkey execution of state-sponsored renewable projects. ● CSR project handholding for corporates/NGOs (feasibility to implementation).",
                image:
                  "https://media.istockphoto.com/id/1322433940/photo/solar-panels-which-can-run-submerge-water-pump-for-irrigation-and-distribution-of-water-in.jpg?s=2048x2048&w=is&k=20&c=ZlbcEsxa-taaZ40fMLyKt2_apcg6PzLK4IdEXaVCfgM=",
              },
            ].map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{width:"70vw"}}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.bullets}
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

export default Services;
