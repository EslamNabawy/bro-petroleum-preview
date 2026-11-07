import type { APIRoute } from 'astro';
import { getText, isConfigured, json, rateLimited, recipients, reference, sendMail, validEmail } from './_mail';

export const POST: APIRoute = async ({ request }) => {
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('multipart/form-data') && !contentType.includes('application/x-www-form-urlencoded')) return json({ message: 'Use the website form to submit an RFQ.' }, 400);
  const data = await request.formData();
  if (rateLimited(request)) return json({ message: 'Please wait before sending another request.' }, 429);
  if (getText(data, 'website')) return json({ message: 'Request rejected.' }, 400);
  const company = getText(data, 'company');
  const contactName = getText(data, 'contactName');
  const email = getText(data, 'email');
  const phone = getText(data, 'phone');
  const service = getText(data, 'service');
  const rigClass = getText(data, 'rigClass');
  const location = getText(data, 'location');
  const startDate = getText(data, 'startDate');
  const requirements = getText(data, 'requirements');
  if ([company, contactName, email, phone, service, location, requirements].some((value) => !value) || !validEmail(email)) return json({ message: 'Complete every required field with a valid email address.' }, 400);
  const recipient = recipients(import.meta.env.RFQ_RECIPIENTS);
  if (!isConfigured(recipient[0])) return json({ message: 'RFQ delivery is not configured yet. Please contact BRO through an approved channel.' }, 503);
  const id = reference('RFQ');
  try {
    await sendMail({ to: recipient, replyTo: email, subject: `[${id}] RFQ request from ${company}`, text: [`Reference: ${id}`, `Company: ${company}`, `Contact: ${contactName}`, `Email: ${email}`, `Phone: ${phone}`, `Service: ${service}`, `Rig class: ${rigClass}`, `Location: ${location}`, `Expected start: ${startDate}`, '', 'Requirements:', requirements].join('\n') });
    return json({ message: `Request received. Reference: ${id}.` });
  } catch { return json({ message: 'The request could not be delivered. Please try again later.' }, 502); }
};
