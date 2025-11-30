"use client";

import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {useTranslations} from "next-intl";

const experienceIndices = [0, 1, 2];

export default function AboutPage() {
  const t = useTranslations("about");

  const experience = experienceIndices.map((index) => ({
    title: t(`experience.${index}.title`),
    subtitle: t(`experience.${index}.subtitle`),
    period: t(`experience.${index}.period`),
    description: t(`experience.${index}.description`),
  }));

  return (
    <Box component="section" sx={{ backgroundColor: "background.default" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={8}>
          <Grid item size={{ xs: 12, md: 5 }}>
            <Stack spacing={2}>
              <Typography variant="overline" color="secondary.main" fontWeight={700} letterSpacing={1.4}>
                {t("sectionLabel")}
              </Typography>
              <Typography variant="h2" fontWeight={700}>
                {t("title")}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {t("intro")}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {t("body")}
              </Typography>
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                borderRadius: 4,
                p: { xs: 3, md: 5 },
                backgroundColor: "background.paper",
                border: "1px solid rgba(79, 70, 229, 0.1)",
                boxShadow: 1,
              }}
            >
              <Typography variant="h5" fontWeight={700} gutterBottom>
                {t("experienceTitle")}
              </Typography>
              <Stack spacing={4}>
                {experience.map((item) => (
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
