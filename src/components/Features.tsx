import React, { ReactNode } from 'react';
import { Bolt, Keyboard, Lines, Person, Repost, ThumbUp } from './Icons';

const FEATURES: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <Lines />,
    title: 'Summary & key points',
    body: 'Two to four plain sentences and a handful of bullets. Works on full articles at /pulse/ too.',
  },
  {
    icon: <ThumbUp />,
    title: 'The right reaction',
    body: 'Like, Insightful, Celebrate, Support, Love or Funny — with a one-line reason, applied in one click.',
  },
  {
    icon: <Repost />,
    title: 'Repost captions',
    body: 'An honest verdict on whether it fits your feed, plus a caption that says why your network should care.',
  },
  {
    icon: <Person />,
    title: 'Your voice',
    body: 'Describe yourself once in Settings. Every suggestion is written from your perspective.',
  },
  {
    icon: <Bolt />,
    title: 'Instant on reopen',
    body: 'Results are cached per post, so coming back is immediate. Hit regenerate for fresh ideas.',
  },
  {
    icon: <Keyboard />,
    title: 'Keyboard first',
    body: 'Alt+Shift+L analyses the post in the middle of your screen. Or use the toolbar popup.',
  },
];

export default function Features() {
  return (
    <section className="wrap section features" aria-labelledby="features-title">
      <h2 id="features-title" className="h2">
        Everything in the panel, <span className="serif-accent">nothing in your way.</span>
      </h2>
      <div className="grid-auto">
        {FEATURES.map((f) => (
          <div key={f.title} className="card">
            {f.icon}
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
