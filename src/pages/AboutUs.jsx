import React, { useEffect } from 'react';
import { Target, Heart, Award, Shield } from 'lucide-react';
import { ourStoryImg } from '../assets/images';
import DonateSection from '../components/DonateSection';
import './Pages.css';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page fade-in">
      <div className="page-header">
        <div className="container">
          <h1>About AURA Foundation</h1>
          <p>Uniting voices, protecting rights, and empowering the next generation of women.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-row">
            <div className="content-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2015, AURA Foundation began with a small group of passionate advocates and survivors 
                who envisioned a world where no girl would have to endure the physical and emotional scars of 
                Female Genital Mutilation (FGM). 
              </p>
              <p>
                We realized that enduring change required more than just legislation; it required a fundamental 
                shift in community mindsets. By engaging with local leaders, mothers, and educators, we have 
                been able to steadily dismantle the cultural pillars that have allowed this practice to persist.
              </p>
            </div>
            <div className="content-image-wrapper">
              <img 
                src={ourStoryImg} 
                alt="Woman standing confidently in an elegant light blue and white dress" 
                className="content-image object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section section section-light">
        <div className="container">
          <div className="section-header center">
            <h2>Our Core Values</h2>
            <p className="subtitle">Everything we do is guided by these principles.</p>
          </div>
          
          <div className="mission-stats" style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <div className="stat-card" style={{flex: '1', minWidth: '300px'}}>
              <Award className="stat-icon" size={40} />
              <h3>Dignity</h3>
              <p>We believe every individual has the inherent right to bodily autonomy and respect.</p>
            </div>
            <div className="stat-card" style={{flex: '1', minWidth: '300px'}}>
              <Shield className="stat-icon" size={40} />
              <h3>Safety</h3>
              <p>Creating environments where girls can grow without fear of violence or mutilation.</p>
            </div>
            <div className="stat-card" style={{flex: '1', minWidth: '300px'}}>
              <Heart className="stat-icon" size={40} />
              <h3>Empowerment</h3>
              <p>Providing the tools, education, and support for women to lead their own communities.</p>
            </div>
          </div>
        </div>
      </section>

      <DonateSection />
    </div>
  );
};

export default AboutUs;
