'use client';
import React from 'react';
import { Box, Container, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CallToAction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      sx={{ 
        py: { xs: '4rem', md: '5rem' },
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
      id="collaborate"
    >
      {/* Decorative elements with animations */}
      <motion.div
        animate={{ 
          rotate: 360,
          transition: { duration: 40, ease: "linear", repeat: Infinity }
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            zIndex: 0
          }}
        />
      </motion.div>
      
      <motion.div
        animate={{ 
          rotate: -360,
          transition: { duration: 50, ease: "linear", repeat: Infinity }
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: -80,
            right: -80,
            width: 180,
            height: 180,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            zIndex: 0
          }}
        />
      </motion.div>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'center' },
            textAlign: { xs: 'center', md: 'left' },
            gap: { xs: 4, md: 0 }
          }}
        >
          <Box sx={{ maxWidth: '600px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="h3" 
                component="h2" 
                sx={{ 
                  fontWeight: 700,
                  mb: 2,
                  fontFamily: 'var(--font-heading)',
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                }}
              >
                Interested in Pharmacology Research Collaboration?
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: { xs: 3, md: 0 },
                  opacity: 0.9,
                  maxWidth: '500px',
                  mx: { xs: 'auto', md: 0 }
                }}
              >
                With expertise in neuropharmacology and cognitive enhancement research, I welcome opportunities for academic collaborations, clinical trials, and consultations on psychostimulant research.
              </Typography>
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              size="large"
              href="#contact"
              endIcon={<FaPaperPlane />}
              sx={{
                backgroundColor: 'white',
                color: 'var(--primary)',
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }
              }}
            >
              Collaborate with Me
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default CallToAction;
