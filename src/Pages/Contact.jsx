import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <>
      <Box id="contact" sx={{ scrollMarginTop: "80px" }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          CONTACT
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} border={1}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            <Typography paragraph>
              <strong>Address:</strong>  Greater Noida, NCR, IN
            </Typography>
            <Typography paragraph>
              <strong>Email:</strong> reachus@oorjagram.in
            </Typography>
            <Typography paragraph>
              <strong>Phone:</strong> +91 9910862297
            </Typography>
            <Typography paragraph>
              <strong>Business Hours:</strong> Mon-Fri: 9AM-6PM
            </Typography>
          </Grid>


          <Grid item xs={12} md={6} sm={2}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Subject" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" size="large">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
