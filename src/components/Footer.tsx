import React from 'react';
import { CHROME_STORE_URL } from '../config';
import Logo from './Logo';

export function ClosingCta() {
  return (
    <section id="get" className="wrap closing" aria-labelledby="closing-title">
      <div className="closing-card">
        <h2 id="closing-title">
          You have things to say. <span className="serif-accent">Now say them well.</span>
        </h2>
        <p>Add LinkedIn Chuckles to Chrome for free, and be first to try Article Studio when it lands.</p>
        <div className="hero-ctas">
          <a href={CHROME_STORE_URL} className="btn btn-accent btn-lg">
            Add to Chrome — free
          </a>
          <a href="#products" className="btn btn-outline-light btn-lg">
            Join the Pro waitlist
          </a>
        </div>
      </div>
    </section>
  );
}

// TODO: About, Contact, Terms and Privacy policy pages don't exist yet (see FEATURES.md).
const COLUMNS = [
  {
    title: 'Products',
    links: [
      { href: '#chuckles', label: 'LinkedIn Chuckles' },
      { href: '#products', label: 'Article Studio' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '#top', label: 'About' },
      { href: '#top', label: 'Contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '#faq', label: 'Help & FAQ' },
      { href: '#privacy', label: 'Privacy' },
      { href: '#top', label: 'Terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-cols">
          <div className="footer-brand">
            <Logo asLink={false} />
            <p>Small, sharp AI tools for your professional voice.</p>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.title} className="footer-col" aria-labelledby={`footer-${col.title}`}>
              <h2 id={`footer-${col.title}`}>{col.title}</h2>
              {col.links.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
        <div className="footer-legal">
          <span>© {new Date().getFullYear()} Phlen. All rights reserved.</span>
          <span>LinkedIn is a trademark of LinkedIn Corporation. Phlen is not affiliated with or endorsed by LinkedIn.</span>
        </div>
      </div>
    </footer>
  );
}
