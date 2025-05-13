import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  CssBaseline,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  DesignServices as DesignServicesIcon,
  People as PeopleIcon,
  Chat as ChatIcon,
  LocalOffer as LocalOfferIcon,
  ContactMail as ContactMailIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import logo from "../assets/OORJAgramLogo.png";
import HomePage from "./HomePage";

const AppBarWithNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Menu items configuration
  const menuItems = [
    { text: "HOME", icon: <HomeIcon />, link: "#home" },
    { text: "ABOUT US", icon: <InfoIcon />, link: "#about" },
    { text: "SERVICES", icon: <DesignServicesIcon />, link: "#services" },
    { text: "OUR TEAM", icon: <PeopleIcon />, link: "#team" },
    { text: "TESTIMONIALS", icon: <ChatIcon />, link: "#testimonials" },
    { text: "OFFERINGS", icon: <LocalOfferIcon />, link: "#offerings" },
    { text: "CONTACT", icon: <ContactMailIcon />, link: "#contact" },
  ];

  // Toggle mobile drawer
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false); // Close drawer on mobile after click
  };

  // Mobile drawer content
  const drawerContent = (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, minHeight: "64px" }}>
        <Typography variant="h6" noWrap sx={{ color: "blue", fontWeight: "bolder" }}>
          OORJAgram
          <Typography component="span" sx={{ fontSize: "0.875rem", fontWeight: "normal", display: "block", lineHeight: 1.3 }}>
            INDIA
          </Typography>
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => scrollToSection(item.link)}
            sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 255, 0.1)' } }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      
      {/* App Bar */}
      <AppBar position="fixed" sx={{ backgroundColor: "#ffffff", color: "#000000", boxShadow: "none", borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}>
        <Toolbar>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            
            {/* Logo and Brand */}
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <img src={logo} alt="OORJAgram logo" height={66} style={{ marginRight: 16 }} />
              <Typography variant="h6" noWrap sx={{ color: "blue", fontWeight: "bolder", display: { xs: "none", md: "block" } }}>
                OORJAgram
                <Typography component="span" sx={{ fontSize: "0.875rem", fontWeight: "normal", display: "block", lineHeight: 1.3 }}>
                  INDIA
                </Typography>
              </Typography>
            </Box>

            {/* Navigation Links */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {!isSmallScreen ? (
                <Box sx={{ display: "flex" }}>
                  {menuItems.map((item) => (
                    <IconButton
                      key={item.text}
                      onClick={() => scrollToSection(item.link)}
                      sx={{
                        mx: 1,
                        color: "inherit",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        '&:hover': { color: "blue" }
                      }}
                    >
                      {item.icon}
                      <Typography variant="caption">{item.text}</Typography>
                    </IconButton>
                  ))}
                </Box>
              ) : (
                <IconButton color="inherit" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#fafafa" }}>
        <Toolbar /> {/* Spacer for AppBar */}
        <HomePage />
      </Box>
    </Box>
  );
};

export default AppBarWithNavbar;