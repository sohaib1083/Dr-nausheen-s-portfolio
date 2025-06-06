'use client';
import React from 'react';
import { Container, Box, Typography, Grid, IconButton, Link as MuiLink } from '@mui/material';
import { FaLinkedin, FaTwitter, FaResearchgate, FaEnvelope, FaAngleRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Achievements", href: "#achievements" },
    { text: "Research", href: "#research" },
    { text: "Publications", href: "#publications" },
    { text: "Contact", href: "#contact" },
  ];
    const usefulLinks = [
    { text: "Federal Urdu University", href: "https://fuuast.edu.pk" },
    { text: "Faculty of Pharmacy", href: "https://fuuast.edu.pk/pharmacy/" },
    { text: "Research Publications", href: "#publications" },
    { text: "Pakistan Journal of Pharmaceutical Sciences", href: "https://pjps.pk/" },
    { text: "Pharmacy Council of Pakistan", href: "https://www.pharmacycouncil.org.pk/" },
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: 'var(--background)',
        borderTop: '1px solid rgba(124, 58, 237, 0.1)',
        pt: { xs: 4, sm: 5, md: 8 },
        pb: { xs: 2, md: 3 },
        px: { xs: 2, sm: 3, md: 0 }
      }}
    >
      <Container maxWidth="lg">        <Grid container spacing={{ xs: 3, sm: 4, md: 4 }}>
          {/* About Column */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 2, 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--primary)'
                }}
                className="text-gradient"
              >
                Dr. Nausheen Alam Sarosh
              </Typography>
              
              <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
                Assistant Professor of Pharmacology at Federal Urdu University of Arts Science and Technology. 
                Specializing in neuropharmacology, cognitive enhancement, and psychostimulant research.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                {[
                  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com' },
                  { icon: <FaResearchgate />, label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Nausheen-Alam' },
                  { icon: <FaEnvelope />, label: 'Email', href: 'mailto:nausheen.alam@fuuast.edu.pk' }
                ].map((social) => (
                  <IconButton 
                    key={social.label}
                    component="a"
                    href={social.href}
                    aria-label={social.label}
                    size="small"
                    sx={{ 
                      color: 'var(--foreground)',
                      opacity: 0.6,
                      '&:hover': {
                        opacity: 1,
                        color: 'var(--primary)',
                        backgroundColor: 'rgba(124, 58, 237, 0.08)',
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Grid>          
          {/* Quick Links */}
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Quick Links
              </Typography>
              
              <Box 
                component="ul" 
                sx={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0
                }}
              >
                {quickLinks.map((link) => (
                  <Box component="li" key={link.text} sx={{ mb: 1 }}>
                    <motion.div
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Box 
                        component={Link} 
                        href={link.href} 
                        sx={{ 
                          color: 'var(--foreground)',
                          opacity: 0.75,
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          display: 'flex',
                          alignItems: 'center',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            opacity: 1,
                            color: 'var(--primary)',
                          }
                        }}
                      >
                        <FaAngleRight style={{ marginRight: '4px', fontSize: '0.8rem' }} />
                        {link.text}
                      </Box>
                    </motion.div>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>          
          {/* Useful Links */}
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Useful Links
              </Typography>
              
              <Box 
                component="ul" 
                sx={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0
                }}
              >
                {usefulLinks.map((link) => (
                  <Box component="li" key={link.text} sx={{ mb: 1 }}>
                    <motion.div
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Box 
                        component="a" 
                        href={link.href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: 'var(--foreground)',
                          opacity: 0.75,
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          display: 'flex',
                          alignItems: 'center',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            opacity: 1,
                            color: 'var(--primary)',
                          }
                        }}
                      >
                        <FaAngleRight style={{ marginRight: '4px', fontSize: '0.8rem' }} />
                        {link.text}
                      </Box>
                    </motion.div>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>          
          {/* Contact Info */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Contact Information
              </Typography>
                <Box sx={{ mb: 1 }}>
                <Typography variant="body2" sx={{ mb: 0.5, opacity: 0.7 }}>
                  Email:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  nausheen.alam@fuuast.edu.pk
                </Typography>
              </Box>
                <Box sx={{ mb: 1 }}>
                <Typography variant="body2" sx={{ mb: 0.5, opacity: 0.7 }}>
                  Phone:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  +92 335 1244708
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="body2" sx={{ mb: 0.5, opacity: 0.7 }}>
                  Office Address:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Department of Pharmacology<br />
                  Faculty of Pharmacy<br />
                  Federal Urdu University of Arts Science and Technology<br />
                  Karachi, Pakistan
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        
        <Box 
          sx={{ 
            mt: { xs: 4, md: 8 }, 
            pt: { xs: 2, md: 3 },
            borderTop: '1px solid rgba(124, 58, 237, 0.1)',
            textAlign: 'center'
          }}
        >          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            © {currentYear} Dr. Nausheen Alam. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
