"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

const services = [
  {
    title: "Product Design complet",
    description:
      "Discovery, wireframes haute fidélité, prototypes interactifs et tests utilisateurs pour des produits fintech et SaaS.",
    chip: "End-to-end",
  },
  {
    title: "Design Systems",
    description:
      "Création de systèmes de design scalables, documentation Figma et design tokens prêts pour vos équipes produit.",
    chip: "Ops & Scale",
  },
  {
    title: "Brand UI & Stratégie",
    description:
      "Identité visuelle cohérente, guidelines UI et kits marketing pour renforcer votre présence digitale.",
    chip: "Branding",
  },
];

const process = [
  {
    title: "Alignement & Insights",
    description:
      "Ateliers d'alignement, définition des KPI produit et analyse des parcours actuels pour cadrer chaque mission.",
  },
  {
    title: "Conception & Prototype",
    description:
      "Wireframes rapides, UI kit modulaire et prototypes interactifs testés auprès de vos segments clés.",
  },
  {
    title: "Livraison & Handoff",
    description:
      "Design tokens, specs détaillées, vidéos de motion et support auprès des équipes produit et dev.",
  },
];

export default function Home() {
  return (
    <Box component="main" sx={{ backgroundColor: "background.default" }}>
      <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 10 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              <Chip
                label="Zakaria Ait Taleb · UI/UX Designer indépendant"
                color="secondary"
                sx={{ alignSelf: "flex-start", fontWeight: 600, px: 1.5, py: 2 }}
              />
              <Typography variant="h1" sx={{ fontSize: { xs: "2.75rem", md: "3.75rem" } }}>
                Concevoir des interfaces premium pour les produits fintech et SaaS.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540 }}>
                Disponible pour des missions internationales avec Proxenus. Je transforme la stratégie produit en expériences digitales mesurables et élégantes : design systems, onboarding performants et dashboards intelligents.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button component={Link} href="/projects" variant="contained" size="large">
                  Voir les études de cas
                </Button>
                <Button component={Link} href="/contact" variant="outlined" size="large">
                  Programmer un appel
                </Button>
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 4 }} pt={2}>
                <Stack>
                  <Typography variant="h4" fontWeight={700} color="primary.main">
                    +18
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Produits livrés pour des scale-ups et fintech.
                  </Typography>
                </Stack>
                <Stack>
                  <Typography variant="h4" fontWeight={700} color="primary.main">
                    6 ans
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    d&apos;expérience en design produit et design systems.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 6,
                p: 4,
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                color: "white",
                boxShadow: 3,
                overflow: "hidden",
              }}
            >
              <Typography variant="h5" fontWeight={700} mb={2}>
                Casablanca → Worldwide
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.85 }}>
                Basé à Casablanca, j&apos;accompagne les équipes produit de Paris, Londres et Dubai sur des problématiques de croissance, d&apos;acquisition et de design system.
              </Typography>
              <Box
                sx={{
                  mt: 4,
                  pt: 3,
                  borderTop: "1px solid rgba(255,255,255,0.25)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography variant="subtitle2" sx={{ textTransform: "uppercase", letterSpacing: 1.5 }}>
                  Expertises clés
                </Typography>
                <Typography variant="body2">
                  Design Systems · Product Strategy · Motion UI · User Research
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 10 } }}>
        <Stack spacing={4}>
          <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", md: "center" }} spacing={2}>
            <Typography variant="h3" fontWeight={700}>
              Services sur-mesure
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth={420}>
              Chaque mission démarre par un audit rapide pour livrer un accompagnement ciblé : de la vision produit à la livraison design/dev.
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {services.map((service) => (
              <Grid item xs={12} md={4} key={service.title}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Chip label={service.chip} color="primary" size="small" sx={{ mb: 2 }} />
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>

      <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            borderRadius: 6,
            p: { xs: 4, md: 6 },
            backgroundColor: "background.paper",
            border: (theme) => `1px solid rgba(79, 70, 229, 0.12)`,
            boxShadow: 1,
          }}
        >
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Méthodologie en trois temps
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth={560} mb={4}>
            Une approche itérative reliant stratégie produit, data et design craft pour livrer des interfaces performantes.
          </Typography>
          <Grid container spacing={4}>
            {process.map((step, index) => (
              <Grid item xs={12} md={4} key={step.title}>
                <Stack spacing={2}>
                  <Typography variant="overline" color="secondary.main" fontWeight={600} letterSpacing={1.2}>
                    {`0${index + 1}`}
                  </Typography>
                  <Typography variant="h5" fontWeight={700}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
