import React from 'react';
import './Hero.css';

export default function Hero(){
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">Achieve your target <span className="accent">IELTS band</span> with confidence</h1>
          <p className="hero-sub">Live speaking practice, realistic mock tests, AI band predictions and personalised coaching, all in one place.</p>
          <div className="hero-cta">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline">Book a free trial</button>
          </div>
          <div className="hero-foot">Free resources  • Flexible timings  • Money-back trial</div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <img src="/assets/hero.jpg" alt="Students studying" className="hero-image" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
