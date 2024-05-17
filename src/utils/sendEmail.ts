import { Email } from '@/components/ui/Email';
import { Resend } from 'resend';

export const sendEmail = async (information) => {
  const resend = new Resend(import.meta.env.PUBLIC_RESEND_API_KEY);

  try {
    const { subject, ...info } = information;

    const { data } = await resend.emails.send({
      from: 'Global Service & Maintenance <onboarding@resend.dev>',
      to: ['kurumi.010730@gmail.com'],
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
