'use client';
import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  Divider, 
  useMediaQuery, 
  useTheme,
  Tooltip,
  AppBar,
  Toolbar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaResearchgate, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header = ({ toggleTheme, isDarkMode }: HeaderProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ['Home', 'About', 'Achievements', 'Research', 'Publications', 'Contact'];
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      
      // Handle header visibility for desktop only
      if (!isMobile) {
        if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
      } else {
        // Always show header on mobile
        setShowHeader(true);
      }
      
      // Handle navbar background for mobile
      if (currentScrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      setLastScrollTop(currentScrollTop);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, isMobile]);

  const handleScrollToSection = (section: string) => {
    const sectionId = section.toLowerCase();
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const contactInfo = [
    { icon: <FaEnvelope size={16} />, text: 'nausheen.alam@fuuast.edu.pk', href: 'mailto:nausheen.alam@fuuast.edu.pk' },
    { icon: <FaPhone size={16} />, text: '+92 335 1244708', href: 'tel:+923351244708' },
  ];

  const socialIcons = [
    { icon: <FaLinkedin size={16} />, url: '#', tooltip: 'LinkedIn' },
    { icon: <FaTwitter size={16} />, url: '#', tooltip: 'Twitter' },
    { icon: <FaResearchgate size={16} />, url: '#', tooltip: 'ResearchGate' },
  ];

  return (
    <Box
      component={motion.div}
      animate={{ y: showHeader ? 0 : -60 }}
      transition={{ duration: 0.3 }}
      sx={{
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid rgba(124, 58, 237, 0.1)',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1001,
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      }}    >
      {/* Desktop Header */}
      {!isMobile && (
        <Box
          sx={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            py: 1,
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box sx={{ display: 'flex', gap: 4 }}>
                {contactInfo.map((item, index) => (
                  <Box
                    key={index}
                    component="a"
                    href={item.href}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: 'inherit',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'rgba(255,255,255,0.8)',
                      }
                    }}
                  >
                    {item.icon}
                    <Typography variant="body2">{item.text}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                {socialIcons.map((social, index) => (
                  <Tooltip key={index} title={social.tooltip} arrow>
                    <IconButton
                      size="small"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.2)',
                        }
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </Tooltip>
                ))}
                
                <Divider orientation="vertical" flexItem sx={{ mx: 1, backgroundColor: 'rgba(255,255,255,0.3)' }} />
                
                <Tooltip title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} arrow>
                  <IconButton
                    onClick={toggleTheme}
                    size="small"
                    sx={{
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.2)',
                      }
                    }}
                  >
                    {isDarkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Container>
        </Box>
      )}

      {/* Mobile Header */}
      {isMobile && (
        <>
          <AppBar 
            position="static" 
            elevation={0}
            sx={{
              backgroundColor: scrolled ? 'rgba(124, 58, 237, 0.95)' : 'var(--primary)',
              backdropFilter: scrolled ? 'blur(10px)' : 'none',
              transition: 'all 0.3s ease',
            }}
          >
            <Toolbar sx={{ justifyContent: 'space-between', minHeight: '64px !important' }}>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: '1.1rem'
                }}
              >
                Dr. Nausheen Alam
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Tooltip title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} arrow>
                  <IconButton
                    onClick={toggleTheme}
                    size="small"
                    sx={{
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.2)',
                      }
                    }}
                  >
                    {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                  </IconButton>
                </Tooltip>
                
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={toggleMobileMenu}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)',
                    }
                  }}
                >
                  {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>

          {/* Mobile Drawer Menu */}
          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            PaperProps={{
              sx: {
                width: 280,
                backgroundColor: 'var(--background)',
                backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, rgba(124, 58, 237, 0.8) 100%)',
              }
            }}
          >
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              {/* Header in Drawer */}
              <Box sx={{ p: 3, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'white', 
                    fontWeight: 'bold',
                    mb: 1
                  }}
                >
                  Dr. Nausheen Alam
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.85rem'
                  }}
                >
                  Assistant Professor of Chemistry
                </Typography>
              </Box>

              {/* Navigation Items */}
              <List sx={{ flexGrow: 1, py: 2 }}>
                {navItems.map((item, index) => (
                  <ListItem 
                    key={index}
                    component={motion.div}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    sx={{ px: 0 }}
                  >
                    <Button
                      fullWidth
                      onClick={() => handleScrollToSection(item)}
                      sx={{
                        justifyContent: 'flex-start',
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: 500,
                        py: 1.5,
                        px: 3,
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.1)',
                        }
                      }}
                    >
                      {item}
                    </Button>
                  </ListItem>
                ))}
              </List>

              {/* Contact Info in Drawer */}
              <Box sx={{ p: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    color: 'white', 
                    mb: 2,
                    fontWeight: 600 
                  }}
                >
                  Contact Information
                </Typography>
                
                {contactInfo.map((item, index) => (
                  <Box
                    key={index}
                    component="a"
                    href={item.href}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      color: 'rgba(255,255,255,0.9)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      mb: 1.5,
                      '&:hover': {
                        color: 'white',
                      }
                    }}
                  >
                    {item.icon}
                    <Typography variant="body2" sx={{ color: 'inherit' }}>
                      {item.text}
                    </Typography>
                  </Box>
                ))}

                {/* Social Icons in Drawer */}
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  {socialIcons.map((social, index) => (
                    <IconButton
                      key={index}
                      size="small"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          color: 'white',
                        }
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Box>
          </Drawer>
        </>
      )}
    </Box>
  );
};

export default Header;