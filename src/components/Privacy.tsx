import React from 'react';
import { Shield } from './Icons';

const PROMISES = [
  ['Nothing posts automatically', 'Comments and reposts are drafted. You click Comment or Repost.'],
  ['Never "Repost instantly"', "Chuckles only opens Repost with thoughts, so there's always a review step."],
  ['No keys in your browser', "The AI key lives on Phlen's server, never inside the extension."],
  ['Honest by design', 'Controversial, low-quality or engagement-bait posts get flagged, not hyped.'],
];

export default function Privacy() {
  return (
    <section id="privacy" className="wrap privacy" aria-labelledby="privacy-title">
      <div className="privacy-panel">
        <div className="privacy-copy">
          <span className="product-icon" style={{ background: 'var(--accent)', color: 'var(--ink)' }}>
            <Shield />
          </span>
          <h2 id="privacy-title" className="h2">
            Your name stays <span className="serif-accent">on your terms.</span>
          </h2>
          <p className="lede" style={{ fontSize: 17 }}>
            Your reputation is the whole point. So Phlen tools suggest, and you decide.
          </p>
        </div>
        <ul className="privacy-list">
          {PROMISES.map(([title, desc], i) => (
            <li key={title}>
              <span className="privacy-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <strong>{title}</strong>
                <span className="desc">{desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
