'use client';
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem } from '@mui/material';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = ['Home', 'About', 'Achievements', 'Research', 'Publications', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={scrolled ? 4 : 0}
        sx={{ 
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ flexGrow: 1 }}
            >
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  fontWeight: 700, 
                  fontFamily: 'var(--font-montserrat)',
                  color: scrolled ? 'var(--primary)' : '#fff'
                }}
                className={scrolled ? 'text-gradient' : ''}
              >
                Dr. Nausheen
              </Typography>
            </motion.div>
            
            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button 
                    onClick={() => handleScrollToSection(item)}
                    sx={{ 
                      mx: 1, 
                      color: scrolled ? 'var(--foreground)' : '#fff',
                      '&:hover': {
                        color: 'var(--primary)',
                      }
                    }}
                  >
                    {item}
                  </Button>
                </motion.div>
              ))}
            </Box>
            
            {/* Mobile Navigation Icon */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton 
                edge="end" 
                color="inherit" 
                aria-label="menu"
                onClick={toggleMobileMenu}
                sx={{ color: scrolled ? 'var(--foreground)' : '#fff' }}
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: '70%',
            backgroundColor: 'var(--background)',
            padding: '2rem 1rem',
          }
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem 
              key={item}
              onClick={() => handleScrollToSection(item)}
              sx={{ 
                cursor: 'pointer',
                py: 1.5,
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                '&:hover': {
                  backgroundColor: 'var(--accent)',
                }
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
