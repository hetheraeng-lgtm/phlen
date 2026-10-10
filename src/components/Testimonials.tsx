import React from 'react';

// TODO: replace with real, permitted quotes from early users (see FEATURES.md).
const QUOTES = [
  { quote: '[Early user quote about saving time on LinkedIn.]', name: '[Name]', role: '[Role, Company]' },
  { quote: '[Early user quote about comment quality.]', name: '[Name]', role: '[Role, Company]' },
  { quote: '[Early user quote about sounding like themselves.]', name: '[Name]', role: '[Role, Company]' },
];

export default function Testimonials() {
  return (
    <section className="band" aria-labelledby="quotes-title">
      <div className="wrap testimonials">
        <div className="row-between" style={{ alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
          <h2 id="quotes-title" className="h2">
            Early users, <span className="serif-accent">real words.</span>
          </h2>
          <span style={{ fontSize: 15, color: 'var(--muted)' }}>[Chrome Web Store rating]</span>
        </div>
        <div className="grid-auto">
          {QUOTES.map((q, i) => (
            <figure key={i} className="quote">
              <blockquote>"{q.quote}"</blockquote>
              <figcaption>
                <span className="avatar" style={{ width: 40, height: 40 }} aria-hidden="true" />
                <span className="who">
                  <strong>{q.name}</strong>
                  <span className="role">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
