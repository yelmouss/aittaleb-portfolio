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
import {useTranslations} from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <Box component="section" sx={{ backgroundColor: "background.default" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6}>
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
              <Stack spacing={1.5} mt={2}>
                <Typography variant="subtitle1" fontWeight={600}>
                  {t("detailsTitle")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t("email")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t("behance")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t("location")}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, md: 7 }}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                borderRadius: 4,
                p: { xs: 3, md: 5 },
                backgroundColor: "background.paper",
                border: "1px solid rgba(79, 70, 229, 0.1)",
                boxShadow: 1,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <TextField label={t("form.name")} name="name" variant="outlined" fullWidth required />
              <TextField label={t("form.email")} name="email" variant="outlined" type="email" fullWidth required />
              <TextField label={t("form.company")} name="company" variant="outlined" fullWidth />
              <TextField
                label={t("form.message")}
                name="message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
              />
              <Button type="submit" variant="contained" size="large">
                {t("form.submit")}
              </Button>
              <Typography variant="caption" color="text.secondary">
                {t("form.disclaimer")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
