import React, { useEffect, useState } from 'react';
import { CHROME_STORE_URL } from '../config';
import Logo from './Logo';
import { Close, Menu } from './Icons';

const LINKS = [
  { href: '#products', label: 'Products' },
  { href: '#chuckles', label: 'Chuckles' },
  { href: '#privacy', label: 'Privacy' },
  { href: '#faq', label: 'FAQ' },
];

export function AnnouncementBar() {
  return (
    <div className="announce">
      <span className="pill-new">New</span>
      <span>LinkedIn Chuckles 1.2 — suggestions now written in your own voice.</span>
      <a href="#chuckles">See what's new</a>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="wrap header">
      <Logo />
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <Close /> : <Menu />}
      </button>
      <nav id="main-nav" aria-label="Main" className={`nav${open ? ' is-open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a href={CHROME_STORE_URL} className="btn btn-dark" onClick={close}>
          Add to Chrome — free
        </a>
      </nav>
    </header>
  );
}
