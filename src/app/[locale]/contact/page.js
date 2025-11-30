"use client";

import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import {useLocale, useTranslations} from "next-intl";
import {useCallback, useMemo, useState} from "react";

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const resetForm = useCallback(() => {
    setValues({ name: "", email: "", company: "", message: "" });
  }, []);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const closeSnackbar = useCallback(() => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  }, []);

  const isPrimaryFieldsMissing = useMemo(() => {
    return !values.name.trim() || !values.email.trim() || !values.message.trim();
  }, [values]);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      if (isPrimaryFieldsMissing) {
        setSnackbar({ open: true, message: t("form.validationError"), severity: "warning" });
        return;
      }

      setSubmitting(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values, locale }),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        setSnackbar({ open: true, message: t("form.success"), severity: "success" });
        resetForm();
      } catch (error) {
        setSnackbar({ open: true, message: t("form.error"), severity: "error" });
      } finally {
        setSubmitting(false);
      }
    },
    [isPrimaryFieldsMissing, locale, resetForm, t, values]
  );

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
              onSubmit={handleSubmit}
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
              <TextField
                label={t("form.name")}
                name="name"
                variant="outlined"
                fullWidth
                required
                value={values.name}
                onChange={handleChange}
              />
              <TextField
                label={t("form.email")}
                name="email"
                variant="outlined"
                type="email"
                fullWidth
                required
                value={values.email}
                onChange={handleChange}
              />
              <TextField
                label={t("form.company")}
                name="company"
                variant="outlined"
                fullWidth
                value={values.company}
                onChange={handleChange}
              />
              <TextField
                label={t("form.message")}
                name="message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
                value={values.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={submitting}
                sx={{
                  alignSelf: { xs: "stretch", sm: "flex-start" },
                  minWidth: 180,
                }}
              >
                {submitting ? (
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <CircularProgress size={18} sx={{ color: "white" }} />
                    <span>{t("form.submit")}</span>
                  </Stack>
                ) : (
                  t("form.submit")
                )}
              </Button>
              <Typography variant="caption" color="text.secondary">
                {t("form.disclaimer")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={closeSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
