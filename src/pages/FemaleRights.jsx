import React, { useEffect } from 'react';
import { BookOpen, Megaphone, Scale, CheckCircle } from 'lucide-react';
import DonateSection from '../components/DonateSection';
import './Pages.css';

const FemaleRights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Advancing Female Rights</h1>
          <p>Education, advocacy, and unwavering support for women's bodily autonomy.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-row">
            <div className="content-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1579208570378-8c9ce3237bc6?auto=format&fit=crop&q=80&w=800" 
                alt="Women advocating for their rights" 
                className="content-image"
              />
            </div>
            <div className="content-text">
              <h2>Understanding the Impact</h2>
              <p>
                Female Genital Mutilation is a severe violation of the human rights of girls and women. 
                It reflects deep-rooted inequality between the sexes, and constitutes an extreme form of 
                discrimination against women.
              </p>
              <p>
                The practice violates a person's rights to health, security, and physical integrity, 
                the right to be free from torture and cruel, inhuman or degrading treatment, and the right 
                to life when the procedure results in death.
              </p>
              <ul>
                <li><CheckCircle className="li-icon" size={20} /> Severe physical pain and psychological trauma</li>
                <li><CheckCircle className="li-icon" size={20} /> Increased risk of complications in childbirth</li>
                <li><CheckCircle className="li-icon" size={20} /> Long-term chronic pain and recurrent infections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section section-light">
        <div className="container">
          <div className="section-header center">
            <h2>Our Strategic Focus</h2>
          </div>
          
          <div className="mission-stats" style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <div className="stat-card" style={{flex: '1', minWidth: '300px'}}>
              <BookOpen className="stat-icon" size={40} />
              <h3>Community Dialogues</h3>
              <p>Facilitating open conversations to challenge deep-rooted social norms and traditions.</p>
            </div>
            <div className="stat-card" style={{flex: '1', minWidth: '300px'}}>
              <Scale className="stat-icon" size={40} />
              <h3>Legal Advocacy</h3>
              <p>Working with local governments to enforce zero-tolerance laws protecting girls.</p>
            </div>
            <div className="stat-card" style={{flex: '1', minWidth: '300px'}}>
              <Megaphone className="stat-icon" size={40} />
              <h3>Amplifying Voices</h3>
              <p>Providing platforms for survivors to share their stories and inspire lasting change.</p>
            </div>
          </div>
        </div>
      </section>

      <DonateSection />
    </div>
  );
};

export default FemaleRights;
