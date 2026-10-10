import React from 'react';

export default function Gist() {
  return (
    <section className="wrap gist" aria-labelledby="gist-title">
      <div className="center">
        <h2 id="gist-title" className="h2">
          A long post in. <span className="serif-accent">The gist out.</span>
        </h2>
        <p className="lede">
          Chuckles expands "…more", reads only the author's words (not the comments) and hands you the point in
          seconds.
        </p>
      </div>
      <div className="gist-cards">
        <div className="gist-card gist-before">
          <span className="card-label">What you scroll past</span>
          <p>
            I've been thinking a lot about this lately and I wanted to share some reflections from the past quarter,
            because honestly it's been a journey. When we started, we thought the problem was pricing. Then we thought
            it was positioning. It turns out it was neither, and the real answer surprised all of us. Let me explain,
            starting with a conversation I had with a customer in March…
          </p>
          <span style={{ fontSize: 14, color: 'var(--chuckles)', fontWeight: 600 }}>…see more</span>
        </div>
        <div className="gist-card gist-after">
          <span className="card-label">What Chuckles gives you</span>
          <p className="gist-quote">
            "Churn wasn't about price or positioning — customers were leaving because setup took too long."
          </p>
          <ul className="arrow-list">
            <li>Key points pulled out as short bullets</li>
            <li>An honest call on whether it's worth engaging</li>
            <li>Engagement bait flagged, not flattered</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
