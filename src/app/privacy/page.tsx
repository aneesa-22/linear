import type { Metadata } from "next";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy and cookie information for Linear Studio.",
};

const policySections = [
  {
    number: "01",
    title: "Information We Collect",
    content: [
      'This Privacy Policy applies between you, the User of this Website, and Linear Studio ("Linear", "we", "us", "our"), the owner and provider of this Website. Linear Studio takes the privacy of your information seriously. This Privacy Policy applies to our use of any and all personal information collected by us or provided by you in connection with your use of this Website.',
      '"Data" means collectively all information that you submit to Linear Studio through this Website or that we collect in connection with your use of the Website. "Data Protection Laws" means any applicable law relating to the processing of personal data including UK GDPR, the Data Protection Act 2018 and related legislation. "UK GDPR" means the UK General Data Protection Regulation. "User" or "you" means any individual accessing this Website. "Website" means the website operated by Linear Studio and any related pages or subdomains.',
      "This Privacy Policy applies only to the actions of Linear Studio and Users in relation to this Website. It does not extend to websites linked from this Website, including social media platforms or third-party websites. For the purposes of applicable Data Protection Laws, Linear Studio acts as the Data Controller.",
      "We may collect your name, email address, telephone number if provided, project and enquiry information, budget information, information submitted through contact forms, service selections and preferences, technical information such as browser type, device type and IP address, and Website usage information.",
      "We collect Data when you provide it directly to us and automatically through your use of the Website. Linear Studio may collect information when you complete contact forms, contact us by email, enquire about projects or services, or communicate with us by any other means. When you use the Website, we may automatically collect IP address, browser information, device information, date and time of visits, page usage and interactions, and referral information. This helps us improve website performance and user experience.",
    ],
  },
  {
    number: "02",
    title: "How We Use It",
    content: [
      "We may use your information to respond to enquiries, discuss potential projects, provide services, keep internal records, improve our Website, protect against misuse or fraudulent activity, and comply with legal obligations.",
      "We always have a lawful basis for using your information. In plain terms:",
      "Answering your enquiry and discussing a project — our legitimate interest in responding to people who get in touch, and taking steps at your request before a possible contract.",
      "Providing our services and delivering your project — performing our contract with you.",
      "Invoicing, taking payment, and keeping our records — our legal obligations and our contract.",
      "Running, securing and improving the Website, and understanding how it's used — our legitimate interests, and your consent where cookies require it.",
      "Protecting against misuse or fraud, and meeting legal obligations — our legitimate interests and our legal obligations.",
    ],
  },
  {
    number: "03",
    title: "Cookies",
    content: [
      "This Website may use cookies and similar technologies. Some are essential — the Website needs them to work properly. Others are performance or analytics cookies that help us understand how visitors use the site so we can improve it.",
      "We only set non-essential cookies, such as analytics, with your consent, which we ask for through our cookie banner the first time you visit. You can change or withdraw your consent at any time via the Cookie Settings link in the footer, and you can also control cookies through your browser settings. Blocking some cookies may affect how the Website works.",
    ],
  },
  {
    number: "04",
    title: "Third Parties",
    content: [
      "We may use trusted third-party providers including website hosting providers, analytics providers, email delivery services, form handling providers and operational software tools. These providers process information only where reasonably necessary.",
      "This Website may contain links to external websites including social platforms. We are not responsible for their content or privacy practices. If Linear Studio expands, transfers or restructures its business, information may be transferred as part of that process where legally permitted.",
    ],
  },
  {
    number: "05",
    title: "Your Rights",
    content: [
      "You may have rights including access, correction, deletion, restriction, portability and objection. To exercise these rights please contact hello@linearstudio.co.uk.",
      "If you are dissatisfied with how we process your information, you may contact the UK Information Commissioner's Office.",
    ],
  },
  {
    number: "06",
    title: "Data Retention",
    content: [
      "We retain information only for as long as reasonably necessary for responding to enquiries, project work, legal obligations and operational purposes.",
      "We use reasonable technical and organisational measures to safeguard your information. However, transmission over the internet cannot be guaranteed to be completely secure.",
    ],
  },
  {
    number: "07",
    title: "Contact",
    content: [
      "We reserve the right to update this Privacy Policy at any time. Updates will be posted on this Website.",
      "Questions regarding this Privacy Policy may be sent to hello@linearstudio.co.uk.",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <main className={styles.page} aria-labelledby="privacy-title">
      <section className={styles.hero} data-floating-badge-hero>
        <div className={styles.heroContent}>
          <h1 id="privacy-title">
            PRIVACY
            <br />
            POLICY
          </h1>
          <div className={styles.heroCopy}>
            <p>The boring but important stuff.</p>
            <p>
              We only collect information you choose to send us.
              <br />
              No spam. No selling data. No weird stuff.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.sections}>
        {policySections.map((section) => (
          <section
            className={styles.section}
            aria-labelledby={`privacy-section-${section.number}`}
            key={section.number}
          >
            <p className={styles.number}>{section.number}</p>
            <h2 id={`privacy-section-${section.number}`}>{section.title}</h2>
            <div className={styles.body}>
              {section.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className={styles.questions} aria-label="Privacy questions">
        <p>Questions?</p>
        <a href="mailto:hello@linearstudio.co.uk">
          <span>hello@linearstudio.co.uk</span>
          <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
