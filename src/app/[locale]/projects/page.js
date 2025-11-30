"use client";

import React, {useMemo, useState} from "react";
import {Container, Typography, Grid, Box, Tabs, Tab} from "@mui/material";
import ProjectCard from "@/components/ProjectCard";
import {projects, categories} from "@/data/projects";
import {useTranslations} from "next-intl";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const t = useTranslations("projects");

  const categoryLabels = useMemo(
    () =>
      categories.map((category) =>
        category.toLowerCase() === "all"
          ? "All"
          : category
      ),
    []
  );

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const activeCategory = categories[selectedCategory];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          fontWeight="bold"
          sx={{
            background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
            backgroundClip: "text",
            textFillColor: "transparent",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("title")}
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          {t("description")}
        </Typography>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          centered
          textColor="primary"
          indicatorColor="primary"
        >
          {categories.map((category, index) => (
            <Tab key={category} label={categoryLabels[index]} />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {filteredProjects.map((project) => (
          <Grid item size={{ xs: 12, md: 6 }} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>

      {filteredProjects.length === 0 && (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            {t("empty")}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default ProjectsPage;
