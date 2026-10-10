import { WAITLIST_ENDPOINT } from './config';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim());
}

// Sends a waitlist sign-up. Until a backend exists (REACT_APP_WAITLIST_ENDPOINT
// unset) the sign-up is not stored anywhere — see FEATURES.md.
export async function joinWaitlist(email: string): Promise<void> {
  if (!WAITLIST_ENDPOINT) {
    console.warn('[waitlist] REACT_APP_WAITLIST_ENDPOINT is not set; sign-up not saved.');
    return;
  }
  const res = await fetch(WAITLIST_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email.trim(), product: 'article-studio' }),
  });
  if (!res.ok) {
    throw new Error(`Waitlist request failed (${res.status})`);
  }
}
