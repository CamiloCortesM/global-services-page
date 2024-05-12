export const prerender = false;
import { Email } from '@/components/ui/Email';
import { Resend } from 'resend';

const email = import.meta.env.PUBLIC_EMAIL

export const sendEmail = async (information) => {
  const resend = new Resend(import.meta.env.PUBLIC_RESEND_API_KEY);
  

  try {
    const { subject, ...info } = information;

    console.log(subject,info)
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
  }
};
