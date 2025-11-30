"use client";

import React from "react";
import ReactFlagsSelect from "react-flags-select";
import {Box} from "@mui/material";
import {useLocale, useTranslations} from "next-intl";
import {usePathname, useRouter} from "@/i18n/navigation";

const localeToFlag = {
  fr: "FR",
  en: "GB",
};

const flagToLocale = {
  FR: "fr",
  GB: "en",
};

const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const tCommon = useTranslations("common");

  const handleSelect = (code) => {
    const nextLocale = flagToLocale[code];
    if (!nextLocale || nextLocale === locale) {
      return;
    }

    router.replace(pathname, {locale: nextLocale});
    router.refresh();
  };

  const selected = localeToFlag[locale] ?? "FR";
  const currentLabel = tCommon(`locale.${locale}`);

  return (
    <Box
      sx={{
        minWidth: 160,
        "& [class*='ReactFlagsSelect-module_selectBtn']": {
          backgroundColor: (theme) => theme.palette.background.paper,
          borderRadius: 999,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          padding: "6px 16px",
          boxShadow: "none",
          color: (theme) => theme.palette.text.primary,
          fontWeight: 600,
        },
        "& [class*='ReactFlagsSelect-module_selectValue'] span": {
          color: (theme) => theme.palette.text.primary,
        },
        "& [class*='ReactFlagsSelect-module_selectBtn']:hover": {
          backgroundColor: (theme) => theme.palette.action.hover,
        },
        "& [class*='ReactFlagsSelect-module_selectDropdown']": {
          borderRadius: 16,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          boxShadow: (theme) => theme.shadows[2],
        }
      }}
    >
      <ReactFlagsSelect
        countries={Object.values(localeToFlag)}
        customLabels={{
          FR: tCommon("locale.fr"),
          GB: tCommon("locale.en"),
        }}
        selected={selected}
        onSelect={handleSelect}
        selectedSize={16}
        optionsSize={16}
        placeholder={currentLabel}
        showSelectedLabel
        showSecondaryOptionLabel
        fullWidth={true}
        className="locale-selector"
        aria-label={tCommon("languageSwitcher.aria")}
      />
    </Box>
  );
};

export default LocaleSwitcher;
