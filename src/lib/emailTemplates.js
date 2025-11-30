const brandPalette = {
  primary: "#4f46e5",
  secondary: "#a855f7",
  textDark: "#0f172a",
  textLight: "#475569",
  border: "#e2e8f0",
  background: "#f8fafc",
};

const localeStrings = {
  fr: {
    clientSubject: "Nous avons bien reçu votre message",
    clientHeadline: "Merci pour votre confiance !",
    clientIntro: (name) =>
      `Bonjour ${name || ""},<br/>Merci d'avoir pris le temps de détailler votre projet.`,
    clientBody:
      "Je reviens vers vous très rapidement afin de planifier un échange et comprendre vos objectifs produit.",
    clientCta: "Découvrir le portfolio",
    clientFooter:
      "À très vite,\nZakaria Ait Taleb – Lead UI/UX Designer",
    ownerSubject: (name) =>
      `Nouveau message de ${name || "contact"}`,
    ownerHeadline: "Nouveau lead inbound",
    ownerIntro:
      "Un formulaire vient d'être soumis depuis le site. Retrouvez ci-dessous les informations partagées.",
    ownerFields: {
      name: "Nom",
      email: "Email",
      company: "Entreprise",
      message: "Message",
      submittedAt: "Reçu le",
    },
    ownerFooter:
      "Répondez sous 24h pour maintenir la dynamique."
  },
  en: {
    clientSubject: "We received your message",
    clientHeadline: "Thanks for reaching out!",
    clientIntro: (name) =>
      `Hi ${name || "there"},<br/>Thanks for sharing more about your project.`,
    clientBody:
      "I'll get back to you shortly to schedule a call and clarify your product goals.",
    clientCta: "View portfolio",
    clientFooter:
      "Speak soon,\nZakaria Ait Taleb – Lead UI/UX Designer",
    ownerSubject: (name) =>
      `New inquiry from ${name || "contact"}`,
    ownerHeadline: "New inbound lead",
    ownerIntro:
      "A contact form has been submitted. Here's what the visitor shared.",
    ownerFields: {
      name: "Name",
      email: "Email",
      company: "Company",
      message: "Message",
      submittedAt: "Received",
    },
    ownerFooter:
      "Follow up within 24 hours to keep the momentum."
  },
};

const defaultLocale = "fr";
const defaultSiteBase = "https://aittaleb.vercel.app";
const supportedLocaleSlugs = ["fr", "en"];

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const computeSiteUrls = (siteUrl, locale) => {
  const normalizedLocale = (locale || defaultLocale).toLowerCase();
  const localeSlug = supportedLocaleSlugs.includes(normalizedLocale)
    ? normalizedLocale
    : defaultLocale;

  const raw = (siteUrl || defaultSiteBase).trim();
  const trimmed = raw.replace(/\/$/, "");
  const suffixMatch = trimmed.match(/\/(fr|en)$/i);

  if (suffixMatch) {
    const suffixLocale = suffixMatch[1].toLowerCase();
    const base = trimmed.slice(0, -suffixMatch[0].length) || defaultSiteBase;
    const localisedUrl =
      suffixLocale === localeSlug ? trimmed : `${base}/${localeSlug}`;
    return {
      base,
      localized: localisedUrl,
      logo: `${base}/zakarialogo.svg`,
    };
  }

  const base = trimmed || defaultSiteBase;
  return {
    base,
    localized: `${base}/${localeSlug}`,
    logo: `${base}/zakarialogo.svg`,
  };
};

const wrapTemplate = ({
  title,
  headline,
  body,
  footer,
  previewText,
  logoUrl,
}) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>${escapeHtml(title)}</title>
      <style>
        body { margin: 0; font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; background: ${brandPalette.background}; }
        a { color: ${brandPalette.primary}; }
      </style>
    </head>
    <body>
      <span style="display:none;visibility:hidden;opacity:0;color:transparent;height:0;width:0;font-size:1px;">${escapeHtml(
        previewText
      )}</span>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${brandPalette.background};padding:32px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="92%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:24px;overflow:hidden;border:1px solid ${brandPalette.border};box-shadow:0 18px 40px rgba(15,23,42,0.08);">
              <tr>
                <td style="padding:32px 40px;background:linear-gradient(135deg, ${brandPalette.primary} 0%, ${brandPalette.secondary} 100%);color:#ffffff;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding-bottom:16px;">
                        <img src="${escapeHtml(
                          logoUrl
                        )}" alt="Zakaria Ait Taleb logo" style="height:40px;display:block;" />
                      </td>
                    </tr>
                    <tr>
                      <td style="font-weight:700;font-size:22px;letter-spacing:0.08em;text-transform:uppercase;">Zakaria Ait Taleb</td>
                    </tr>
                    <tr>
                      <td style="font-size:14px;opacity:0.72;">Lead UI/UX Designer</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:36px 40px 28px;color:${brandPalette.textDark};">
                  <h1 style="margin:0;font-size:26px;line-height:1.3;font-weight:700;color:${brandPalette.textDark};">${escapeHtml(
                    headline
                  )}</h1>
                  <div style="margin-top:18px;font-size:16px;line-height:1.6;color:${brandPalette.textLight};">
                    ${body}
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding:0 40px 36px;color:${brandPalette.textLight};font-size:13px;line-height:1.6;">
                  ${footer}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
};

export const buildClientEmail = ({
  name,
  locale = defaultLocale,
  siteUrl,
}) => {
  const strings = localeStrings[locale] || localeStrings[defaultLocale];
  const urls = computeSiteUrls(siteUrl, locale);
  const ctaHtml = `<div style="margin-top:24px;">
      <a href="${escapeHtml(urls.localized)}" style="display:inline-block;padding:14px 24px;border-radius:999px;background:${brandPalette.primary};color:#ffffff;text-decoration:none;font-weight:600;">${escapeHtml(
    strings.clientCta
  )}</a>
    </div>`;
  const body = `${strings.clientIntro(escapeHtml(name))}<br/><br/>${strings.clientBody}${ctaHtml}`;
  const footer = strings.clientFooter
    .split("\n")
    .map((line) => escapeHtml(line))
    .join("<br/>");

  return {
    subject: strings.clientSubject,
    html: wrapTemplate({
      title: strings.clientSubject,
      headline: strings.clientHeadline,
      body,
      footer,
      previewText: strings.clientSubject,
      logoUrl: urls.logo,
    }),
    text: `${strings.clientHeadline}\n\n${strings.clientIntro(name)}\n\n${strings.clientBody}\n\n${strings.clientFooter.replace(/\\n/g, "\n")}\n${urls.localized}`,
  };
};

export const buildOwnerEmail = ({
  name,
  email,
  company,
  message,
  locale = defaultLocale,
  submittedAt,
  siteUrl,
}) => {
  const strings = localeStrings[locale] || localeStrings[defaultLocale];
  const urls = computeSiteUrls(siteUrl, locale);
  const lines = {
    name: escapeHtml(name || "—"),
    email: escapeHtml(email || "—"),
    company: escapeHtml(company || "—"),
    message: escapeHtml(message || "—").replace(/\n/g, "<br/>") || "—",
    submittedAt: escapeHtml(
      new Intl.DateTimeFormat(locale, {
        dateStyle: "full",
        timeStyle: "short",
      }).format(submittedAt || new Date())
    ),
  };

  const rows = [`name`, `email`, `company`, `message`, `submittedAt`]
    .map((key) => {
      return `<tr>
          <td style="padding:12px 0;border-bottom:1px solid ${brandPalette.border};width:140px;font-weight:600;color:${brandPalette.textDark};">${escapeHtml(
        strings.ownerFields[key]
      )}</td>
          <td style="padding:12px 0;border-bottom:1px solid ${brandPalette.border};color:${brandPalette.textLight};">${lines[key]}</td>
        </tr>`;
    })
    .join("\n");

  const body = `${strings.ownerIntro}<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;border-collapse:collapse;">${rows}</table>`;
  const footer = `${strings.ownerFooter}<br/><br/><a href="${escapeHtml(
    urls.localized
  )}" style="color:${brandPalette.primary};font-weight:600;text-decoration:none;">${escapeHtml(
    urls.localized
  )}</a>`;

  return {
    subject: strings.ownerSubject(name),
    html: wrapTemplate({
      title: strings.ownerSubject(name),
      headline: strings.ownerHeadline,
      body,
      footer,
      previewText: strings.ownerSubject(name),
      logoUrl: urls.logo,
    }),
    text: `${strings.ownerHeadline}\n\n${strings.ownerIntro}\n\n${strings.ownerFields.name}: ${name || "—"}\n${strings.ownerFields.email}: ${
      email || "—"
    }\n${strings.ownerFields.company}: ${company || "—"}\n${strings.ownerFields.message}: ${
      message || "—"
    }\n${strings.ownerFields.submittedAt}: ${lines.submittedAt}\n\n${strings.ownerFooter}\n${urls.localized}`,
  };
};
