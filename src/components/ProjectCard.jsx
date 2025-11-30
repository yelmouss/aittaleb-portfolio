"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Chip,
  Button,
  Box,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useTranslations } from "next-intl";

const ProjectCard = ({ project }) => {
  const tCommon = useTranslations("common");

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="div"
        sx={{
          height: 200,
          backgroundColor: "primary.main",
          //   backgroundImage: `linear-gradient(45deg, #667eea 0%, #764ba2 100%)`,
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" color="white" fontWeight="bold">
          {project.title.charAt(0)}
        </Typography>
      </CardMedia>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2" fontWeight="bold">
          {project.title}
        </Typography>

        <Chip
          label={project.category}
          size="small"
          color="primary"
          sx={{ mb: 2 }}
        />

        <Typography variant="body2" color="text.secondary" paragraph>
          {project.description}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {tCommon("projectCard.technologies")}:
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {project.technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                variant="outlined"
                sx={{ mb: 1 }}
              />
            ))}
          </Stack>
        </Box>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        {project.githubUrl && (
          <Button
            size="small"
            startIcon={<GitHubIcon />}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {tCommon("projectCard.code")}
          </Button>
        )}
        {project.liveUrl && (
          <Button
            size="small"
            startIcon={<OpenInNewIcon />}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
          >
            {tCommon("projectCard.demo")}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
