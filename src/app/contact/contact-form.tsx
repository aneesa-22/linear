"use client";

import { FormEvent, useState } from "react";
import styles from "./contact.module.css";

const projectTypes = ["Website", "Brand & Identity", "Not sure yet"] as const;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const numberPattern = /\d/;

type SubmitState =
  | { status: "idle"; message: "" }
  | { status: "success" | "error"; message: string };

type ContactFormProps = Readonly<{
  lowercase?: boolean;
}>;

export function ContactForm({ lowercase = false }: ContactFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const firstName = getValue(formData, "firstName");
    const lastName = getValue(formData, "lastName");
    const email = getValue(formData, "email");
    const business = getValue(formData, "business");
    const website = getValue(formData, "website");
    const projectType = getValue(formData, "projectType");
    const project = getValue(formData, "project");

    const validationMessage = getValidationMessage({
      firstName,
      lastName,
      email,
      business,
      website,
      projectType,
      project,
    });

    if (validationMessage) {
      setSubmitState({ status: "error", message: validationMessage });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ status: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          business,
          website,
          projectType,
          project,
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Something went wrong.");
      }

      form.reset();
      setSubmitState({
        status: "success",
        message: "Thanks. Your enquiry has been sent.",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className={styles.form}
      aria-label="Contact Linear Studio"
      onSubmit={handleSubmit}
    >
      <div className={styles.twoColumn}>
        <FormField
          id="firstName"
          label={lowercase ? "first name" : "First name"}
          autoComplete="given-name"
          pattern="[^0-9]*"
          required
        />
        <FormField
          id="lastName"
          label={lowercase ? "last name" : "Last name"}
          autoComplete="family-name"
          pattern="[^0-9]*"
          required
        />
      </div>

      <FormField
        id="email"
        label={lowercase ? "email" : "Email"}
        type="email"
        autoComplete="email"
        required
      />

      <FormField
        id="business"
        label={lowercase ? "business" : "Business"}
        autoComplete="organization"
        required
      />

      <FormField
        id="website"
        label={lowercase ? "website (optional)" : "Website (optional)"}
        type="url"
        autoComplete="url"
      />

      <fieldset className={styles.projectGroup}>
        <legend className={styles.legend}>
          {lowercase
            ? "what are you looking for?"
            : "What are you looking for?"}
        </legend>

        <div className={styles.projectOptions}>
          {projectTypes.map((projectType) => (
            <label className={styles.projectOption} key={projectType}>
              <input
                className={styles.projectRadio}
                type="radio"
                name="projectType"
                value={projectType}
                required
              />
              <span>{lowercase ? projectType.toLowerCase() : projectType}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className={styles.textareaField} htmlFor="project">
        <span className={styles.label}>
          {lowercase
            ? "tell us about your project"
            : "Tell us about your project"}
        </span>
        <textarea
          id="project"
          name="project"
          className={styles.textarea}
          rows={8}
          required
        />
      </label>

      <div className={styles.submitArea}>
        <button
          className={styles.submitButton}
          type="submit"
          disabled={isSubmitting}
        >
          <span>
            {isSubmitting
              ? lowercase
                ? "sending"
                : "Sending"
              : lowercase
                ? "send message"
                : "Send message"}
          </span>
          <span className={styles.submitArrow} aria-hidden="true">
            ↗
          </span>
        </button>
      </div>

      <p
        className={`${styles.statusMessage} ${
          submitState.status === "error" ? styles.statusError : ""
        }`}
        aria-live="polite"
      >
        {submitState.message}
      </p>
    </form>
  );
}

type FormFieldProps = Readonly<{
  id: string;
  label: string;
  type?: "email" | "text" | "url";
  autoComplete?: string;
  pattern?: string;
  required?: boolean;
}>;

function FormField({
  id,
  label,
  type = "text",
  autoComplete,
  pattern,
  required = false,
}: FormFieldProps) {
  return (
    <label className={styles.field} htmlFor={id}>
      <span className={styles.label}>{label}</span>
      <input
        id={id}
        name={id}
        className={styles.input}
        type={type}
        autoComplete={autoComplete}
        pattern={pattern}
        required={required}
        title={pattern ? "Names cannot contain numbers." : undefined}
      />
    </label>
  );
}

type ContactValues = Readonly<{
  firstName: string;
  lastName: string;
  email: string;
  business: string;
  website: string;
  projectType: string;
  project: string;
}>;

function getValue(formData: FormData, name: keyof ContactValues) {
  const value = formData.get(name);

  return typeof value === "string" ? value.trim() : "";
}

function getValidationMessage(values: ContactValues) {
  if (
    !values.firstName ||
    !values.lastName ||
    !values.email ||
    !values.business ||
    !values.projectType ||
    !values.project
  ) {
    return "Please complete all required fields.";
  }

  if (
    numberPattern.test(values.firstName) ||
    numberPattern.test(values.lastName)
  ) {
    return "First and last name cannot contain numbers.";
  }

  if (!emailPattern.test(values.email)) {
    return "Please enter a valid email address.";
  }

  if (values.website && !isValidUrl(values.website)) {
    return "Please enter a valid website URL, or leave it blank.";
  }

  return "";
}

function isValidUrl(value: string) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}
