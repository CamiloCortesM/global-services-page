export const prerender = false;
import { Email } from '@/components/ui/Email';
import { Resend } from 'resend';

const email = import.meta.env.PUBLIC_EMAIL;
const resend = new Resend(import.meta.env.PUBLIC_RESEND_API_KEY);

export const sendEmail = async (information) => {
  try {
    const { subject, ...info } = information;
    const { data } = await resend.emails.send({
      from: 'Global Service & Maintenance <onboarding@resend.dev>',
      to: [email],
      subject,
      react: Email(info),
    });

    if (data) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};

