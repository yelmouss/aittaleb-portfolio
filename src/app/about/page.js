"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const experienceHighlights = [
  {
    title: "Proxenus",
    subtitle: "Lead UI/UX Designer",
    period: "2022 - Aujourd'hui",
    description:
      "Pilotage du design produit pour des fintechs et plateformes SaaS : refontes complètes, design systems et coordination avec les équipes produit.",
  },
  {
    title: "Freelance",
    subtitle: "Senior Product Designer",
    period: "2019 - 2022",
    description:
      "Accompagnement de startups européennes sur la conception d'onboarding, la structuration des parcours utilisateurs et l'amélioration de la conversion.",
  },
  {
    title: "Workshops & Mentorat",
    subtitle: "Figma · UX Strategy",
    period: "Depuis 2020",
    description:
      "Organisation d'ateliers autour du design ops, de la recherche utilisateur et des handoffs réussis entre design et développement.",
  },
];

export default function AboutPage() {
  return (
    <Box component="section" sx={{ backgroundColor: "background.default" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Typography variant="overline" color="secondary.main" fontWeight={700} letterSpacing={1.4}>
                À propos
              </Typography>
              <Typography variant="h2" fontWeight={700}>
                Designer produit focalisé sur l&apos;impact et la cohérence.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Je conçois des expériences digitales pour des scale-ups, fintechs et produits SaaS. Mon approche combine stratégie produit, design craft et rigueur opérationnelle pour livrer des interfaces élégantes et efficaces.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Basé à Casablanca, je collabore à distance avec des équipes internationales en France, UK et Moyen-Orient. Le design system, la recherche utilisateur et la performance business guident chacune de mes décisions.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                borderRadius: 4,
                p: { xs: 3, md: 5 },
                backgroundColor: "background.paper",
                border: (theme) => `1px solid rgba(79, 70, 229, 0.1)`,
                boxShadow: 1,
              }}
            >
              <Typography variant="h5" fontWeight={700} gutterBottom>
                Parcours & collaborations
              </Typography>
              <Stack spacing={4}>
                {experienceHighlights.map((item) => (
                  <Stack key={item.title} spacing={1.5}>
                    <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                      <Typography variant="h6" fontWeight={700}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.period}
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle1" color="primary.main">
                      {item.subtitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
