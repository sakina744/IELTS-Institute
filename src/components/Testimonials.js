import React from 'react';
import './Testimonials.css';

const reviews = [
  { img: "/assets/avatar2.webp", name: 'Aisha R.', role: 'Student', text: 'Scored 7.5 overall the mock tests and speaking practice were game changers.' },
  { img: "/assets/avatar.jpg", name: 'Rahul S.', role: 'Student', text: 'Personalised feedback helped me focus my weak areas. Highly recommended.' },
  { img: "", name: 'Nora T.', role: 'Student', text: 'AI band predictor gave me an honest preview of my performance.' }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">Student Testimonials</h2>
        <div className="test-grid">
          {reviews.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="t-head">
                {t.img ? (
                  <img src={t.img} alt={t.name} className="testimonial-avatar" />
                ) : (
                  <div className="avatar-fallback">
                    {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                )}
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.role}</div>
                </div>
              </div>
              <p className="lead">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}