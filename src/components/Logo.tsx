import React from 'react';

export default function Logo({ asLink = true }: { asLink?: boolean }) {
  const mark = (
    <>
      <span className="logo-word">phlen</span>
      <span className="logo-dot" aria-hidden="true" />
    </>
  );
  if (!asLink) return <span className="logo">{mark}</span>;
  return (
    <a href="#top" className="logo" aria-label="Phlen home">
      {mark}
    </a>
  );
}
