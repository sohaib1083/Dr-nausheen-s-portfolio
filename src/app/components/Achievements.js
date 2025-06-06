'use client';
import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import { FaAward, FaUniversity, FaUserGraduate, FaBriefcase, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <Box sx={{ padding: '4rem 0' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Achievements & Credentials
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <FaAward size={50} color="gold" />
              <Typography variant="h6">Gold Medalist</Typography>
              <Typography variant="body2">
                First Class First Position, Karachi University MPhil. Pharmacology
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <FaUniversity size={50} color="#4caf50" />
              <Typography variant="h6">Ph.D. in Pharmacology</Typography>
              <Typography variant="body2">Ph.D., 2017</Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <FaUserGraduate size={50} color="#2196f3" />
              <Typography variant="h6">Assistant Professor</Typography>
              <Typography variant="body2">Incharge Pharmacy, FUUAST</Typography>
            </motion.div>
          </Grid>
        </Grid>
        <Grid container spacing={4} justifyContent="center" sx={{ marginTop: '2rem' }}>
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <FaBriefcase size={50} color="#ff9800" />
              <Typography variant="h6">Professional Memberships</Typography>
              <Typography variant="body2">Member, National Curriculum Board of Pakistan</Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <FaUsers size={50} color="#f44336" />
              <Typography variant="h6">Other Roles</Typography>
              <Typography variant="body2">Member, Pharmacy Council of Pakistan</Typography>
              <Typography variant="body2">Member, Admission Committee FUUAST</Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Achievements;
