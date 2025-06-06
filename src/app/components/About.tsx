'use client';
import React, { useEffect } from 'react';
import { Container, Box, Typography, Grid, Paper, Divider } from '@mui/material';
import { FaFlask, FaUniversity, FaBookOpen, FaChalkboardTeacher } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

const AboutSection = () => {
  const controls = useAnimation();
    const stats = [
    { value: 25, label: 'Years Experience', icon: <FaUniversity size={24} /> },
    { value: 38, label: 'Publications', icon: <FaBookOpen size={24} /> },
    { value: 25, label: 'Research Projects', icon: <FaFlask size={24} /> },
    { value: 155, label: 'Citations', icon: <FaChalkboardTeacher size={24} /> },
  ];

  const skills = [
    { name: 'Neuropharmacology', level: 95 },
    { name: 'Cognitive Science', level: 90 },
    { name: 'Learning & Memory Research', level: 92 },
    { name: 'Reproductive Pharmacology', level: 88 },
    { name: 'Natural Product Research', level: 85 },
  ];

  return (
    <Box 
      id="about" 
      className="section-padding"
      sx={{ 
        py: { xs: '4rem', md: '6rem' },
        backgroundColor: 'var(--card)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography 
              variant="overline" 
              sx={{ 
                letterSpacing: 4, 
                color: 'var(--primary)',
                fontWeight: 600,
                mb: 1,
                display: 'block'
              }}
            >
              ABOUT ME
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Typography 
              variant="h2" 
              component="h2" 
              className="text-gradient"
              sx={{ 
                fontWeight: 700,
                mb: 2,
                fontFamily: 'var(--font-heading)',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Expertise & Background
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: '700px', 
                mx: 'auto',
                mb: 4,
                color: 'var(--card-foreground)',
                opacity: 0.9
              }}
            >
              Dedicated to advancing knowledge through innovative research and inspiring the next generation of scholars.
            </Typography>
          </motion.div>
        </Box>          <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
                My Journey
              </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 2, lineHeight: 1.8 }}>
                Dr. Nausheen Alam Sarosh is an Assistant Professor at the Department of Pharmacology, Faculty of Pharmacy at Federal Urdu University of Arts, Science and Technology in Karachi, Pakistan. With extensive expertise in pharmacology and neuroscience, she has published 38 research papers with over 155 citations.
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ mb: 2, lineHeight: 1.8 }}>
                Her research focuses on neuropharmacology, cognitive science, memory enhancement, and fertility studies. She has conducted significant research on psychostimulants like methylphenidate, reproductive pharmacology, and medicinal plants with therapeutic properties.
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ mb: 4, lineHeight: 1.8 }}>
                Dr. Nausheen actively collaborates with researchers across various institutions, contributing to advancements in pharmacological treatments for cognitive disorders, reproductive health, and natural product research for therapeutic applications.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box 
                  component={Paper} 
                  elevation={0}
                  sx={{ 
                    p: 2, 
                    flex: 1,
                    minWidth: '150px',
                    borderRadius: '12px',
                    border: '1px solid rgba(124, 58, 237, 0.1)',
                    backgroundColor: 'rgba(124, 58, 237, 0.03)',
                  }}
                >                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'var(--primary)' }}>
                    Education
                  </Typography>
                  <Typography variant="body2">
                    PhD in Pharmacology<br />
                    MPhil in Pharmacology<br />
                    Bachelor of Pharmacy
                  </Typography>
                </Box>
                
                <Box 
                  component={Paper} 
                  elevation={0}
                  sx={{ 
                    p: 2, 
                    flex: 1,
                    minWidth: '150px',
                    borderRadius: '12px',
                    border: '1px solid rgba(16, 185, 129, 0.1)',
                    backgroundColor: 'rgba(16, 185, 129, 0.03)',
                  }}
                >
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'var(--secondary)' }}>
                    Current Position
                  </Typography>
                  <Typography variant="body2">
                    Assistant Professor of Pharmacology<br />
                    Incharge Department of Pharmacology<br />
                    Federal Urdu University, Karachi
                  </Typography>
                </Box>
              </Box>
            </motion.div>          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
                Key Skills & Expertise
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                {skills.map((skill, index) => (
                  <Box key={skill.name} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {skill.name}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {skill.level}%
                      </Typography>
                    </Box>
                    <Box 
                      sx={{ 
                        height: '8px', 
                        borderRadius: '4px', 
                        backgroundColor: 'rgba(124, 58, 237, 0.1)',
                        overflow: 'hidden'
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        style={{ 
                          height: '100%', 
                          borderRadius: '4px', 
                          background: 'linear-gradient(to right, var(--primary), var(--secondary))'
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
              
              <Divider sx={{ mb: 4 }} />
              
              <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
                Career Highlights
              </Typography>                <Grid container spacing={3}>
                {stats.map((stat, index) => (
                  <Grid size={{ xs: 6, sm: 3 }} key={stat.label}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="card-hover-effect"
                    >
                      <Box 
                        sx={{ 
                          textAlign: 'center',
                          p: 2,
                          borderRadius: '12px',
                          backgroundColor: 'var(--background)',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                        }}
                      >
                        <Box 
                          sx={{ 
                            color: 'var(--primary)', 
                            mb: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(124, 58, 237, 0.1)',
                          }}
                        >
                          {stat.icon}
                        </Box>
                        <CountUp 
                          end={stat.value} 
                          duration={2.5} 
                          delay={0.7 + index * 0.1} 
                        />
                        <Typography variant="body2" sx={{ mt: 0.5, fontWeight: 500 }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// CountUp component for animating numbers
const CountUp = ({ end, duration, delay }: { end: number, duration: number, delay: number }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }
  }, [end, duration, isInView]);
  
  return (
    <Typography 
      ref={ref}
      variant="h3" 
      sx={{ 
        fontWeight: 700, 
        color: 'var(--primary)',
        fontFamily: 'var(--font-heading)'
      }}
    >
      {count}
    </Typography>
  );
};

export default AboutSection;
