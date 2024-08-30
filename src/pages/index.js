import React, { useState } from 'react';
import '../css/home.css';
import { Link } from 'gatsby';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header>
        <div className="logo">
          <img src="https://assets-eur.mkt.dynamics.com/791aa60e-647b-44e2-8424-729bbf43e300/-/media/medialib/3403bece32b14c68811ed94d0fa39a29.png" alt="Professional Academy" />
        </div>
        <nav className={menuOpen ? 'open' : ''}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>
      <main>
        <section className="hero">
          <h1>Welcome to Professional Academy</h1>
          <p>Your path to professional success starts here.</p>
          <a href="#" className="cta-button">Get Started</a>
        </section>
        <section className="features">
          <div className="feature">
            <h2>Expert Instructors</h2>
            <p>Learn from industry leaders with real-world experience.</p>
          </div>
          <div className="feature">
            <h2>Flexible Learning</h2>
            <p>Study at your own pace, on your own schedule.</p>
          </div>
          <div className="feature">
            <h2>Certifications</h2>
            <p>Earn recognized certifications to advance your career.</p>
          </div>
        </section>
        <section className="testimonials">
          <h2>What Our Students Say</h2>
          <div className="testimonial">
            <p>"Professional Academy helped me land my dream job!"</p>
            <p>- Jane Doe</p>
          </div>
          <div className="testimonial">
            <p>"The courses are well-structured and easy to follow."</p>
            <p>- John Smith</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Professional Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
