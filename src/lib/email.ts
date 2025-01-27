import emailjs from "@emailjs/browser";

// Email configuration
const EMAIL_CONFIG = {
  SERVICE_ID: "service_jz3d31c",
  TEMPLATE_IDS: {
    CONTACT: "template_avspnq3",
    STUDY: "template_sau8r19",
  },
  PUBLIC_KEY: "2CBV5usGCJRMr4WbB",
} as const;

// Type definitions
export type EmailTemplate = keyof typeof EMAIL_CONFIG.TEMPLATE_IDS;

export interface EmailData {
  from_name: string;
  reply_to: string;
  message?: string;
  [key: string]: string | undefined;
}

export async function sendEmail(
  data: EmailData,
  template: EmailTemplate = "CONTACT",
  form?: HTMLFormElement | null,
) {
  if (!form) {
    // Direct send without form reference
    return emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_IDS[template],
      data,
      EMAIL_CONFIG.PUBLIC_KEY,
    );
  }

  // Send with form reference
  return emailjs.sendForm(
    EMAIL_CONFIG.SERVICE_ID,
    EMAIL_CONFIG.TEMPLATE_IDS[template],
    form,
    EMAIL_CONFIG.PUBLIC_KEY,
  );
}
