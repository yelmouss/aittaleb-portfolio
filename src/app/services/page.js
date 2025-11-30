"use client";

import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const servicePackages = [
  {
    title: "Sprint stratégie produit",
    description:
      "2 semaines pour aligner vision, personas clés et parcours prioritaires. Livrables prêts pour lancer un sprint produit.",
    deliverables: [
      "Audit UX + recommandations",
      "Architecture de l'information",
      "Storyboard & wireframes clés",
      "Roadmap design priorisée",
    ],
  },
  {
    title: "Design system clé en main",
    description:
      "Création ou refonte d'un design system modulaire avec tokens, composants et guidelines pour les équipes produit et tech.",
    deliverables: [
      "Audit de vos interfaces",
      "Bibliothèque de composants Figma",
      "Tokens + naming system",
      "Documentation & handoff",
    ],
  },
  {
    title: "Accompagnement produit continu",
    description:
      "Support mensuel pour itérer, tester et enrichir vos interfaces avec une vision data driven et craft UI.",
    deliverables: [
      "Planning trimestriel",
      "Livraisons hebdomadaires",
      "Tests utilisateurs réguliers",
      "Suivi métriques & optimisation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <Box component="section" sx={{ backgroundColor: "background.default" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={2} maxWidth={720} mb={6}>
          <Typography variant="overline" color="secondary.main" fontWeight={700} letterSpacing={1.4}>
            Services
          </Typography>
          <Typography variant="h2" fontWeight={700}>
            Des offres adaptées à chaque maturité produit.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Je travaille avec des scale-ups, fintechs et SaaS B2B pour délivrer des expériences cohérentes. Chaque collaboration démarre par un diagnostic pour cadrer les objectifs business et UX.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {servicePackages.map((pack) => (
            <Grid item xs={12} md={4} key={pack.title}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    {pack.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={3}>
                    {pack.description}
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Livrables inclus
                  </Typography>
                  <List dense sx={{ pt: 0 }}>
                    {pack.deliverables.map((item) => (
                      <ListItem key={item} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
