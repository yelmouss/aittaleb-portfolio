"use client";

import React, { useState } from "react";
import { Container, Typography, Grid, Box, Tabs, Tab } from "@mui/material";
import ProjectCard from "@/components/ProjectCard";
import { projects, categories } from "@/data/projects";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const filteredProjects =
    selectedCategory === 0
      ? projects
      : projects.filter(
          (project) => project.category === categories[selectedCategory]
        );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          fontWeight="bold"
          sx={{
            background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Études de cas
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Une sélection de projets UI/UX menés pour des acteurs fintech et tech en croissance
        </Typography>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs 
          value={selectedCategory} 
          onChange={handleCategoryChange}
          centered
          textColor="primary"
          indicatorColor="primary"
        >
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={6} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>

      {filteredProjects.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            Aucun projet dans cette catégorie
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default ProjectsPage;