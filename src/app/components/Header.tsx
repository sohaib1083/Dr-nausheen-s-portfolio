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
  Tooltip 
} from '@mui/material';
import { FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaResearchgate, FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = ({ toggleTheme, isDarkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      
      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      
      setLastScrollTop(currentScrollTop);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const contactInfo = [
    { icon: <FaEnvelope size={16} />, text: 'nausheenasarosh@hotmail.com', href: 'mailto:nausheenasarosh@hotmail.com' },
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
      }}
    >
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
    </Box>
  );
};

export default Header;