import React from 'react';
import './Footer.css';

export default function Footer(){
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-inner">
        <div className="col">
          <div className="brand">IELTS <span className="brand-sub">Institute</span></div>
          <p className="lead">Helping students reach their target band with modern tools and expert tutors.</p>
        </div>

        <div className="col">
          <h4>Quick links</h4>
          <ul className="footer-links">
            <li><a href="#features">Courses</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="col">
          <h4>Contact</h4>
          <p className="lead">
        <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 0 0-2 2v12c0 1.103.897 2 2 2h16a2 2 0 0 0 2-2V6c0-1.103-.897-2-2-2zm0 
                2v.511l-8 6.223-8-6.223V6h16zM4 18V8.489l8 6.222 8-6.222V18H4z"/>
              </svg>
            </span>
            abc@ieltsinstitute.edu</p>
            <p className='lead'>
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.487 17.14l-4.353-1.87a1 1 0 0 0-1.065.242l-2.2 2.27a15.053 
                15.053 0 0 1-6.711-6.71l2.27-2.201a1 1 0 0 0 .242-1.065L6.86 
                3.513A1 1 0 0 0 5.868 3H3.5C2.672 3 2 3.672 2 4.5 2 
                13.06 10.94 22 19.5 22c.828 0 1.5-.672 
                1.5-1.5v-2.368a1 1 0 0 0-.513-.992z"/>
              </svg>
            </span>
          +00 123 4567 89</p>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} IELTS Institute - All rights reserved</div>
    </footer>
  );
}
