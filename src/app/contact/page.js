"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function ContactPage() {
  return (
    <Box component="section" sx={{ backgroundColor: "background.default" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Typography variant="overline" color="secondary.main" fontWeight={700} letterSpacing={1.4}>
                Contact
              </Typography>
              <Typography variant="h2" fontWeight={700}>
                Démarrons une collaboration.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Disponible pour des projets UI/UX, design systems et accompagnement produit. Décrivez vos objectifs et planifions un échange pour cadrer la mission.
              </Typography>
              <Stack spacing={1.5} mt={2}>
                <Typography variant="subtitle1" fontWeight={600}>
                  Coordonnées
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email : hello@zakaria.design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Behance : behance.net/zakariaaittaleb
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Casablanca, Morocco
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                borderRadius: 4,
                p: { xs: 3, md: 5 },
                backgroundColor: "background.paper",
                border: (theme) => `1px solid rgba(79, 70, 229, 0.1)`,
                boxShadow: 1,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <TextField label="Nom et prénom" name="name" variant="outlined" fullWidth required />
              <TextField label="Email" name="email" variant="outlined" type="email" fullWidth required />
              <TextField label="Entreprise" name="company" variant="outlined" fullWidth />
              <TextField
                label="Parlez-moi de votre projet"
                name="message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
              />
              <Button type="submit" variant="contained" size="large">
                Envoyer la demande
              </Button>
              <Typography variant="caption" color="text.secondary">
                En soumettant ce formulaire, vous acceptez d&apos;être contacté pour discuter de votre projet.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
