"use client";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {Link, usePathname} from "@/i18n/navigation";
import React from "react";
import {useTranslations} from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const navItems = [
  { labelKey: "home", href: "/" },
  { labelKey: "projects", href: "/projects" },
  { labelKey: "about", href: "/about" },
  { labelKey: "services", href: "/services" },
  { labelKey: "contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const tCommon = useTranslations("common");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const renderNavButton = (item) => {
    const isActive = pathname === item.href;

    return (
      <Button
        key={item.href}
        component={Link}
        href={item.href}
        color="inherit"
        sx={{
          position: "relative",
          borderRadius: 0,
          fontWeight: 600,
          px: 1.5,
          py: 1,
          color: isActive ? "primary.main" : "text.primary",
          whiteSpace: "nowrap",
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: -12,
            width: "100%",
            height: 3,
            borderRadius: 999,
            transform: isActive ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
            transition: "transform 0.3s ease",
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          },
          "&:hover": {
            color: "primary.main",
            "&::after": {
              transform: "scaleX(1)",
            },
          },
        }}
      >
        {tCommon(`nav.${item.labelKey}`)}
      </Button>
    );
  };

  const drawer = (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight={700} color="primary.main">
          {tCommon("brand.initials")}
        </Typography>
        <IconButton onClick={handleDrawerToggle} aria-label={tCommon("drawer.close")}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Divider sx={{ mb: 2 }} />
      <Stack spacing={2}>
        {navItems.map((item) => (
          <Button
            key={item.href}
            component={Link}
            href={item.href}
            onClick={handleDrawerToggle}
            sx={{
              justifyContent: "flex-start",
              color: pathname === item.href ? "primary.main" : "text.primary",
              fontWeight: 600,
            }}
          >
            {tCommon(`nav.${item.labelKey}`)}
          </Button>
        ))}
        <Box sx={{ pt: 2 }}>
          <LocaleSwitcher />
        </Box>
      </Stack>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", minHeight: 80 }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              component={Link}
              href="/"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 120,
                height: 48,
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src="/zakarialogo.svg"
                alt={tCommon("brand.fullName")}
                sx={{ height: "100%", width: "auto" }}
              />
            </Box>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => renderNavButton(item))}
            <Button
              component="a"
              href="https://www.behance.net/zakariaaittaleb"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{ whiteSpace: "nowrap" }}
            >
              {tCommon("cta.behance")}
            </Button>
            <LocaleSwitcher />
          </Stack>

          <IconButton
            edge="end"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "flex", md: "none" } }}
            aria-label={tCommon("header.drawerTitle")}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;