import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaBell, FaClipboardList, FaArrowRight } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Never Let Your Items Expire Again</h1>
          <p className="hero-description">
            Track and manage your items with our intuitive Smart Expiry Tracker.
          </p>
          <Link to="/tracker" className="cta-button">
            Get Started <FaArrowRight />
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="public/hero section.png"
            alt="Expiry Tracker Illustration"
            className="hero-illustration"
          />
        </div>
      </header>

      <section className="features">
        <div className="feature-item">
          <div className="feature-icon">
            <FaBox />
          </div>
          <h3 className="feature-title">Organize Inventory</h3>
          <p className="feature-description">
            Add and track items with our intuitive interface.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <FaBell />
          </div>
          <h3 className="feature-title">Timely Alerts</h3>
          <p className="feature-description">
            Receive notifications before items expire.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <FaClipboardList />
          </div>
          <h3 className="feature-title">Visual Insights</h3>
          <p className="feature-description">
            Get a clear overview of your item statuses.
          </p>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps">
          <div className="step-item">
            <div className="step-number">1</div>
            <h4 className="step-title">Add Items</h4>
            <p className="step-description">
              Easily input your items with names, expiry dates, and images.
            </p>
          </div>
          <div className="step-item">
            <div className="step-number">2</div>
            <h4 className="step-title">Track Expiry</h4>
            <p className="step-description">
              We'll keep track of expiry dates and notify you when needed.
            </p>
          </div>
          <div className="step-item">
            <div className="step-number">3</div>
            <h4 className="step-title">Stay Organized</h4>
            <p className="step-description">
              Manage your inventory efficiently and reduce waste.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;