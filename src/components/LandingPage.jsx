import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBox, 
  FaBell, 
  FaClipboardList, 
  FaArrowRight 
} from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero">
        <div className="hero-content">
          <h1>Never Let Anything Expire Again</h1>
          <p>Smart tracking for your items, groceries, and more</p>
          <Link to="/tracker" className="cta-button">
            Start Tracking <FaArrowRight />
          </Link>
        </div>
        <div className="hero-image">
          <img src="/hero-image.svg" alt="Expiry Tracking Illustration" />
        </div>
      </header>

      <section className="features">
        <div className="feature">
          <FaBox className="feature-icon" />
          <h3>Item Management</h3>
          <p>Easily add and track items with their expiry dates</p>
        </div>
        <div className="feature">
          <FaBell className="feature-icon" />
          <h3>Smart Notifications</h3>
          <p>Get timely alerts before items expire</p>
        </div>
        <div className="feature">
          <FaClipboardList className="feature-icon" />
          <h3>Organized Tracking</h3>
          <p>Keep your inventory clean and up-to-date</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;