"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import Image from "next/image";
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
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * custom,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      delay: 0.08 * custom,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const CountingBadge = ({ stepIndex }) => {
  const badgeRef = useRef(null);
  const isInView = useInView(badgeRef, { once: true, amount: 0.8 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, stepIndex + 1, {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
    return undefined;
  }, [isInView, stepIndex]);

  const formattedValue = value < 10 ? `0${value}` : `${value}`;

  return (
    <Box
      ref={badgeRef}
      component={motion.div}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={value > 0 ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.85 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      sx={{
        position: "relative",
        width: { xs: 88, md: 104 },
        height: { xs: 88, md: 104 },
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
        boxShadow: 5,
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: 160,
          height: 160,
          borderRadius: "50%",
          top: -80,
          right: -60,
          backgroundColor: "rgba(255,255,255,0.18)",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: 140,
          height: 140,
          borderRadius: "50%",
          bottom: -70,
          left: -60,
          backgroundColor: "rgba(255,255,255,0.12)",
        }}
      />
      <Typography
        component={motion.span}
        key={formattedValue}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        sx={{
          fontSize: { xs: "2.75rem", md: "3.25rem" },
          fontWeight: 700,
          letterSpacing: 2,
          color: "white",
        }}
      >
        {formattedValue}
      </Typography>
    </Box>
  );
};

export default function HomePage() {
  const tHome = useTranslations("home");
  const tCommon = useTranslations("common");

  const services = tHome.raw("services.items") ?? [];
  const process = tHome.raw("process.steps") ?? [];
  const stats = tHome.raw("stats") ?? [];
  const heroPoints = tHome.raw("heroPoints") ?? [];
  const highlights = tHome.raw("highlights.items") ?? [];
  const principles = tHome.raw("principles.items") ?? [];

  return (
    <Box component="main" sx={{ backgroundColor: "background.default" }}>
      <Container
        maxWidth="lg"
        sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 10 } }}
        component={motion.section}
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid item size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              <Box component={motion.div} variants={fadeInUp} custom={0}>
                <Chip
                  label={tHome("chip")}
                  color="secondary"
                  sx={{
                    alignSelf: "flex-start",
                    fontWeight: 600,
                    px: 1.5,
                    py: 2,
                  }}
                />
              </Box>
              <Typography
                component={motion.h1}
                variants={fadeInUp}
                custom={1}
                variant="h1"
                sx={{ fontSize: { xs: "2.75rem", md: "3.75rem" } }}
              >
                {tHome("title")}
              </Typography>
              <Typography
                component={motion.p}
                variants={fadeInUp}
                custom={2}
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 540 }}
              >
                {tHome("description")}
              </Typography>
              {heroPoints.length > 0 && (
                <Stack
                  component={motion.ul}
                  variants={fadeInUp}
                  custom={3}
                  spacing={1.5}
                  sx={{
                    listStyle: "none",
                    p: 0,
                    m: 0,
                    maxWidth: 560,
                  }}
                >
                  {heroPoints.map((point, index) => (
                    <Box
                      key={`hero-point-${index}`}
                      component={motion.li}
                      variants={fadeInUp}
                      custom={3 + index * 0.5}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          mt: 0.75,
                          background: (theme) =>
                            `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        }}
                      />
                      <Typography variant="body1" color="text.primary">
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              )}
              <Typography
                component={motion.p}
                variants={fadeInUp}
                custom={4}
                variant="subtitle1"
                color="text.primary"
                sx={{ maxWidth: 520, fontWeight: 600 }}
              >
                {tHome("signature")}
              </Typography>
              <Stack
                component={motion.div}
                variants={fadeInUp}
                custom={5}
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
              >
                <Button
                  component={Link}
                  href="/projects"
                  variant="contained"
                  size="large"
                >
                  {tCommon("cta.viewCases")}
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  size="large"
                >
                  {tCommon("cta.bookCall")}
                </Button>
              </Stack>
              <Stack
                component={motion.div}
                variants={fadeInUp}
                custom={6}
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 2, sm: 4 }}
                pt={2}
              >
                {stats.map((stat, index) => (
                  <Stack key={`stat-${index}`}>
                    <Typography
                      variant="h4"
                      fontWeight={700}
                      color="primary.main"
                    >
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
            <Stack spacing={3}>
              <Box
                component={motion.div}
                variants={fadeIn}
                custom={0}
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  p: { xs: 1.25, md: 1.75 },
                  background: (theme) =>
                    `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  boxShadow: 6,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
               
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    width: "100%",
                    paddingTop: { xs: "125%", md: "118%" },
                    overflow: "hidden",
                  }}
                >
                  <Box
                    aria-hidden
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.28) 100%)",
                      zIndex: 1,
                    }}
                  />
                  <Image
                    src="/Cover 01.jpg"
                    alt={tHome("photoSpotlight.caption")}
                    fill                    
                    priority
                    style={{ objectFit: "cover" }}
                  />
                  <Box
                    aria-hidden
                    sx={{
                      position: "absolute",
                      width: 180,
                      height: 180,
                      borderRadius: "50%",
                      top: -90,
                      right: -70,
                      backgroundColor: "rgba(255,255,255,0.18)",
                    }}
                  />
                  <Box
                    aria-hidden
                    sx={{
                      position: "absolute",
                      width: 260,
                      height: 260,
                      borderRadius: "45%",
                      bottom: -150,
                      left: -70,
                      background: "rgba(255,255,255,0.12)",
                    }}
                  />
                </Box>
               
              </Box>
              <Box
                component={motion.div}
                variants={fadeInUp}
                custom={1}
                sx={{
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
                  <Typography
                    variant="subtitle2"
                    sx={{ textTransform: "uppercase", letterSpacing: 1.5 }}
                  >
                    {tHome("spotlight.expertisesTitle")}
                  </Typography>
                  <Typography variant="body2">
                    {tHome("spotlight.expertisesList")}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth="lg"
        sx={{ pb: { xs: 6, md: 10 } }}
        component={motion.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <Stack spacing={4}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            spacing={2}
            component={motion.div}
            variants={fadeInUp}
            custom={0}
          >
            <Typography variant="h3" fontWeight={700}>
              {tHome("highlights.title")}
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth={420}>
              {tHome("highlights.subtitle")}
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {highlights.map((highlight, index) => (
              <Grid item size={{ xs: 12, md: 4 }} key={highlight.title}>
                <Card
                  component={motion.div}
                  variants={fadeInUp}
                  custom={index + 1}
                  sx={{ height: "100%", boxShadow: 2 }}
                >
                  <CardContent>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      {highlight.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {highlight.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>

      <Container
        maxWidth="lg"
        sx={{ pb: { xs: 6, md: 10 } }}
        component={motion.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
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
            {services.map((service, index) => (
              <Grid item size={{ xs: 12, md: 4 }} key={service.title}>
                <Card
                  component={motion.div}
                  variants={fadeInUp}
                  custom={index}
                  sx={{ height: "100%" }}
                >
                  <CardContent>
                    <Chip
                      label={service.chip}
                      color="primary"
                      size="small"
                      sx={{ mb: 2 }}
                    />
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

      <Container
        maxWidth="lg"
        sx={{ pb: { xs: 8, md: 12 } }}
        component={motion.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <Box
          sx={{
            borderRadius: 6,
            p: { xs: 4, md: 6 },
            backgroundColor: "background.paper",
            border: "1px solid rgba(79, 70, 229, 0.12)",
            boxShadow: 1,
          }}
          component={motion.div}
          variants={fadeInUp}
          custom={0}
        >
          <Typography variant="h3" fontWeight={700} gutterBottom>
            {tHome("process.title")}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth={560}
            mb={4}
          >
            {tHome("process.subtitle")}
          </Typography>
          <Grid container spacing={4}>
            {process.map((step, index) => (
              <Grid item size={{ xs: 12, md: 4 }} key={step.title}>
                <Box
                  component={motion.div}
                  variants={fadeInUp}
                  custom={index + 1}
                  sx={{
                    position: "relative",
                    borderRadius: 5,
                    p: { xs: 3, md: 4 },
                    height: "100%",
                    overflow: "hidden",
                    backgroundColor: "background.paper",
                    border: "1px solid rgba(79, 70, 229, 0.18)",
                    boxShadow: 2,
                  }}
                >
                  <Box
                    aria-hidden
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: (theme) =>
                        `radial-gradient(circle at top right, ${theme.palette.secondary.main}22 0%, transparent 55%)`,
                    }}
                  />
                  <Box
                    aria-hidden
                    sx={{
                      position: "absolute",
                      width: 180,
                      height: 180,
                      borderRadius: "50%",
                      bottom: -90,
                      left: -60,
                      background: (theme) =>
                        `linear-gradient(135deg, ${theme.palette.primary.main}22 0%, transparent 70%)`,
                    }}
                  />
                  <Stack spacing={2.5} sx={{ position: "relative", zIndex: 1 }}>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={{ xs: 2, sm: 3 }}
                      alignItems={{ xs: "flex-start", sm: "center" }}
                    >
                      <CountingBadge stepIndex={index} />
                      <Stack spacing={1}>
                        <Typography
                          variant="overline"
                          color="secondary.main"
                          fontWeight={700}
                          letterSpacing={1.6}
                        >
                          {`0${index + 1}`}
                        </Typography>
                        <Typography variant="h5" fontWeight={700}>
                          {step.title}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Container
        maxWidth="lg"
        sx={{ pb: { xs: 10, md: 14 } }}
        component={motion.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <Grid container spacing={4}>
          <Grid item size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              <Typography
                component={motion.h2}
                variants={fadeInUp}
                custom={0}
                variant="h3"
                fontWeight={700}
              >
                {tHome("principles.title")}
              </Typography>
              <Typography
                component={motion.p}
                variants={fadeInUp}
                custom={1}
                variant="body1"
                color="text.secondary"
                maxWidth={520}
              >
                {tHome("principles.intro")}
              </Typography>
              <Stack spacing={3}>
                {principles.map((principle, index) => (
                  <Box
                    key={principle.title}
                    component={motion.div}
                    variants={fadeInUp}
                    custom={index + 2}
                    sx={{
                      borderLeft: (theme) =>
                        `3px solid ${theme.palette.primary.main}`,
                      pl: 3,
                    }}
                  >
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      {principle.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {principle.description}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, md: 5 }}>
            <Card
              component={motion.div}
              variants={fadeInUp}
              custom={1}
              sx={{
                height: "100%",
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                color: "white",
                boxShadow: 4,
              }}
            >
              <CardContent
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                <Typography variant="h5" fontWeight={700}>
                  {tHome("principles.ctaTitle")}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.85 }}>
                  {tHome("principles.ctaDescription")}
                </Typography>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  color="inherit"
                  sx={{
                    alignSelf: { xs: "stretch", md: "flex-start" },
                    color: "primary.main",
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.92)",
                    },
                  }}
                >
                  {tHome("principles.ctaButton")}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
