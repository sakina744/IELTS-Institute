import React from 'react';
import './Features.css';

export default function Features() {
  const features = [
    {title: "Speaking Practice", desc: "Improve fluency with daily speaking sessions." ,icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 14a4 4 0 0 0 4-4V5a4 4 0 0 0-8 0v5a4 4 0 0 0 4 4zm6-4a6 6 0 0 1-12 0H4a8 
        8 0 0 0 16 0h-2zM5 20h14v2H5z"/>
      </svg>
    )},
    {title: "Mock Tests", desc: "Get exam-like practice with timed mock tests.",icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 
        2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 
        2-2V5c0-1.1-.9-2-2-2zm-9 
        14H7v-2h3v2zm5 0h-3v-2h3v2zm0-4H7v-2h8v2zm0-4H7V7h8v2z"/>
      </svg>
    )},
    {title: "AI Band Score", desc: "Receive instant band score predictions with AI.",icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 10 
        10A10 10 0 0 0 12 2zm1 
        14.93V17a1 1 0 0 1-2 0v-.07A8 
        8 0 0 1 4.07 13H5a1 1 0 0 
        1 0 2h-.93A8 8 0 0 1 11 4.07V5a1 
        1 0 0 1 2 0v-.93A8 8 0 0 1 19.93 
        11H19a1 1 0 0 1 0-2h.93A8 8 0 0 1 
        13 16.93z"/>
      </svg>
    )},
    {title: "Expert Trainers", desc: "Learn from certified IELTS professionals.",icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 
        2.3-5 5 2.3 5 5 5zm0 2c-3.3 
        0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
      </svg>
    )},
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Our Key Features</h2>
        <div className="features-grid">
          {features.map((f, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
