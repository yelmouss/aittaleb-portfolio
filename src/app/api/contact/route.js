import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { buildClientEmail, buildOwnerEmail } from "@/lib/emailTemplates";

const requiredEnv = ["GMAIL_USER", "GOOGLE_APP_PASSWORD"];

const missingEnv = requiredEnv.filter((key) => !process.env[key]);

const ownerRecipient =
  process.env.CONTACT_RECIPIENT_EMAIL || process.env.GMAIL_USER || "";

if (missingEnv.length > 0) {
  console.warn(
    `Contact API: missing environment variables -> ${missingEnv.join(", ")}. Emails will fail until these are configured.`
  );
}

const createTransporter = () =>
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

const transporter = createTransporter();

const normalizeText = (value) => (typeof value === "string" ? value.trim() : "");

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const name = normalizeText(body.name);
  const email = normalizeText(body.email);
  const company = normalizeText(body.company);
  const message = normalizeText(body.message);
  const locale = normalizeText(body.locale) || "fr";

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        error: "Missing name, email or message",
      },
      { status: 400 }
    );
  }

  if (missingEnv.length > 0 || !ownerRecipient) {
    return NextResponse.json(
      {
        error: "Email service is not configured",
        missingEnv: missingEnv.length > 0 ? missingEnv : undefined,
      },
      { status: 500 }
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aittaleb.vercel.app";
  const submittedAt = new Date();

  const clientEmail = buildClientEmail({ name, locale, siteUrl });
  const ownerEmail = buildOwnerEmail({
    name,
    email,
    company,
    message,
    locale,
    submittedAt,
    siteUrl,
  });

  try {
    await transporter.sendMail({
      from: `Zakaria Ait Taleb <${process.env.GMAIL_USER}>`,
      to: email,
      subject: clientEmail.subject,
      html: clientEmail.html,
      text: clientEmail.text,
    });

    await transporter.sendMail({
      from: `Zakaria Portfolio <${process.env.GMAIL_USER}>`,
      to: ownerRecipient,
      replyTo: email,
      subject: ownerEmail.subject,
      html: ownerEmail.html,
      text: ownerEmail.text,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API email error", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
      },
      { status: 500 }
    );
  }
}
