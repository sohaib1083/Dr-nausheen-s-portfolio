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
        title: "Fertility-Enhancing Potential of P. amygdalas and J. regia Oil Mixture",
        description: "Investigating the fertility-enhancing properties of natural compounds including P. amygdalas and J. regia oils, with particular emphasis on their mechanisms of action in male and female reproductive health in Wistar rats infertility models.",
        image: "fertility-research",
        year: "2025 - Present",
        link: "https://www.researchgate.net/publication/391272567_Fertility-Enhancing_Potential_of_P_amygdalas_and_J_regia_Oil_Mixture_in_Wistar_Rats_MaleFemale_Infertility_Models_Assessment"
      },
      {
        title: "Beneficial Effects of Allium Cepa on Reproduction",
        description: "A two-generation study on fecundity and sex hormones examining how Allium Cepa bulb extract affects reproductive performance, investigating its potential as a natural fertility enhancer with focus on hormonal parameters.",
        image: "allium-research",
        year: "2024 - Present",
        link: "https://www.researchgate.net/publication/378967912_The_beneficial_effect_of_Allium_Cepa_bulb_extract_on_reproduction_of_rats_A_two-generation_study_on_fecundity_and_sex_hormones"
      },
      {
        title: "Memory and Cognition Enhancement Research",
        description: "Studying the combinatorial effects of Melissa officinalis and Panax ginseng on cognitive behaviors in albino rats, focusing on learning and memory measurements through various animal behavioral models and cognitive assessments.",
        image: "cognitive-research",
        year: "2023 - Present",
        link: "https://www.researchgate.net/publication/375433722_Memory_and_cognition_enhancing_effects_of_combination_of_Melissa_officinalis_and_Panax_ginseng"
      },
    ]
  },
  { 
    id: "completed", 
    label: "Completed Projects",
    projects: [
      {
        title: "Neurochemical Effects of Methylphenidate and Modafinil",
        description: "Comprehensive study examining how methylphenidate and modafinil affect neurochemical pathways and cognitive function, with particular focus on their potential in treating stress-induced cognitive deficits and behavioral sensitization.",
        image: "psychostimulant-research",
        year: "2020-2023",
        link: "https://www.researchgate.net/publication/373785053_Neurochemical_Effects_of_Methylphenidate_and_Modafinil_in_Ameliorating_Stress-Induced_Cognitive_Deficits"
      },
      {
        title: "Comparative Analysis of Medicinal Plants",
        description: "Comparative analysis of antioxidant, antidiabetic, and analgesic properties of Callestemon viminalis L. and Alcea rosea L. leaves extracts, identifying new potential therapeutic agents from natural sources with focus on phenolic compounds.",
        image: "medicinal-plants",
        year: "2022-2023",
        link: "https://www.researchgate.net/publication/369793762_Comparative_analysis_of_antioxidant_antidiabetic_and_analgesic_activity_of_Callestemon_viminalis_L_and_Alcea_rosea_L_leaves_extracts"
      },
      {
        title: "D2 Receptor Sensitization and Stress Response",
        description: "Investigation of the neurobiological basis of increased sensitivity of stress on stimulant-induced impaired behavioral sensitization, exploring the role of dopamine D2 receptors in stress-stimulant interactions.",
        image: "receptor-research",
        year: "2022-2023",
        link: "https://www.researchgate.net/publication/369076562_D2_receptor_sensitization_Neurobiological_basis_of_increase_sensitivity_of_stress_on_stimulant_induced_impaired_behavioural_sensetization"
      },
      {
        title: "Methylphenidate and Buspirone Drug Interactions",
        description: "Investigation of drug interactions, particularly focused on how buspirone co-administration affects methylphenidate-induced sensitization, with implications for ADHD treatment and behavioral sensitization attenuation.",
        image: "drug-interactions",
        year: "2016-2021",
        link: "https://www.researchgate.net/publication/355955247_Effect_of_Methylphenidate_and_buspirone-methylphenidate_co-_administration_on_biochemical_and_hematological_parameters_in_rats_Implications_for_safe_and_confrontational_use"
      },
      {
        title: "Natural Oils Antioxidant and Analgesic Effects",
        description: "Comparative study of antioxidant and analgesic effects of sesame oil, fish oil and their combination in experimental animal models, investigating traditional uses of these oils for treating joint pain and inflammatory conditions.",
        image: "natural-oils",
        year: "2020-2021",
        link: "https://www.researchgate.net/publication/349730894_Comparative_antioxidant_and_analgesic_effect_of_sesame_oil_fish_oil_and_their_combination_in_experimental_animal_model"
      },
      {
        title: "Stress Potentiation of Psychostimulant Sensitization",
        description: "Research on how repeated restraint stress potentiates methylphenidate and modafinil-induced behavioral sensitization in rats, exploring the interaction between stress exposure and psychostimulant effects.",
        image: "stress-research",
        year: "2018-2020",
        link: "https://www.researchgate.net/publication/338029928_Repeated_restraint_stress_potentiates_methylphenidate_and_modafinil-induced_behavioral_sensitization_in_rats"
      },
    ]
  },
  { 
    id: "publications", 
    label: "Key Publications",
    projects: [
      {
        title: "Haloperidol Effects on Behavioral Sensitization",
        description: "Study on the effects of haloperidol on behavioral sensitization and cognition in methylphenidate and buspirone-methylphenidate co-administered rats, investigating D2 receptor responsiveness and cognitive enhancement.",
        image: "haloperidol-research",
        year: "2018",
        link: "https://www.researchgate.net/publication/327371441_Effect_of_haloperidol_on_behavioral_sensitization_and_cognition_in_methylphenidate_and_buspirone-methylphenidate_co-administered_rats"
      },
      {
        title: "Methylphenidate-Induced Hepatotoxicity Study",
        description: "Investigation of methylphenidate-induced hepatotoxicity in rats and its reduction by buspirone co-administration, examining the potential protective effects and safety implications for long-term ADHD treatment.",
        image: "hepatotoxicity-research",
        year: "2018",
        link: "https://www.researchgate.net/publication/324976800_Methylphenidate-induced_hepatotoxicity_in_rats_and_its_reduction_by_buspirone"
      },
      {
        title: "Buspirone Attenuation of Methylphenidate Effects",
        description: "Comprehensive research on attenuation of methylphenidate-induced sensitization and growth inhibition by buspirone co-administration, with implications for safer long-term psychostimulant therapy in ADHD patients.",
        image: "buspirone-research",
        year: "2016-2017",
        link: "https://www.researchgate.net/publication/315976987_Buspirone_attenuates_methylphenidate-induced_growth_inhibition"
      },
      {
        title: "Cognitive Enhancement Studies with Methylphenidate",
        description: "Investigation of cognitive tolerance and enhancement effects of methylphenidate, examining how buspirone co-administration can maintain cognitive benefits while reducing adverse effects in long-term treatment protocols.",
        image: "cognitive-enhancement",
        year: "2014-2015",
        link: "https://www.researchgate.net/publication/282244561_Attenuation_of_methylphenidate-induced_tolerance_on_cognition_by_buspirone_co-administration"
      },
      {
        title: "Chamomile Tea Hypoglycemic Effects",
        description: "Research on chamomile as a herbal hypoglycemic alternative for conventional medicine, investigating its potential to lower blood sugar levels in hyperglycemia and its mechanisms of action as a natural therapeutic agent.",
        image: "chamomile-research",
        year: "2014",
        link: "https://www.researchgate.net/publication/265212195_Chamomile_tea_Herbal_hypoglycemic_alternative_for_conventional_medicine"
      },
      {
        title: "Prunus amygdalus Oil Laxative Effects",
        description: "In vivo study investigating the laxative effects of Prunus amygdalus oil, exploring its traditional use and therapeutic potential as a natural treatment for digestive health and gastrointestinal disorders.",
        image: "prunus-research",
        year: "2019",
        link: "https://www.researchgate.net/publication/332290571_In_Vivo_Study_on_Laxative_Effect_of_Prunus_amygdalus_Oil"
      },
    ]
  }
];

const ResearchSection = () => {
  const [activeTab, setActiveTab] = useState("current");
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
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
        </Box>        <Box sx={{ mt: 5 }}>
          <Grid container spacing={4}>
            {activeCategory?.projects.map((project, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={project.title}>
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
                    >                      {/* Research category specific icons */}
                      {project.image === 'fertility-research' && <FaSearch size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'allium-research' && <FaChartBar size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'cognitive-research' && <FaBook size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'psychostimulant-research' && <FaChartLine size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'medicinal-plants' && <FaSearch size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'receptor-research' && <FaChartBar size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'drug-interactions' && <FaBook size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'natural-oils' && <FaChartLine size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'stress-research' && <FaSearch size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'haloperidol-research' && <FaChartBar size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'hepatotoxicity-research' && <FaBook size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'buspirone-research' && <FaChartLine size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'cognitive-enhancement' && <FaSearch size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'chamomile-research' && <FaChartBar size={60} color="rgba(255,255,255,0.3)" />}
                      {project.image === 'prunus-research' && <FaBook size={60} color="rgba(255,255,255,0.3)" />}
                      
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
                        onClick={() => window.open(project.link, '_blank')}
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
