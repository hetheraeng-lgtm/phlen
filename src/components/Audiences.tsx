import React from 'react';

// TODO: replace the tinted blocks with real photography (see FEATURES.md).
const AUDIENCES = [
  {
    title: 'Founders & leaders',
    body: 'Stay visible in your industry without losing an hour to the feed every morning.',
    tint: '#d8e4ee',
  },
  {
    title: 'Job seekers',
    body: 'Leave thoughtful comments that get you noticed by the people you want to work with.',
    tint: '#e4e9d2',
  },
  {
    title: 'Creators & recruiters',
    body: 'Keep up with your network, reshare the good stuff and add your take in seconds.',
    tint: '#e8dde6',
  },
];

export default function Audiences() {
  return (
    <section className="wrap audiences" aria-labelledby="audiences-title">
      <h2 id="audiences-title" className="h2" style={{ textAlign: 'center' }}>
        Made for people who <span className="serif-accent">show up.</span>
      </h2>
      <div className="grid-auto">
        {AUDIENCES.map((a) => (
          <div key={a.title} className="audience">
            <div className="audience-art" style={{ background: a.tint }} aria-hidden="true" />
            <div className="audience-body">
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
