export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "votre_service_id",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "votre_template_id",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "votre_public_key",
};
