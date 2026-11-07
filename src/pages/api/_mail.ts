export function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8' } });
}

export function getText(data: FormData, key: string) {
  const value = data.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export function isConfigured(recipient?: string) {
  return Boolean(import.meta.env.EMAIL_PROVIDER_API_KEY && import.meta.env.EMAIL_FROM && recipient);
}

export async function sendMail({ to, subject, text, replyTo, attachment }: { to: string[]; subject: string; text: string; replyTo?: string; attachment?: { filename: string; content: string; type: string } }) {
  const response = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${import.meta.env.EMAIL_PROVIDER_API_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ from: import.meta.env.EMAIL_FROM, to, reply_to: replyTo, subject, text, attachments: attachment ? [{ filename: attachment.filename, content: attachment.content, content_type: attachment.type }] : undefined }) });
  if (!response.ok) throw new Error(`Transactional provider returned ${response.status}`);
}

export function validEmail(value: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }
export function reference(prefix: string) { return `${prefix}-${Date.now().toString(36).toUpperCase()}`; }
export function recipients(value?: string) { return (value ?? '').split(',').map((item) => item.trim()).filter(Boolean); }
const recent = new Map<string, number>();
export function rateLimited(request: Request) { const key = request.headers.get('x-forwarded-for') ?? request.headers.get('cf-connecting-ip') ?? request.headers.get('x-real-ip'); if (!key) return false; const now = Date.now(); const last = recent.get(key) ?? 0; if (now - last < 30_000) return true; recent.set(key, now); return false; }
