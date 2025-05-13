import { Box, Container, Grid, Typography, Link, Divider, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        color: '#333',
        py: 6,
        borderTop: '1px solid #e0e0e0',
        marginTop: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              OORJAgram™
            </Typography>
            <Typography variant="body2" paragraph>
              Empowering sustainable energy solutions through innovative technology and community engagement.
            </Typography>
            <Typography variant="body2" paragraph>
              Our mission is to make clean energy accessible to all.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', pl: 0 }}>
              <li>
                <Link href="#home" color="inherit" underline="hover">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" color="inherit" underline="hover">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" color="inherit" underline="hover">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" color="inherit" underline="hover">
                  Contact
                </Link>
              </li>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" paragraph>
              OORJAgram India Pvt. Ltd.
            </Typography>
            <Typography variant="body2" paragraph>
              123 Energy Park, Bangalore
              <br />
              Karnataka, India - 560001
            </Typography>
            <Typography variant="body2" paragraph>
              Email: info@oorjagram.com
              <br />
              Phone: +91 80 1234 5678
            </Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton aria-label="Facebook" color="primary">
                <Facebook />
              </IconButton>
              <IconButton aria-label="Twitter" color="primary">
                <Twitter />
              </IconButton>
              <IconButton aria-label="Instagram" color="primary">
                <Instagram />
              </IconButton>
              <IconButton aria-label="LinkedIn" color="primary">
                <LinkedIn />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Join our energy revolution
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Copyright Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2">
            Copyright © {new Date().getFullYear()} OORJAgram™. All rights reserved.
          </Typography>
          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            "OORJAgram" and the OORJAgram logo are trademarks of OORJAgram India Pvt. Ltd.
          </Typography>
          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            Committed to sustainable energy solutions for a brighter future.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;