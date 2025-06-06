'use client';
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Container, 
  TextField, 
  Button, 
  Paper,
  Snackbar,
  Alert,
  Card,
  CardContent,
  CircularProgress
} from '@mui/material';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUniversity, FaLinkedin, FaTwitter, FaResearchgate } from 'react-icons/fa';
import { motion } from 'framer-motion';
import BackgroundAnimation from './BackgroundAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSnackbarMessage('Your message has been sent successfully!');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 1500);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  const contactInfo = [
    { 
      icon: <FaEnvelope size={24} />, 
      title: 'Email', 
      value: 'nausheen.alam@fuuast.edu.pk',
      href: 'nausheen.alam@fuuast.edu.pk',
      color: '#7c3aed'
    },    { 
      icon: <FaPhone size={24} />, 
      title: 'Phone', 
      value: '+92 335 1244708',
      href: 'tel:+923351244708',
      color: '#10b981'
    },
    { 
      icon: <FaMapMarkerAlt size={24} />, 
      title: 'Office', 
      value: 'Department of Pharmacology, Faculty of Pharmacy',
      href: '#',
      color: '#f97316'
    },
    { 
      icon: <FaUniversity size={24} />, 
      title: 'University', 
      value: 'Federal Urdu University of Arts Science and Technology',
      href: 'https://fuuast.edu.pk',
      color: '#3b82f6'
    },
  ];

  return (
    <Box 
      id="contact" 
      sx={{ 
        py: { xs: '3rem', sm: '4rem', md: '6rem' },
        px: { xs: 2, sm: 3, md: 0 },
        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.03) 0%, rgba(124, 58, 237, 0) 70%)',
          zIndex: 0,
          animation: 'pulse 15s infinite alternate ease-in-out'
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.03) 0%, rgba(16, 185, 129, 0) 70%)',
          zIndex: 0,
          animation: 'pulse 12s infinite alternate-reverse ease-in-out'
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: { xs: 4, sm: 5, md: 6 }, textAlign: 'center' }}>
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
              GET IN TOUCH
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
              Contact Information
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
              Have questions about my pharmacological research, collaboration opportunities in neuropharmacology, or academic inquiries? Get in touch with me using the form below or through any of the contact methods.
            </Typography>
          </motion.div>
        </Box>
        
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography variant="h5" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
                Contact Details
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Grid container spacing={3}>
                  {contactInfo.map((info, index) => (
                    <Grid item xs={12} sm={6} key={info.title}>              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                        <Card 
                          elevation={0}
                          sx={{ 
                            borderRadius: '12px',
                            height: '100%',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-5px)'
                            }
                          }}
                        >
                          <CardContent>
                            <Box 
                              sx={{ 
                                display: 'flex', 
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                              }}
                            >
                              <Box 
                                sx={{ 
                                  color: 'white', 
                                  mb: 2,
                                  p: 1.5,
                                  borderRadius: '12px',
                                  backgroundColor: info.color,
                                }}
                              >
                                {info.icon}
                              </Box>
                              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                {info.title}
                              </Typography>
                              <Typography 
                                variant="body2" 
                                component="a" 
                                href={info.href}
                                sx={{ 
                                  color: 'var(--card-foreground)',
                                  textDecoration: 'none',
                                  '&:hover': {
                                    color: info.color,
                                  }
                                }}
                              >
                                {info.value}
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              
              <Box sx={{ mt: 6 }}>
                <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
                  Connect with Me
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2 }}>                  {[
                    { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com', color: '#0077b5' },
                    { icon: <FaResearchgate size={20} />, url: 'https://www.researchgate.net/profile/Nausheen-Alam', color: '#00ccbb' },
                    { icon: <FaUniversity size={20} />, url: 'https://fuuast.edu.pk', color: '#3b82f6' },
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <Box
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '12px',
                          backgroundColor: 'var(--background)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: social.color,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: social.color,
                            color: 'white',
                          }
                        }}
                      >
                        {social.icon}
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={7}>            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: '20px',
                  backgroundColor: 'var(--background)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
                  Send Me a Message
                </Typography>
                
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          variant="outlined"
                          value={formData.name}
                          onChange={handleChange}
                          error={Boolean(errors.name)}
                          helperText={errors.name}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '10px',
                            },
                          }}
                        />
                      </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <TextField
                          fullWidth
                          label="Your Email"
                          name="email"
                          variant="outlined"
                          value={formData.email}
                          onChange={handleChange}
                          error={Boolean(errors.email)}
                          helperText={errors.email}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '10px',
                            },
                          }}
                        />
                      </motion.div>
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          variant="outlined"
                          value={formData.subject}
                          onChange={handleChange}
                          error={Boolean(errors.subject)}
                          helperText={errors.subject}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '10px',
                            },
                          }}
                        />
                      </motion.div>
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <TextField
                          fullWidth
                          label="Your Message"
                          name="message"
                          variant="outlined"
                          multiline
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          error={Boolean(errors.message)}
                          helperText={errors.message}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '10px',
                            },
                          }}
                        />
                      </motion.div>
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disabled={isSubmitting}
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
                        >
                          {isSubmitting ? (
                            <CircularProgress size={24} sx={{ color: 'white' }} />
                          ) : (
                            'Send Message'
                          )}
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
