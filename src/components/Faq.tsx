import React, { useState } from 'react';

export const FAQS = [
  {
    q: 'Do I need an API key?',
    a: 'No. Phlen runs the AI on its own server, so you just install the extension and go. The key never ships inside the extension, where anyone could unzip and read it.',
  },
  {
    q: 'Will Chuckles ever post for me?',
    a: 'Never. It drafts comments and repost captions and can type a comment into the box for you, but you always click Comment or Repost yourself. It only ever opens Repost with thoughts, never Repost instantly.',
  },
  {
    q: 'Will the suggestions sound like me?',
    a: 'Open Settings and describe yourself under Your voice: your role, what you care about, how you write. Every suggestion is then written from your perspective.',
  },
  {
    q: 'Which browsers does it work in?',
    a: 'LinkedIn Chuckles is a Chrome extension for desktop. [Confirm support for other Chromium browsers such as Edge and Brave.]',
  },
  {
    q: 'What happens to the posts I analyse?',
    a: 'The post text is sent to the Phlen server to generate suggestions, and results are cached in your browser so reopening a post is instant. [Add server-side retention policy.]',
  },
  {
    q: 'What is Article Studio, and what will it cost?',
    a: 'Article Studio is our upcoming Pro product for drafting, vetting and publishing LinkedIn articles, with optional AI enhancement and open-source image search. Pricing is [TBD] — join the waitlist to hear first.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="wrap section faq" aria-labelledby="faq-title">
      <h2 id="faq-title" className="h2">
        Got <span className="serif-accent">questions?</span>
      </h2>
      <div className="faq-list">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="faq-item">
              <h3>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  id={`faq-q-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <span className="faq-sign" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
              </h3>
              <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen}>
                <p className="faq-a">{f.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
