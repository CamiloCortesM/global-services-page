import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const allowedOrigin = 'http://localhost:4321';

export const POST: APIRoute = async ({ params, request }) => {
  const origin = request.headers.get('Origin');
  if (origin !== allowedOrigin) {
    return new Response(null, { status: 403, statusText: 'Forbidden' });
  }
  const body = await request.json();
  const { to, from, html, subject, text } = body;
  if (!to || !from || !html || !subject || !text) {
    return new Response(null, {
      status: 404,
      statusText: 'Did not provide the right data',
    });
  }

  const send = await resend.emails.send({
    from,
    to,
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
