import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how" className="wrap section steps" aria-labelledby="how-title">
      <div className="center">
        <p className="eyebrow">How Chuckles works</p>
        <h2 id="how-title" className="h2">
          Three clicks. <span className="serif-accent">You still press Post.</span>
        </h2>
      </div>
      <ol className="grid-auto" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 20 }}>
        <li className="card">
          <span className="step-num" aria-hidden="true">
            01
          </span>
          <h3>Add it to Chrome</h3>
          <p>Install the extension. No account to set up and no API key to paste. Open Settings to describe your voice.</p>
        </li>
        <li className="card">
          <span className="step-num" aria-hidden="true">
            02
          </span>
          <h3>Click the sparkle</h3>
          <p>
            Every post gets a blue sparkle beside the "…" menu. Click it, or press <kbd>Alt</kbd>+<kbd>Shift</kbd>+
            <kbd>L</kbd> for the post in the middle of your screen.
          </p>
        </li>
        <li className="card">
          <span className="step-num" aria-hidden="true">
            03
          </span>
          <h3>Review, then post</h3>
          <p>
            Edit a suggestion, insert it into the comment box, or open Repost with thoughts with the caption filled
            in. The final click is yours.
          </p>
        </li>
      </ol>
    </section>
  );
}
