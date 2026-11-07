import type { APIRoute } from 'astro';
import { getText, isConfigured, json, rateLimited, recipients, reference, sendMail, validEmail } from './_mail';

const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
const maxSize = 10 * 1024 * 1024;

export const POST: APIRoute = async ({ request }) => {
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('multipart/form-data') && !contentType.includes('application/x-www-form-urlencoded')) return json({ message: 'Use the website form to submit an application.' }, 400);
  const data = await request.formData();
  if (rateLimited(request)) return json({ message: 'Please wait before sending another application.' }, 429);
  const fullName = getText(data, 'fullName'); const phone = getText(data, 'phone'); const email = getText(data, 'email'); const position = getText(data, 'position'); const experience = getText(data, 'experience'); const certifications = getText(data, 'certifications');
  const cv = data.get('cv');
  if ([fullName, phone, email, position, experience, certifications].some((value) => !value) || !validEmail(email) || getText(data, 'consent') === '') return json({ message: 'Complete every required field and consent to review.' }, 400);
  if (!(cv instanceof File) || cv.size === 0 || cv.size > maxSize || !allowed.includes(cv.type)) return json({ message: 'Attach a PDF, DOC, or DOCX CV up to 10 MB.' }, 400);
  const recipient = recipients(import.meta.env.RECRUITMENT_RECIPIENTS);
  if (!isConfigured(recipient[0])) return json({ message: 'Recruitment delivery is not configured yet. Please contact BRO through an approved channel.' }, 503);
  const id = reference('APP');
  try {
    const bytes = Buffer.from(await cv.arrayBuffer());
    await sendMail({ to: recipient, replyTo: email, subject: `[${id}] Application for ${position}`, text: [`Reference: ${id}`, `Name: ${fullName}`, `Phone: ${phone}`, `Email: ${email}`, `Position: ${position}`, `Experience: ${experience} years`, `Certifications: ${certifications}`].join('\n'), attachment: { filename: cv.name.replace(/[^a-z0-9._-]/gi, '_'), content: bytes.toString('base64'), type: cv.type } });
    return json({ message: `Application received. Reference: ${id}.` });
  } catch { return json({ message: 'The application could not be delivered. Please try again later.' }, 502); }
};
