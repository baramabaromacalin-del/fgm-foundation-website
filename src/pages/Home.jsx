import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Heart, Users } from 'lucide-react';
import DonateSection from '../components/DonateSection';
import './Home.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Eliminating Female Genital Mutilation:<br/>
              <span className="hero-subtitle">One Purposeful Step at a Time</span>
            </h1>
            <p className="hero-text">
              We are dedicated to protecting women and girls, fostering bodily autonomy, 
              and empowering communities to break the cycle. Join us in making a difference.
            </p>
            <div className="hero-buttons">
              <Link to="/about-us" className="btn-primary hero-btn">
                Learn More <ArrowRight size={18} />
              </Link>
              <button 
                className="btn-donate hero-btn" 
                onClick={() => document.getElementById('donate').scrollIntoView({ behavior: 'smooth' })}
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section section-white">
        <div className="container mission-container">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              AURA Foundation operates on the fundamental belief that every girl and woman 
              has the right to health, dignity, and a life free from violence. We strive to 
              eradicate FGM by educating communities, providing safe havens, advocating for policy 
              change, and supporting survivors through holistic care.
            </p>
          </div>
          <div className="mission-stats">
            <div className="stat-card">
              <Shield className="stat-icon" size={40} />
              <h3>Protection</h3>
              <p>Creating safe spaces for girls at risk</p>
            </div>
            <div className="stat-card">
              <Heart className="stat-icon" size={40} />
              <h3>Healing</h3>
              <p>Medical and psychological support for survivors</p>
            </div>
            <div className="stat-card">
              <Users className="stat-icon" size={40} />
              <h3>Education</h3>
              <p>Community outreach to change deep-rooted norms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Banner */}
      <section className="stats-banner section-dark">
        <div className="container stats-inner">
          <div className="stat-item">
            <span className="stat-number">200M+</span>
            <span className="stat-label">Women & Girls Affected Globally</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30</span>
            <span className="stat-label">Countries Where FGM Is Concentrated</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2030</span>
            <span className="stat-label">Our Goal for Zero Tolerance (SDGs)</span>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="stories-section section section-light">
        <div className="container">
          <div className="section-header center">
            <h2>Voices of Strength</h2>
            <p className="subtitle">Stories from the brave women leading change in their communities.</p>
          </div>
          
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-bg story-bg-1"></div>
              <div className="story-content">
                <h3>Amina's Journey</h3>
                <p>"Education gave me the voice I needed. Now, I educate other mothers in my village about the dangers of FGM."</p>
                <Link to="/about-us" className="read-more">Read Full Story <ArrowRight size={14} /></Link>
              </div>
            </div>
            <div className="story-card">
              <div className="story-bg story-bg-2"></div>
              <div className="story-content">
                <h3>Championing Change</h3>
                <p>"When community leaders stand up against the practice, the entire village listens. We are seeing a new dawn."</p>
                <Link to="/about-us" className="read-more">Read Full Story <ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section Component */}
      <DonateSection />
      
    </div>
  );
};

export default Home;
