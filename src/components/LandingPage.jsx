import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaBell, FaClipboardList, FaArrowRight } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="hero-content">
          <h1>Smart Expiry Tracker</h1>
          <p>Never let your items expire again. Track and manage with ease.</p>
          <Link to="/tracker" className="cta-button">
            Get Started <FaArrowRight />
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="public/beecbd86-db8d-4641-86b0-287ab09670e4.webp"
            alt="Expiry Tracker Illustration"
            style={{
              width: '80%',
              maxWidth: '400px',
              height: 'auto',
              marginLeft: '180px',
            }}
          />
        </div>
      </header>

      <section className="features">
        <div className="feature">
          <FaBox className="feature-icon" />
          <h3>Organize Inventory</h3>
          <p>Add and track items with our intuitive interface.</p>
        </div>
        <div className="feature">
          <FaBell className="feature-icon" />
          <h3>Timely Alerts</h3>
          <p>Receive notifications before items expire.</p>
        </div>
        <div className="feature">
          <FaClipboardList className="feature-icon" />
          <h3>Visual Insights</h3>
          <p>Get a clear overview of your item statuses.</p>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h4>Add Items</h4>
            <p>Easily input your items with names, expiry dates, and images.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h4>Track Expiry</h4>
            <p>We'll keep track of expiry dates and notify you when needed.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h4>Stay Organized</h4>
            <p>Manage your inventory efficiently and reduce waste.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
