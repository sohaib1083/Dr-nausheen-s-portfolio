'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { FaArrowRight, FaLinkedin, FaTwitter, FaResearchgate } from 'react-icons/fa';
import Image from 'next/image';
import { motion, useAnimation, AnimatePresence, useInView } from 'framer-motion';

const Hero = () => {  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { 
    once: false // This allows re-triggering when scrolling back
  });
  
  const [animationKey, setAnimationKey] = useState(0);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const socialIcons = [
    { icon: <FaLinkedin size={18} />, url: 'https://www.linkedin.com/in/dr-nausheen-alam-sarosh-26080b45/', name: 'LinkedIn' },
    { icon: <FaTwitter size={18} />, url: 'https://www.linkedin.com/in/dr-nausheen-alam-sarosh-26080b45/', name: 'Twitter' },
    { icon: <FaResearchgate size={18} />, url: 'https://www.researchgate.net/profile/Nausheen-Alam', name: 'ResearchGate' },
  ];
  // Animation controls for various elements
  const backgroundControls = useAnimation();
  const experienceBadgeControls = useAnimation();
  const contentControls = useAnimation();
  
  // Re-trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      setAnimationKey(prev => prev + 1);
      // Trigger content animations
      contentControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, staggerChildren: 0.1 }
      });
    } else {
      // Reset animations when out of view
      contentControls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 }
      });
    }
  }, [isInView, contentControls]);
  
  // Sequence animations
  useEffect(() => {
    // Start background animations
    backgroundControls.start({
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    });
    
    // Pulse animation for experience badge
    experienceBadgeControls.start({
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    });
  }, [backgroundControls, experienceBadgeControls]);

  // Text animation variants
  const welcomeTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  
  const welcomeText = "WELCOME TO MY PORTFOLIO";
  return (
    <Box
      ref={heroRef}
      id="home"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 14, md: 0 }
      }}
    >      {/* Decorative background elements with floating animation */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.2,
          pointerEvents: 'none',
        }}
      >
        <motion.div
          animate={backgroundControls}
          key={`bg1-${animationKey}`}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)',
            }}
          />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1
          }}
          key={`bg2-${animationKey}`}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: '10%',
              right: '5%',
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)',
            }}
          />
        </motion.div>
        
        {/* Additional floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5
          }}
          key={`bg3-${animationKey}`}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '40%',
              left: '15%',
              width: '100px',
              height: '100px',
              borderRadius: '30%',
              background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)',
              opacity: 0.4
            }}
          />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2
          }}
          key={`bg4-${animationKey}`}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '20%',
              right: '20%',
              width: '120px',
              height: '120px',
              borderRadius: '40%',
              background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)',
              opacity: 0.3
            }}
          />
        </motion.div>
      </Box>      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}><motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7 }}
                key={`welcome-${animationKey}`}
              >
                <Typography 
                  variant="h6"
                  sx={{ 
                    mb: 2,
                    fontWeight: 600,
                    color: 'var(--primary)',
                    letterSpacing: 2
                  }}
                >
                  WELCOME TO MY PORTFOLIO
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                key={`name-${animationKey}`}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  className="text-gradient"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  Dr. Nausheen Alam Sarosh
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                key={`title-${animationKey}`}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    opacity: 0.85,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                  }}
                >
                  Asst. Professor of Pharmacology
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                key={`description-${animationKey}`}
              >
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    maxWidth: '600px',
                    mb: 4,
                    mx: { xs: 'auto', md: 0 },
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8
                  }}
                >
                  Dedicated researcher and educator in pharmacology with expertise in neuropharmacology, cognitive science, and memory research. 
                  With over 38 publications and 155+ citations, my research focuses on psychostimulants, fertility enhancement, and cognitive behavioral studies at 
                  Federal Urdu University of Arts, Science and Technology, Karachi.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                key={`buttons-${animationKey}`}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    gap: 2,
                    flexWrap: 'wrap',
                    justifyContent: { xs: 'center', md: 'flex-start' }
                  }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleScrollToContact}
                      sx={{
                        backgroundColor: 'var(--primary)',
                        px: 4,
                        py: 1.5,
                        borderRadius: '50px',
                        '&:hover': {
                          backgroundColor: 'var(--primary)',
                          filter: 'brightness(110%)'
                        }
                      }}
                      endIcon={<FaArrowRight />}
                    >
                      Contact Me
                    </Button>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      href="#research"
                      sx={{
                        borderColor: 'var(--primary)',
                        color: 'var(--primary)',
                        px: 4,
                        py: 1.5,
                        borderRadius: '50px',
                        '&:hover': {
                          borderColor: 'var(--primary)',
                          backgroundColor: 'rgba(124, 58, 237, 0.05)'
                        }
                      }}
                    >
                      My Research
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                key={`social-${animationKey}`}
              >
                <Box sx={{ 
                  mt: 5, 
                  display: 'flex', 
                  gap: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}>
                  {socialIcons.map((social, index) => (
                    <motion.div 
                      key={social.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.6 + (index * 0.1) 
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Box
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'var(--background)',
                          color: 'var(--primary)',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'var(--primary)',
                            color: 'white',
                          }
                        }}
                      >
                        {social.icon}
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              key={`profile-${animationKey}`}
              style={{ 
                textAlign: 'center',
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  width: { xs: '280px', md: '380px' },
                  height: { xs: '280px', md: '380px' },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto',
                  border: '5px solid rgba(255,255,255,0.7)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  position: 'relative',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <Typography variant="h1" sx={{ color: '#fff', opacity: 0.9, fontWeight: 700 }}>DR</Typography>
                </motion.div>
                {/* Uncomment and add proper image path when ready */}
                {/* <Image 
                  src="/images/dr-nausheen-profile.jpg"
                  alt="Dr. Nausheen Alam Sarosh"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                /> */}
              </Box>
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
                key={`badge-${animationKey}`}
                style={{
                  position: 'absolute',
                  top: -15,
                  right: -15,
                }}
              >
                <motion.div
                  animate={experienceBadgeControls}
                >
                  <Box
                    sx={{
                      width: { xs: 80, md: 120 },
                      height: { xs: 80, md: 120 },
                      borderRadius: '50%',
                      backgroundColor: 'var(--background)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      border: '2px solid var(--primary-light)'
                    }}
                  >                
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: 'var(--primary)',
                        lineHeight: 1,
                        fontFamily: 'var(--font-heading)'
                      }}
                    >
                      25+
                    </Typography>
                    <Typography variant="caption" sx={{ fontSize: { xs: '0.6rem', md: '0.75rem' }, color: 'var(--foreground)' }}>
                      Years Exp.
                    </Typography>
                  </Box>
                </motion.div>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
