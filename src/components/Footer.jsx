"use client";

import { Box, Container, Divider, Link as MuiLink, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "background.paper", borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" gap={4}>
          <Stack spacing={1.5} maxWidth={360}>
            <Typography variant="h5" fontWeight={700} color="text.primary">
              Zakaria Ait Taleb
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Disponible en indépendant · UI/UX Designer chez Proxenus
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Casablanca, Morocco
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <Typography variant="subtitle1" fontWeight={600} color="text.primary">
              Navigation
            </Typography>
            <MuiLink component={Link} href="/" color="text.secondary" underline="hover">
              Accueil
            </MuiLink>
            <MuiLink component={Link} href="/projects" color="text.secondary" underline="hover">
              Projets
            </MuiLink>
            <MuiLink component={Link} href="/about" color="text.secondary" underline="hover">
              À propos
            </MuiLink>
            <MuiLink component={Link} href="/services" color="text.secondary" underline="hover">
              Services
            </MuiLink>
            <MuiLink component={Link} href="/contact" color="text.secondary" underline="hover">
              Contact
            </MuiLink>
          </Stack>

          <Stack spacing={1.5} maxWidth={320}>
            <Typography variant="subtitle1" fontWeight={600} color="text.primary">
              Portfolio Behance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Explorez les études de cas détaillées, prototypes interactifs et systèmes de design livrés pour des clients internationaux.
            </Typography>
            <MuiLink
              href="https://www.behance.net/zakariaaittaleb"
              target="_blank"
              rel="noopener noreferrer"
              color="primary.main"
              fontWeight={600}
              underline="hover"
            >
              behance.net/zakariaaittaleb
            </MuiLink>
          </Stack>
        </Stack>

        <Divider sx={{ my: { xs: 4, md: 6 } }} />

        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", md: "center" }} spacing={2}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Zakaria Ait Taleb. Tous droits réservés.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Disponible pour collaborations · hello@zakaria.design
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;