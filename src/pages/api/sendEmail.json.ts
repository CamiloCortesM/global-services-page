import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const SECRET_KEY = import.meta.env.SECRET_KEY_TURNSTILE || '';
const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { to, from, html, subject, text, cf_turnstile_response } = body;

  let formData = new FormData();

  formData.append('secret', SECRET_KEY);
  formData.append('response', cf_turnstile_response);

  const result = await fetch(url, {
    body: formData,
    method: 'POST',
  });

  const outcome = await result.json();
  if (outcome.success) {
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
  }

  return new Response(null, { status: 403, statusText: 'Forbidden' });
};
