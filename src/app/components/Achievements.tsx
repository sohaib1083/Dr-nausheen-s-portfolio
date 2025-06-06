'use client';
import React from 'react';
import { Container, Box, Typography, Paper, IconButton } from '@mui/material';
import { FaTrophy, FaMedal, FaAward, FaCertificate, FaUniversity } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AchievementsSection = () => {
  const [expandedId, setExpandedId] = React.useState<number | null>(null);
  const [filter, setFilter] = React.useState<string>('all');
  
  const handleAchievementClick = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };
  
  const handleFilterChange = (filterValue: string) => {
    setFilter(filterValue);
    setExpandedId(null);
  };
    const filterCategories = [
    { value: 'all', label: 'All Credentials', icon: '🎯' },
    { value: 'academic', label: 'Academic', icon: '🎓' },
    { value: 'professional', label: 'Professional', icon: '💼' },
    { value: 'research', label: 'Research', icon: '🔬' }
  ];
  
  const getFilteredAchievements = () => {
    if (filter === 'all') return achievements;
    return achievements.filter(achievement => achievement.category === filter);
  };
    const achievements = [
    {
      title: "Gold Medalist",
      subtitle: "First Class First Position",
      organization: "Karachi University MPhil. Pharmacology",
      year: "1997",
      category: "academic",
      description: "Awarded gold medal for achieving first class first position in MPhil Pharmacology program, demonstrating exceptional academic excellence.",
      icon: <FaTrophy size={28} />,
      color: "#FFD700",
      gradient: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
      additionalInfo: "This prestigious recognition marks the highest academic achievement in the pharmacy program at one of Pakistan's leading universities."
    },
    {
      title: "Ph.D. in Pharmacology", 
      subtitle: "Doctoral Degree",
      organization: "University of Karachi",
      year: "2014",
      category: "academic",
      description: "Completed doctoral studies with highest CGPA in department, specializing in neuropharmacology and psychostimulant research.",
      icon: <FaUniversity size={28} />,
      color: "#7C3AED",
      gradient: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
      additionalInfo: "Dissertation focused on 'Role of Serotonergic Drugs in Reducing Psychostimulants Sensitization' with groundbreaking findings in addiction treatment."
    },
    {
      title: "Assistant Professor",
      subtitle: "Incharge Department of Pharmacology",
      organization: "FUUAST",
      year: "Present",
      category: "professional",
      description: "Leading pharmacy department and overseeing academic programs, research initiatives, and curriculum development.",
      icon: <FaCertificate size={28} />,
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
      additionalInfo: "Responsible for strategic development of pharmacy education, faculty development, and maintaining academic excellence standards."
    },
    {
      title: "Professional Memberships",
      subtitle: "National Recognition",
      organization: "National Curriculum Board of Pakistan",
      year: "Present",
      category: "professional",
      description: "Active member contributing to national educational standards and curriculum development for pharmaceutical sciences.",
      icon: <FaMedal size={28} />,
      color: "#F59E0B",
      gradient: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
      additionalInfo: "Plays key role in shaping pharmaceutical education policy and standards at national level, ensuring quality and relevance."
    },
    {
      title: "Pharmacy Council Member",
      subtitle: "Regulatory Body",
      organization: "Pharmacy Council of Pakistan",
      year: "Present",
      category: "professional",
      description: "Contributing to regulatory framework and professional standards for pharmacy practice in Pakistan.",
      icon: <FaAward size={28} />,
      color: "#EF4444",
      gradient: "linear-gradient(135deg, #EF4444 0%, #F87171 100%)",
      additionalInfo: "Involved in policy making, licensing standards, and ensuring ethical pharmacy practice across the country."
    },
    {
      title: "Admission Committee",
      subtitle: "Academic Leadership",
      organization: "FUUAST",
      year: "Present",
      category: "professional",
      description: "Leading student admission processes and maintaining academic standards for incoming pharmacy students.",
      icon: <FaUniversity size={28} />,
      color: "#8B5CF6",
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
      additionalInfo: "Ensures fair and merit-based admission processes while maintaining high academic standards for pharmacy programs."
    },
    {
      title: "Research Excellence",
      subtitle: "38+ Publications",
      organization: "International & National Journals",
      year: "1997-Present",
      category: "research",
      description: "Published over 38 research papers in reputable journals with 155+ citations, advancing pharmaceutical sciences.",
      icon: <FaTrophy size={28} />,
      color: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)",
      additionalInfo: "Research spans neuropharmacology, cognitive enhancement, fertility studies, and medicinal plant research with significant academic impact."
    },
    {
      title: "Board of Studies",
      subtitle: "Multiple Universities",
      organization: "FUUAST, Ziauddin, Dewan, JSMU",
      year: "Present",
      category: "academic",
      description: "Serving on multiple university boards, guiding curriculum development and academic policy across institutions.",
      icon: <FaCertificate size={28} />,
      color: "#84CC16",
      gradient: "linear-gradient(135deg, #84CC16 0%, #A3E635 100%)",
      additionalInfo: "Contributing expertise to shape modern pharmacy education across multiple prestigious institutions in Pakistan."
    }
  ];

  return (    <Box 
      id="achievements"
      sx={{ 
        py: { xs: '3rem', sm: '4rem', md: '6rem' },
        backgroundColor: 'var(--background)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.05,
          pointerEvents: 'none',
        }}
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
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
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: '15%',
              right: '10%',
              width: '150px',
              height: '150px',
              borderRadius: '30%',
              background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)',
            }}
          />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              right: '5%',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)',
              opacity: 0.7
            }}
          />
        </motion.div>
      </Box>
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >            <Typography 
              variant="overline" 
              sx={{ 
                letterSpacing: 4, 
                color: 'var(--primary)',
                fontWeight: 600,
                mb: 1,
                display: 'block'
              }}
            >
              CREDENTIALS
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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
              Achievements & Credentials
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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
              A comprehensive overview of academic excellence, professional leadership, and research contributions that define my career in pharmaceutical sciences.
            </Typography></motion.div>
        </Box>
        
        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: 2, 
              mb: 5 
            }}
          >            {filterCategories.map((category) => (
              <motion.div
                key={category.value}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  onClick={() => handleFilterChange(category.value)}
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: '50px',
                    cursor: 'pointer',
                    background: filter === category.value 
                      ? 'linear-gradient(135deg, var(--primary) 0%, #A855F7 100%)' 
                      : 'transparent',
                    color: filter === category.value ? 'white' : 'var(--foreground)',
                    border: '2px solid',
                    borderColor: filter === category.value ? 'transparent' : 'rgba(124, 58, 237, 0.2)',
                    transition: 'all 0.3s ease',
                    fontWeight: filter === category.value ? 600 : 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    boxShadow: filter === category.value ? '0 8px 25px rgba(124, 58, 237, 0.3)' : 'none',
                    '&:hover': {
                      borderColor: 'var(--primary)',
                      boxShadow: '0 5px 15px rgba(124, 58, 237, 0.2)',
                      backgroundColor: filter === category.value ? undefined : 'rgba(124, 58, 237, 0.05)',
                    }
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{category.icon}</span>
                  {category.label}
                  {category.value !== 'all' && (
                    <Box
                      component={motion.div}
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: filter === category.value ? 'rgba(255,255,255,0.2)' : 'var(--primary)',
                        color: filter === category.value ? 'white' : 'white',
                        fontSize: '0.75rem',
                        fontWeight: 700
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {achievements.filter(a => a.category === category.value).length}
                    </Box>
                  )}
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>        {/* Achievements grid */}
        <motion.div
          layout
          transition={{ 
            layout: { duration: 0.6 }
          }}
          style={{ width: '100%' }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)'
              },
              gap: { xs: 2, sm: 3, md: 4 }
            }}
          >
            {getFilteredAchievements().map((achievement, index) => (
              <Box key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                onClick={() => handleAchievementClick(index)}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 0,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: achievement.gradient,
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                      transform: 'translateY(-5px)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)',
                      zIndex: 1
                    }
                  }}
                >
                  {/* Background Pattern */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -50,
                      right: -50,
                      width: 150,
                      height: 150,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.1)',
                      zIndex: 1
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -30,
                      left: -30,
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.05)',
                      zIndex: 1
                    }}
                  />
                  
                  {/* Content */}
                  <Box sx={{ p: 3, position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Header with Icon and Year */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                      >
                        <Box
                          sx={{ 
                            width: 60,
                            height: 60,
                            borderRadius: '16px',
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.3)'
                          }}
                        >
                          {achievement.icon}
                        </Box>
                      </motion.div>
                      
                      <Box
                        sx={{
                          px: 2,
                          py: 0.5,
                          borderRadius: '20px',
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.3)'
                        }}
                      >
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            color: 'white',
                            fontWeight: 600,
                            fontSize: '0.75rem'
                          }}
                        >
                          {achievement.year}
                        </Typography>
                      </Box>
                    </Box>
                    
                    {/* Title and Subtitle */}
                    <Box sx={{ mb: 2, flex: 1 }}>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          mb: 0.5, 
                          fontWeight: 700,
                          fontSize: { xs: '1.1rem', sm: '1.25rem' },
                          color: 'white',
                          lineHeight: 1.3
                        }}
                      >
                        {achievement.title}
                      </Typography>
                      
                      {achievement.subtitle && (
                        <Typography 
                          variant="subtitle1" 
                          sx={{ 
                            mb: 1,
                            color: 'rgba(255,255,255,0.9)',
                            fontWeight: 500,
                            fontSize: '0.9rem'
                          }}
                        >
                          {achievement.subtitle}
                        </Typography>
                      )}
                      
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          mb: 1.5,
                          color: 'rgba(255,255,255,0.8)',
                          fontSize: '0.85rem',
                          fontWeight: 500
                        }}
                      >
                        {achievement.organization}
                      </Typography>
                      
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'rgba(255,255,255,0.9)',
                          fontSize: '0.875rem',
                          lineHeight: 1.5
                        }}
                      >
                        {achievement.description}
                      </Typography>
                    </Box>
                    
                    {/* Expandable Content */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: expandedId === index ? 1 : 0,
                        height: expandedId === index ? 'auto' : 0
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      {expandedId === index && (
                        <Box sx={{ pt: 2, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'rgba(255,255,255,0.95)',
                              fontSize: '0.85rem',
                              lineHeight: 1.6
                            }}
                          >
                            {achievement.additionalInfo}
                          </Typography>
                        </Box>
                      )}
                    </motion.div>
                    
                    {/* Expand Button */}
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        mt: 2,
                        pt: 2,
                        borderTop: expandedId === index ? 'none' : '1px solid rgba(255,255,255,0.2)'
                      }}
                    >
                      <motion.div
                        animate={{ rotate: expandedId === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          color: 'rgba(255,255,255,0.8)',
                          fontSize: '1.2rem',
                          cursor: 'pointer'
                        }}
                      >
                        ▼
                      </motion.div>
                    </Box>
                  </Box>                </Paper>
              </motion.div>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AchievementsSection;