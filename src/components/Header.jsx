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
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/projects" },
  { label: "À propos", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
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
        {item.label}
      </Button>
    );
  };

  const drawer = (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight={700} color="primary.main">
          ZA.
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
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
            {item.label}
          </Button>
        ))}
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
                width: 48,
                height: 48,
                borderRadius: 2,
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                color: "white",
                fontWeight: 700,
                letterSpacing: 1,
                fontSize: 18,
                textDecoration: "none",
              }}
            >
              ZA
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={700} color="text.primary">
                Zakaria Ait Taleb
              </Typography>
              <Typography variant="body2" color="text.secondary">
                UI/UX Designer · Disponible en indépendant
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => renderNavButton(item))}
            <Button
              component={Link}
              href="https://www.behance.net/zakariaaittaleb"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
            >
              Portfolio Behance
            </Button>
          </Stack>

          <IconButton
            edge="end"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "flex", md: "none" } }}
            aria-label="open navigation"
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