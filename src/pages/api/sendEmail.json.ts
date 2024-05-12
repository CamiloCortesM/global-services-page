export const prerender = false;
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.PUBLIC_RESEND_API_KEY);
const email = import.meta.env.PUBLIC_EMAIL;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { html, subject, text } = body;

  if (!html || !subject || !text) {
    return new Response(null, {
      status: 404,
      statusText: 'Did not provide the right data',
    });
  }

  const send = await resend.emails.send({
    from: 'Global Service & Maintenance <onboarding@resend.dev>',
    to: [email],
    subject,
    html,
    text,
  });

  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      {
        status: 200,
        statusText: 'OK',
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error,
      }),
      {
        status: 500,
        statusText: 'Internal Server Error',
      }
    );
  }
};
