import React, { FormEvent, useState } from 'react';
import { CHROME_STORE_URL } from '../config';
import { isValidEmail, joinWaitlist } from '../waitlist';
import { Pen, Sparkle } from './Icons';

export default function Products() {
  return (
    <section id="products" className="band" aria-labelledby="products-title">
      <div className="wrap section products">
        <div className="products-head">
          <div>
            <p className="eyebrow">The Phlen family</p>
            <h2 id="products-title" className="h2">
              Tools that make you <span className="serif-accent">sound like you</span>, only sharper.
            </h2>
          </div>
          <p className="lede">
            Each Phlen product does one job well, lives where you already work, and keeps you in control of every
            word.
          </p>
        </div>

        <div className="product-cards">
          <article className="product-card product-chuckles">
            <div className="row-between">
              <span className="product-icon" style={{ background: '#fff', color: 'var(--chuckles)' }}>
                <Sparkle size={30} />
              </span>
              <span className="status status-live">Available now</span>
            </div>
            <h3>LinkedIn Chuckles</h3>
            <p>
              A sparkle on every LinkedIn post. Click it for a summary, the right reaction, comments in several tones
              and a ready-to-post repost caption.
            </p>
            <div className="spacer" />
            <div className="row" style={{ gap: 12 }}>
              <a href={CHROME_STORE_URL} className="btn btn-white">
                Add to Chrome
              </a>
              <a href="#chuckles" className="btn btn-outline-white">
                Learn more
              </a>
            </div>
          </article>

          <article className="product-card product-studio">
            <div className="row-between">
              <span className="product-icon" style={{ background: 'var(--ink)', color: 'var(--accent)' }}>
                <Pen />
              </span>
              <span className="status status-soon">Pro · Coming soon</span>
            </div>
            <h3>Article Studio</h3>
            <p>
              Draft, vet and publish LinkedIn articles. Our AI agent enhances your writing if you ask, finds
              open-source images that fit your story, and lets you publish as a main or a quoted article.
            </p>
            <div className="spacer" />
            <WaitlistForm />
          </article>
        </div>
      </div>
    </section>
  );
}

type Status = 'idle' | 'sending' | 'done' | 'error';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus('error');
      setError('Enter a valid email address.');
      return;
    }
    setStatus('sending');
    setError('');
    try {
      await joinWaitlist(email);
      setStatus('done');
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  }

  if (status === 'done') {
    return (
      <p className="waitlist-msg is-success" role="status">
        You're on the list. We'll email you when Article Studio opens.
      </p>
    );
  }

  return (
    <form className="waitlist" onSubmit={onSubmit} noValidate>
      <div className="waitlist-row">
        <label htmlFor="waitlist-email" className="visually-hidden">
          Email for the Article Studio waitlist
        </label>
        <input
          id="waitlist-email"
          type="email"
          autoComplete="email"
          placeholder="you@work.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? 'waitlist-error' : undefined}
        />
        <button type="submit" className="btn btn-dark" disabled={status === 'sending'}>
          {status === 'sending' ? 'Joining…' : 'Join waitlist'}
        </button>
      </div>
      {status === 'error' && (
        <p id="waitlist-error" className="waitlist-msg is-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
