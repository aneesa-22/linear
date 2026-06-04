import { NextResponse } from "next/server";
import { Resend } from "resend";

const enquiryEmail = "hello@linearstudio.co.uk";
const fromEmail = "Linear Studio <hello@linearstudio.co.uk>";
const validProjectTypes = new Set([
  "Website",
  "Brand & Identity",
  "Not sure yet",
]);

type ContactPayload = Readonly<{
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  business?: unknown;
  website?: unknown;
  projectType?: unknown;
  project?: unknown;
}>;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function toHtml(value: string) {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function containsNumber(value: string) {
  return /\d/.test(value);
}

function isValidUrl(value: string) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { message: "Email is not configured yet." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Please submit the form again." },
      { status: 400 },
    );
  }

  const firstName = clean(payload.firstName);
  const lastName = clean(payload.lastName);
  const email = clean(payload.email).toLowerCase();
  const business = clean(payload.business);
  const website = clean(payload.website);
  const projectType = clean(payload.projectType);
  const project = clean(payload.project);

  if (
    !firstName ||
    !lastName ||
    !email ||
    !business ||
    !projectType ||
    !project
  ) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (containsNumber(firstName) || containsNumber(lastName)) {
    return NextResponse.json(
      { message: "First and last name cannot contain numbers." },
      { status: 400 },
    );
  }

  if (website && !isValidUrl(website)) {
    return NextResponse.json(
      { message: "Please enter a valid website URL, or leave it blank." },
      { status: 400 },
    );
  }

  if (!validProjectTypes.has(projectType)) {
    return NextResponse.json(
      { message: "Please choose a valid project type." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);
  const fullName = `${firstName} ${lastName}`;
  const safeFullName = escapeHtml(fullName);
  const safeFirstName = escapeHtml(firstName);

  try {
    const [enquiry, acknowledgement] = await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: enquiryEmail,
        replyTo: email,
        subject: `New Linear Studio enquiry from ${fullName}`,
        text: [
          `Name: ${fullName}`,
          `Email: ${email}`,
          `Business: ${business}`,
          `Website: ${website || "Not provided"}`,
          `Looking for: ${projectType}`,
          "",
          "Project message:",
          project,
        ].join("\n"),
        html: `
          <h1>New Linear Studio enquiry</h1>
          <p><strong>Name:</strong> ${safeFullName}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Business:</strong> ${escapeHtml(business)}</p>
          <p><strong>Website:</strong> ${escapeHtml(website || "Not provided")}</p>
          <p><strong>Looking for:</strong> ${escapeHtml(projectType)}</p>
          <hr />
          <p><strong>Project message:</strong></p>
          <p>${toHtml(project)}</p>
        `,
      }),
      resend.emails.send({
        from: fromEmail,
        to: email,
        replyTo: enquiryEmail,
        subject: "Thanks for getting in touch",
        text: [
          `Hi ${firstName},`,
          "",
          "Thanks for getting in touch.",
          "",
          "We've received your message and will review everything you've sent over.",
          "",
          "We'll be in touch within 1–2 working days.",
          "",
          "In the meantime, if you'd like to add anything else to your enquiry, simply reply to this email.",
          "",
          "Speak soon,",
          "",
          "Linear Studio",
          "",
          "linearstudio.co.uk.",
        ].join("\n"),
        html: `
          <p>Hi ${safeFirstName},</p>
          <p>Thanks for getting in touch.</p>
          <p>We've received your message and will review everything you've sent over.</p>
          <p>We'll be in touch within 1–2 working days.</p>
          <p>In the meantime, if you'd like to add anything else to your enquiry, simply reply to this email.</p>
          <p>Speak soon,</p>
          <p>Linear Studio</p>
          <p>linearstudio.co.uk.</p>
        `,
      }),
    ]);

    if (enquiry.error || acknowledgement.error) {
      return NextResponse.json(
        { message: "Something went wrong sending your enquiry." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong sending your enquiry." },
      { status: 502 },
    );
  }
}
