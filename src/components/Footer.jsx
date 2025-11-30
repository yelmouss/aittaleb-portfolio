"use client";

import {Box, Container, Divider, Link as MuiLink, Stack, Typography} from "@mui/material";
import {Link} from "@/i18n/navigation";
import React from "react";
import {useTranslations} from "next-intl";

const Footer = () => {
  const tCommon = useTranslations("common");
  const tContact = useTranslations("contact");
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ backgroundColor: "background.paper", borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" gap={4}>
          <Stack spacing={1.5} maxWidth={360}>
            <Typography variant="h5" fontWeight={700} color="text.primary">
              {tCommon("brand.fullName")}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {tCommon("brand.tagline")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {tContact("location")}
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <Typography variant="subtitle1" fontWeight={600} color="text.primary">
              {tCommon("footer.navigation")}
            </Typography>
            <MuiLink component={Link} href="/" color="text.secondary" underline="hover">
              {tCommon("nav.home")}
            </MuiLink>
            <MuiLink component={Link} href="/projects" color="text.secondary" underline="hover">
              {tCommon("nav.projects")}
            </MuiLink>
            <MuiLink component={Link} href="/about" color="text.secondary" underline="hover">
              {tCommon("nav.about")}
            </MuiLink>
            <MuiLink component={Link} href="/services" color="text.secondary" underline="hover">
              {tCommon("nav.services")}
            </MuiLink>
            <MuiLink component={Link} href="/contact" color="text.secondary" underline="hover">
              {tCommon("nav.contact")}
            </MuiLink>
          </Stack>

          <Stack spacing={1.5} maxWidth={320}>
            <Typography variant="subtitle1" fontWeight={600} color="text.primary">
              {tCommon("footer.portfolioTitle")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {tCommon("footer.portfolioDescription")}
            </Typography>
            <MuiLink
              href="https://www.behance.net/zakariaaittaleb"
              target="_blank"
              rel="noopener noreferrer"
              color="primary.main"
              fontWeight={600}
              underline="hover"
            >
              {tCommon("footer.portfolioLink")}
            </MuiLink>
          </Stack>
        </Stack>

        <Divider sx={{ my: { xs: 4, md: 6 } }} />

        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", md: "center" }} spacing={2}>
          <Typography variant="body2" color="text.secondary">
            {tCommon("footer.rights", { year: currentYear })}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tCommon("footer.availability")}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;