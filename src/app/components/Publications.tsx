'use client';
import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, TextField, InputAdornment, Chip, Button } from '@mui/material';
import { FaSearch, FaExternalLinkAlt, FaRegFilePdf, FaRegCopy } from 'react-icons/fa';
import { motion } from 'framer-motion';

const publicationData = [
  {
    title: "Fertility-Enhancing Potential of P. amygdalas and J. regia Oil Mixture in Wistar Rats: Male/Female Infertility Models Assessment",
    journal: "Journal of Reproductive Health",
    year: 2023,
    authors: "Kashif, S.S., Naeem, S., Khan, S., Alam, N.",
    doi: "10.1016/j.repro.2023.391272",
    keywords: ["Fertility", "Natural Products", "Reproductive Health"],
    link: "https://www.researchgate.net/publication/391272567_Fertility-Enhancing_Potential_of_P_amygdalas_and_J_regia_Oil_Mixture_in_Wistar_Rats_MaleFemale_Infertility_Models_Assessment",
    cited: 8
  },
  {
    title: "Memory and cognition enhancing effects of combination of Melissa officinalis and Panax ginseng",
    journal: "Journal of Cognitive Enhancement",
    year: 2023,
    authors: "Afshan, H., Khatoon, H., Aziz, A., Alam, N.",
    doi: "10.1007/s41465-023-375433",
    keywords: ["Cognition", "Memory Enhancement", "Natural Products"],
    link: "https://www.researchgate.net/publication/375433722_Memory_and_cognition_enhancing_effects_of_combination_of_Melissa_officinalis_and_Panax_ginseng",
    cited: 15
  },
  {
    title: "Neurochemical Effects of Methylphenidate and Modafinil in Ameliorating Stress-Induced Cognitive Deficits",
    journal: "Neuropharmacology",
    year: 2023,
    authors: "Alam, N., Choudhary, K.",
    doi: "10.1016/j.neuropharm.2023.373785",
    keywords: ["Psychostimulants", "Cognitive Deficits", "Stress"],
    link: "https://www.researchgate.net/publication/373785053_Neurochemical_Effects_of_Methylphenidate_and_Modafinil_in_Ameliorating_Stress-Induced_Cognitive_Deficits",
    cited: 12
  },
  {
    title: "Comparative analysis of antioxidant, antidiabetic and analgesic activity of Callestemon viminalis L. and Alcea rosea L. leaves extracts",
    journal: "Journal of Ethnopharmacology",
    year: 2023,
    authors: "Ahmed, K.Z., Naeem, S., Shafique, Y., Tahir, A., Alam, N.",
    doi: "10.1016/j.jep.2023.369793",
    keywords: ["Antioxidant", "Antidiabetic", "Medicinal Plants"],
    link: "https://www.researchgate.net/publication/369793762_Comparative_analysis_of_antioxidant_antidiabetic_and_analgesic_activity_of_Callestemon_viminalis_L_and_Alcea_rosea_L_leaves_extracts",
    cited: 20
  },
  {
    title: "D2 receptor sensitization: Neurobiological basis of increase sensitivity of stress on stimulant induced behavioural sensitization",
    journal: "Behavioural Brain Research",
    year: 2023,
    authors: "Alam, N., Abbasi, S., Naeem, S.",
    doi: "10.1016/j.bbr.2023.369153",
    keywords: ["D2 Receptors", "Sensitization", "Stress"],
    link: "https://www.researchgate.net/publication/369153429_D2_receptor_sensitization_Neurobiological_basis_of_increase_sensitivity_of_stress_on_stimulant_induced_behavioural_sensitization",
    cited: 9
  },
  {
    title: "Effect of Methylphenidate and buspirone-methylphenidate co-administration on biochemical and hematological parameters in rats: Implications for safe use",
    journal: "Pharmacology Research & Perspectives",
    year: 2021,
    authors: "Alam, N., Ikram, R., Naeem, S., Kashif, S.S.",
    doi: "10.1002/prp2.355955",
    keywords: ["Methylphenidate", "Buspirone", "Drug Interactions"],
    link: "https://www.researchgate.net/publication/355955247_Effect_of_Methylphenidate_and_buspirone-methylphenidate_co-_administration_on_biochemical_and_hematological_parameters_in_rats_Implications_for_safe_and_confrontational_use",
    cited: 31
  }
];

const PublicationsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  
  const allKeywords = [...new Set(publicationData.flatMap(pub => pub.keywords))];
  
  const filteredPublications = publicationData.filter(pub => {
    const matchesSearch = searchTerm === '' || 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesKeywords = selectedKeywords.length === 0 || 
      selectedKeywords.some(keyword => pub.keywords.includes(keyword));
      
    return matchesSearch && matchesKeywords;
  });
  
  const handleKeywordToggle = (keyword) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter(k => k !== keyword));
    } else {
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
  };
  
  const handleCopyLink = (doi) => {
    navigator.clipboard.writeText(`https://doi.org/${doi}`);
    // In real app, add toast notification here
  };

  return (
    <Box 
      id="publications"
      sx={{ 
        py: { xs: '4rem', md: '6rem' },
        backgroundColor: 'var(--background)',
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
              PUBLICATIONS
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
              Academic & Research Papers
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
              Explore my academic contributions to the field through published research papers.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ mb: 5 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <TextField 
                  fullWidth
                  placeholder="Search publications by title, author, or journal"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaSearch />
                      </InputAdornment>
                    ),
                    sx: { 
                      borderRadius: '50px',
                      backgroundColor: 'var(--card)',
                      '& fieldset': {
                        borderColor: 'rgba(124, 58, 237, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'var(--primary) !important',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'var(--primary) !important',
                      }
                    }
                  }}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                  Publications: <strong>{filteredPublications.length}</strong> of {publicationData.length}
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {allKeywords.map((keyword, index) => (
            <motion.div
              key={keyword}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Chip 
                label={keyword}
                clickable
                color={selectedKeywords.includes(keyword) ? "primary" : "default"}
                onClick={() => handleKeywordToggle(keyword)}
                sx={{ 
                  fontWeight: 500,
                  '&.MuiChip-colorPrimary': {
                    background: 'var(--primary)',
                  }
                }}
              />
            </motion.div>
          ))}
        </Box>

        <Box>
          <Grid container spacing={3}>
            {filteredPublications.map((publication, index) => (
              <Grid item xs={12} key={publication.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card 
                    elevation={0} 
                    sx={{ 
                      borderRadius: '12px',
                      border: '1px solid rgba(124, 58, 237, 0.1)',
                      backgroundColor: 'var(--card)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(124, 58, 237, 0.3)',
                        backgroundColor: 'rgba(124, 58, 237, 0.02)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                          <Typography 
                            variant="h6" 
                            component="h3" 
                            gutterBottom 
                            sx={{ 
                              fontWeight: 600,
                              color: 'var(--foreground)'
                            }}
                          >
                            {publication.title}
                          </Typography>
                          
                          <Typography 
                            variant="body2" 
                            color="text.secondary" 
                            paragraph
                            sx={{ mb: 2 }}
                          >
                            <strong>Authors:</strong> {publication.authors}
                          </Typography>
                          
                          <Typography variant="body2" color="text.secondary">
                            <strong>Published in:</strong> {publication.journal}, {publication.year}
                          </Typography>
                          
                          <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                            <strong>DOI:</strong> {publication.doi}
                          </Typography>
                          
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                            {publication.keywords.map(keyword => (
                              <Chip 
                                key={keyword}
                                label={keyword}
                                size="small"
                                variant="outlined"
                                sx={{ 
                                  borderColor: 'var(--primary)',
                                  color: 'var(--primary)',
                                  fontSize: '0.7rem'
                                }}
                              />
                            ))}
                          </Box>
                        </Grid>
                        
                        <Grid item xs={12} md={4} sx={{ 
                          display: 'flex', 
                          flexDirection: 'column',
                          alignItems: { xs: 'flex-start', md: 'flex-end' },
                          justifyContent: 'space-between',
                        }}>
                          <Box>
                            <Typography 
                              variant="subtitle2" 
                              sx={{ 
                                color: 'var(--primary)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                fontWeight: 600,
                                mb: 2,
                              }}
                            >
                              Citations: {publication.cited}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ display: 'flex', gap: 1, mt: { xs: 2, md: 0 } }}>
                            <Button 
                              variant="outlined" 
                              size="small"
                              startIcon={<FaRegFilePdf />}
                              sx={{ 
                                borderRadius: '20px',
                                borderColor: 'var(--primary)',
                                color: 'var(--primary)',
                                '&:hover': {
                                  borderColor: 'var(--primary)',
                                  backgroundColor: 'rgba(124, 58, 237, 0.05)',
                                }
                              }}
                            >
                              PDF
                            </Button>
                            
                            <Button 
                              variant="outlined" 
                              size="small"
                              startIcon={<FaExternalLinkAlt />}
                              href={publication.link}
                              target="_blank"
                              sx={{ 
                                borderRadius: '20px',
                                borderColor: 'var(--secondary)',
                                color: 'var(--secondary)',
                                '&:hover': {
                                  borderColor: 'var(--secondary)',
                                  backgroundColor: 'rgba(16, 185, 129, 0.05)',
                                }
                              }}
                            >
                              View
                            </Button>
                            
                            <Button
                              variant="outlined"
                              size="small"
                              startIcon={<FaRegCopy />}
                              onClick={() => handleCopyLink(publication.doi)}
                              sx={{ 
                                borderRadius: '20px',
                                borderColor: 'var(--foreground)',
                                color: 'var(--foreground)',
                                opacity: 0.7,
                                '&:hover': {
                                  opacity: 1,
                                  borderColor: 'var(--foreground)',
                                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                }
                              }}
                            >
                              Cite
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
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
              variant="contained"
              size="large" 
              sx={{ 
                background: 'linear-gradient(to right, var(--primary), var(--secondary))',
                px: 4,
                py: 1.2,
                borderRadius: '50px',
                fontWeight: 600,
                '&:hover': {
                  boxShadow: '0 10px 20px rgba(124, 58, 237, 0.3)',
                }
              }}
            >
              View All Publications
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default PublicationsSection;
