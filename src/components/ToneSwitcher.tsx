import React, { useState } from 'react';

// Tones mirror the ones the Chuckles server asks the model for (server/prompt.js).
export const TONES = [
  {
    id: 'insightful',
    label: 'Insightful',
    text: 'The "ask later" principle is underrated. We saw the same when we moved company-size questions to after the first project was created — people answer happily once they have seen the value.',
  },
  {
    id: 'supportive',
    label: 'Supportive',
    text: 'Love that you shared what you removed, not just the outcome. That is the part most teams skip. Saving this for our next onboarding review.',
  },
  {
    id: 'question',
    label: 'Question',
    text: 'How did you decide what stayed on those two screens? Did you lean on usage data, or interview new users first?',
  },
  {
    id: 'contrarian',
    label: 'Contrarian',
    text: 'Counterpoint: some friction qualifies leads. In B2B a slightly longer form can filter out tyre-kickers. Did lead quality change at all after the cut?',
  },
];

export default function ToneSwitcher() {
  const [tone, setTone] = useState('question');
  const current = TONES.find((t) => t.id === tone) ?? TONES[0];

  return (
    <section id="chuckles" className="dark-band" aria-labelledby="tones-title">
      <div className="wrap section tones">
        <div className="tones-copy">
          <p className="eyebrow">One post, many voices</p>
          <h2 id="tones-title" className="h2" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Comments that <span className="serif-accent">add something.</span>
          </h2>
          <p className="lede">
            No "Great post!". Each suggestion brings an insight, an experience or a real question, stays under 60
            words and sounds like a person. Pick the tone that fits the moment.
          </p>
        </div>
        <div className="tones-demo">
          <div className="row" role="group" aria-label="Comment tone">
            {TONES.map((t) => (
              <button
                key={t.id}
                type="button"
                className="tone-btn"
                aria-pressed={t.id === tone}
                onClick={() => setTone(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="reply-card">
            <div className="row" style={{ gap: 10, marginTop: 0 }}>
              <span className="avatar" style={{ width: 40, height: 40 }} aria-hidden="true" />
              <div className="stack-6" style={{ gap: 0 }}>
                <strong style={{ fontSize: 15 }}>You</strong>
                <span className="li-meta">replying to Ada Okafor</span>
              </div>
            </div>
            <p className="reply-text" aria-live="polite">
              {current.text}
            </p>
            <div className="row">
              <span className="chip chip-blue" style={{ fontSize: 14, padding: '10px 16px' }}>
                Insert into comment box
              </span>
              <span className="chip chip-outline" style={{ fontSize: 14, padding: '10px 16px' }}>
                Edit
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
