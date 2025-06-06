'use client';
import React, { useEffect, useState } from 'react';
import { Box, Fab, Zoom } from '@mui/material';
import { FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Zoom in={isVisible}>
      <Box
        onClick={scrollToTop}
        role="button"
        tabIndex={0}
        aria-label="Scroll to top"
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 999,
        }}
      >
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Fab
            color="primary"
            size="medium"
            aria-label="scroll to top"
            sx={{
              backgroundColor: 'var(--primary)',
              '&:hover': {
                backgroundColor: 'var(--secondary)'
              },
              boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            }}
          >
            <FaChevronUp />
          </Fab>
        </motion.div>
      </Box>
    </Zoom>
  );
};

export default ScrollToTop;
