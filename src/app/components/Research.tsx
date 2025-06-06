'use client';
import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, Tab, Tabs, Button } from '@mui/material';
import { FaSearch, FaChartBar, FaChartLine, FaBook, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const researchCategories = [
  { 
    id: "current", 
    label: "Current Research",
    projects: [
      {
        title: "Cognitive Enhancement and Memory Research",
        description: "Studying the effects of natural compounds and psychostimulants on memory and cognitive function, with a focus on identifying new therapeutic approaches for cognitive disorders.",
        image: "cognitive-research",
        year: "2022-Present",
        link: "https://www.researchgate.net/publication/375433722_Memory_and_cognition_enhancing_effects_of_combination_of_Melissa_officinalis_and_Panax_ginseng"
      },
      {
        title: "Reproductive Health and Fertility Studies",
        description: "Investigating the fertility-enhancing properties of natural compounds including P. amygdalas and J. regia oils, with particular emphasis on their mechanisms of action in male and female reproductive health.",
        image: "fertility-research",
        year: "2023-Present",
        link: "https://www.researchgate.net/publication/391272567_Fertility-Enhancing_Potential_of_P_amygdalas_and_J_regia_Oil_Mixture_in_Wistar_Rats_MaleFemale_Infertility_Models_Assessment"
      },
      {
        title: "Neurochemical Effects of Psychostimulants",
        description: "Examining how methylphenidate and modafinil affect neurochemical pathways and cognitive function, with a focus on their potential in treating stress-induced cognitive deficits.",
        image: "psychostimulant-research",
        year: "2021-Present",
        link: "https://www.researchgate.net/publication/373785053_Neurochemical_Effects_of_Methylphenidate_and_Modafinil_in_Ameliorating_Stress-Induced_Cognitive_Deficits"
      },
    ]
  },
  { 
    id: "completed", 
    label: "Completed Projects",
    projects: [
      {
        title: "Medicinal Plant Research",
        description: "Comparative analysis of antioxidant, antidiabetic, and analgesic properties of various medicinal plants, identifying new potential therapeutic agents from natural sources.",
        image: "medicinal-plants",
        year: "2020-2023",
        link: "https://www.researchgate.net/publication/369793762_Comparative_analysis_of_antioxidant_antidiabetic_and_analgesic_activity_of_Callestemon_viminalis_L_and_Alcea_rosea_L_leaves_extracts"
      },
      {
        title: "Behavioral Sensitization and Drug Interactions",
        description: "Investigation of drug interactions, particularly focused on how buspirone co-administration affects methylphenidate-induced sensitization, with implications for ADHD treatment.",
        image: "drug-interactions",
        year: "2016-2021",
        link: "https://www.researchgate.net/publication/355955247_Effect_of_Methylphenidate_and_buspirone-methylphenidate_co-_administration_on_biochemical_and_hematological_parameters_in_rats_Implications_for_safe_and_confrontational_use"
      },
      {
        title: "Quantum Computing Applications",
        description: "Explored practical applications of quantum algorithms for solving complex optimization problems.",
        image: "quantum",
        year: "2017-2020",
        link: "#"
      },
    ]
  },
  { 
    id: "funding", 
    label: "Funded Research",
    projects: [
      {
        title: "National Science Foundation Grant",
        description: "$1.5M for research on AI safety and alignment principles in autonomous systems.",
        image: "nsf",
        year: "2022-2025",
        link: "#"
      },
      {
        title: "Industry Partnership",
        description: "$800K partnership with Google Research for developing accessible AI tools for education.",
        image: "industry",
        year: "2021-2023",
        link: "#"
      },
      {
        title: "International Collaboration Grant",
        description: "€1.2M EU research initiative on cross-border data sharing protocols and privacy standards.",
        image: "eu",
        year: "2020-2023",
        link: "#"
      },
    ]
  }
];

const ResearchSection = () => {
  const [activeTab, setActiveTab] = useState("current");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  
  const activeCategory = researchCategories.find(cat => cat.id === activeTab);

  return (
    <Box 
      id="research"
      sx={{ 
        py: { xs: '4rem', md: '6rem' },
        backgroundColor: 'var(--accent)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 6 } }}>
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
              RESEARCH
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
              Research Projects & Interests
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
                color: 'var(--foreground)',
                opacity: 0.9
              }}
            >
              Exploring the frontiers of knowledge through innovative research initiatives.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ mb: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Tabs 
              value={activeTab} 
              onChange={handleTabChange} 
              aria-label="research categories"
              centered
              textColor="primary"
              sx={{
                '.MuiTabs-indicator': {
                  backgroundColor: 'var(--primary)',
                  height: '3px',
                },
                '.MuiTab-root': {
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  minWidth: '120px',
                  mx: 1,
                  color: 'var(--foreground)',
                  opacity: 0.7,
                  transition: 'all 0.3s ease',
                  '&.Mui-selected': {
                    color: 'var(--primary)',
                    opacity: 1
                  }
                }
              }}
            >
              {researchCategories.map((category) => (
                <Tab 
                  key={category.id} 
                  value={category.id} 
                  label={category.label}
                />
              ))}
            </Tabs>
          </motion.div>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Grid container spacing={4}>
            {activeCategory.projects.map((project, index) => (
              <Grid item xs={12} md={4} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="card-hover-effect"
                >
                  <Card 
                    sx={{ 
                      borderRadius: '16px', 
                      overflow: 'hidden',
                      height: '100%',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                    elevation={0}
                  >
                    <Box 
                      sx={{ 
                        height: '180px', 
                        backgroundColor: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* In a real project, we would use images here */}
                      {project.image === 'ai-ethics' && <FaSearch size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'ml-healthcare' && <FaChartBar size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'nlp' && <FaBook size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'data-privacy' && <FaSearch size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'green-computing' && <FaChartLine size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'quantum' && <FaBook size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'nsf' && <FaSearch size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'industry' && <FaChartLine size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'eu' && <FaBook size={60} color="rgba(255,255,255,0.3)" />}
                      
                      <Box 
                        sx={{ 
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                          opacity: 0.9,
                          zIndex: 0,
                        }}
                      />
                      
                      <Typography 
                        variant="h6" 
                        component="div"
                        sx={{
                          color: 'white',
                          fontWeight: 600,
                          zIndex: 1,
                          textAlign: 'center',
                          px: 2,
                        }}
                      >
                        {project.title}
                      </Typography>
                      
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          borderRadius: '20px',
                          px: 1.5,
                          py: 0.5,
                          zIndex: 1,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: 'white' }}>
                          {project.year}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <CardContent sx={{ 
                      p: 3, 
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                      <Typography variant="body1" sx={{ mb: 2, flexGrow: 1 }}>
                        {project.description}
                      </Typography>
                      
                      <Button 
                        variant="text" 
                        endIcon={<FaArrowRight />}
                        sx={{ 
                          alignSelf: 'flex-start',
                          color: 'var(--primary)',
                          fontWeight: 600,
                          padding: 0,
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: 'var(--secondary)',
                          }
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button 
              variant="outlined"
              size="large" 
              sx={{ 
                borderColor: 'var(--primary)',
                color: 'var(--primary)',
                px: 4,
                py: 1.2,
                borderRadius: '50px',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'var(--primary)',
                  backgroundColor: 'rgba(124, 58, 237, 0.05)',
                }
              }}
            >
              View All Research
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default ResearchSection;
