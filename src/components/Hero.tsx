import React from 'react';
import { CHROME_STORE_URL } from '../config';
import { Check, ChromeIcon, Sparkle, SparkleBadge } from './Icons';

export default function Hero() {
  return (
    <>
      <section id="top" className="wrap hero">
        <p className="hero-chip">
          <SparkleBadge />
          Meet LinkedIn Chuckles, our first product
        </p>
        <h1>
          Don't stare at the post. <span className="serif-accent">Say something good.</span>
        </h1>
        <p className="hero-lede">
          Phlen builds small, sharp AI tools for your professional life. They read faster than you can, write in
          your voice, and never post anything until you click the button yourself.
        </p>
        <div className="hero-ctas">
          <a href={CHROME_STORE_URL} className="btn btn-dark btn-lg">
            <ChromeIcon />
            Add Chuckles to Chrome
          </a>
          <a href="#how" className="btn btn-light btn-lg">
            See how it works
          </a>
        </div>
        <p className="hero-note">Free Chrome extension · No API key needed · Nothing posts without you</p>
      </section>

      <section className="wrap preview" aria-label="LinkedIn Chuckles in action">
        <div className="preview-stage">
          <PostPreview />
          <PanelPreview />
        </div>
      </section>
    </>
  );
}

function PostPreview() {
  return (
    <article className="li-post" aria-label="Example LinkedIn post">
      <div className="li-post-head">
        <span className="avatar" style={{ width: 48, height: 48 }} aria-hidden="true" />
        <div className="li-post-who">
          <span className="li-name">Ada Okafor</span>
          <span className="li-meta">Head of Product · 2h</span>
        </div>
        <span className="li-sparkle sparkle-badge" style={{ width: 32, height: 32 }}>
          <Sparkle size={18} />
          <span className="visually-hidden">Chuckles button</span>
        </span>
        <span className="li-meta" aria-hidden="true" style={{ fontSize: 20, letterSpacing: 1 }}>
          ···
        </span>
      </div>
      <p>
        Hot take: most onboarding flows ask for too much, too early. We cut ours from seven screens to two — no
        company size, no job title, no "how did you hear about us". You get into the product first. We ask the rest
        later, once you've seen why it's worth answering. Here's exactly what we removed, and what we moved…
      </p>
      <div className="li-image" aria-hidden="true" />
      <div className="li-actions" aria-hidden="true">
        <span>Like</span>
        <span>Comment</span>
        <span>Repost</span>
        <span>Send</span>
      </div>
    </article>
  );
}

function PanelPreview() {
  return (
    <aside className="panel" aria-label="Chuckles panel preview">
      <div className="panel-head">
        <span className="panel-title">
          <Sparkle size={18} />
          LinkedIn Chuckles
        </span>
        <span style={{ fontSize: 13, opacity: 0.9 }}>↻ Regenerate</span>
      </div>
      <div className="panel-body">
        <div className="stack-6">
          <span className="panel-label">Summary</span>
          <p>Ada's team cut onboarding to two screens and deferred profile questions until users have seen value.</p>
        </div>
        <div className="panel-reaction">
          <div className="stack-6" style={{ gap: 2 }}>
            <span style={{ fontSize: 12, color: '#5e6a75' }}>Recommended reaction</span>
            <strong style={{ fontSize: 14 }}>Insightful</strong>
          </div>
          <span className="chip chip-blue">React</span>
        </div>
        <div className="stack-6" style={{ gap: 8 }}>
          <div className="row-between">
            <span className="panel-label">Suggested comment</span>
            <span className="chip chip-soft">Question</span>
          </div>
          <p className="panel-comment">
            How did you decide what stayed on those two screens? Usage data, or interviews with new users?
          </p>
          <div className="row">
            <span className="chip chip-blue">Insert into comment box</span>
            <span className="chip chip-outline-blue">Copy</span>
          </div>
        </div>
        <div className="panel-repost">
          <Check />
          Worth reposting — caption ready
        </div>
      </div>
    </aside>
  );
}
