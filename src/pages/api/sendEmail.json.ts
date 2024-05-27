export const prerender = false;
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.PUBLIC_RESEND_API_KEY);
const email = import.meta.env.PUBLIC_EMAIL;

const STATUS_OK = 200;
const STATUS_BAD_REQUEST = 400;
const STATUS_INTERNAL_SERVER_ERROR = 500;

const getMessage = (data: any, error: any) => {
  if (data) {
    return { message: data };
  } else {
    return { message: error };
  }
};

const sendEmail = async ({
  html,
  subject,
  text,
}: {
  html: string;
  subject: string;
  text: string;
}) => {
  const send = await resend.emails.send({
    from: 'Global Service & Maintenance <onboarding@resend.dev>',
    to: [email],
    subject,
    html,
    text,
  });

  return send;
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { html, subject, text } = body;

  if (!html || !subject || !text) {
    return new Response(null, {
      status: STATUS_BAD_REQUEST,
      statusText: 'Did not provide the right data',
    });
  }

  const send = await sendEmail({ html, subject, text });

  return new Response(
    JSON.stringify(getMessage(send.data, send.error)),
    {
      status: send.data ? STATUS_OK : STATUS_INTERNAL_SERVER_ERROR,
      statusText: send.data ? 'OK' : 'Internal Server Error',
    }
  );
};
