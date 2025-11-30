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
import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";

const serviceIndices = [0, 1, 2];
const processIndices = [0, 1, 2];
const statIndices = [0, 1];

export default function HomePage() {
  const tHome = useTranslations("home");
  const tCommon = useTranslations("common");

  const services = serviceIndices.map((index) => ({
    chip: tHome(`services.items.${index}.chip`),
    title: tHome(`services.items.${index}.title`),
    description: tHome(`services.items.${index}.description`),
  }));

  const process = processIndices.map((index) => ({
    title: tHome(`process.steps.${index}.title`),
    description: tHome(`process.steps.${index}.description`),
  }));

  const stats = statIndices.map((index) => ({
    value: tHome(`stats.${index}.value`),
    description: tHome(`stats.${index}.description`),
  }));

  return (
    <Box component="main" sx={{ backgroundColor: "background.default" }}>
      <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 10 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              <Chip
                label={tHome("chip")}
                color="secondary"
                sx={{ alignSelf: "flex-start", fontWeight: 600, px: 1.5, py: 2 }}
              />
              <Typography variant="h1" sx={{ fontSize: { xs: "2.75rem", md: "3.75rem" } }}>
                {tHome("title")}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540 }}>
                {tHome("description")}
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button component={Link} href="/projects" variant="contained" size="large">
                  {tCommon("cta.viewCases")}
                </Button>
                <Button component={Link} href="/contact" variant="outlined" size="large">
                  {tCommon("cta.bookCall")}
                </Button>
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 4 }} pt={2}>
                {stats.map((stat) => (
                  <Stack key={stat.value}>
                    <Typography variant="h4" fontWeight={700} color="primary.main">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.description}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, md: 5 }}>
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
                {tHome("spotlight.title")}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.85 }}>
                {tHome("spotlight.description")}
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
                  {tHome("spotlight.expertisesTitle")}
                </Typography>
                <Typography variant="body2">{tHome("spotlight.expertisesList")}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 10 } }}>
        <Stack spacing={4}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            spacing={2}
          >
            <Typography variant="h3" fontWeight={700}>
              {tHome("services.title")}
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth={420}>
              {tHome("services.subtitle")}
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {services.map((service) => (
              <Grid item size={{ xs: 12, md: 4 }} key={service.title}>
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
            border: "1px solid rgba(79, 70, 229, 0.12)",
            boxShadow: 1,
          }}
        >
          <Typography variant="h3" fontWeight={700} gutterBottom>
            {tHome("process.title")}
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth={560} mb={4}>
            {tHome("process.subtitle")}
          </Typography>
          <Grid container spacing={4}>
            {process.map((step, index) => (
              <Grid item size={{ xs: 12, md: 4 }} key={step.title}>
                <Stack spacing={2}>
                  <Typography
                    variant="overline"
                    color="secondary.main"
                    fontWeight={600}
                    letterSpacing={1.2}
                  >
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
