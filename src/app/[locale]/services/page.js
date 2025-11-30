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
import {useTranslations} from "next-intl";

const packageIndices = [0, 1, 2];

export default function ServicesPage() {
  const t = useTranslations("servicesPage");

  const packages = packageIndices.map((index) => ({
    title: t(`packages.${index}.title`),
    description: t(`packages.${index}.description`),
    deliverables: [0, 1, 2, 3].map((deliverableIndex) =>
      t(`packages.${index}.deliverables.${deliverableIndex}`)
    ),
  }));

  return (
    <Box component="section" sx={{ backgroundColor: "background.default" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={2} maxWidth={720} mb={6}>
          <Typography variant="overline" color="secondary.main" fontWeight={700} letterSpacing={1.4}>
            {t("sectionLabel")}
          </Typography>
          <Typography variant="h2" fontWeight={700}>
            {t("title")}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t("intro")}
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {packages.map((pack) => (
            <Grid item size={{ xs: 12, md: 4 }} key={pack.title}>
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
                    {t("deliverablesTitle")}
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
