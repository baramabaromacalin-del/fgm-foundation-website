import React, { useEffect } from 'react';
import { Home as HomeIcon, GraduationCap, Users } from 'lucide-react';
import { childrensRightsImg } from '../assets/images';
import DonateSection from '../components/DonateSection';
import './Pages.css';

const ChildrensRights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Protecting Children's Rights</h1>
          <p>Ensuring every girl grows up safe, healthy, and empowered to reach her full potential.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-row reverse">
            <div className="content-image-wrapper">
              <img 
                src={childrensRightsImg} 
                alt="Miss World Somalia interacting with young children" 
                className="content-image object-cover"
              />
            </div>
            <div className="content-text">
              <h2>A Childhood Free from Fear</h2>
              <p>
                FGM is mostly carried out on young girls between infancy and age 15. The protection of girls 
                is therefore at the very center of our mission. It is a fundamental child rights issue.
              </p>
              <p>
                Through community-led initiatives, we focus on prevention. By keeping girls in school and 
                providing safe spaces, we significantly reduce the risk of them undergoing the procedure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section section-light">
        <div className="container">
          <div className="section-header center">
            <h2>Our Core Programs</h2>
          </div>
          
          <div className="mission-stats" style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <div className="stat-card" style={{flex: '1', minWidth: '300px'}}>
              <GraduationCap className="stat-icon" size={40} />
              <h3>Education Access</h3>
              <p>Providing scholarships and school supplies to keep girls enrolled in formal education.</p>
            </div>
            <div className="stat-card" style={{flex: '1', minWidth: '300px'}}>
              <HomeIcon className="stat-icon" size={40} />
              <h3>Safe Havens</h3>
              <p>Establishing secure shelters for girls fleeing the threat of FGM in high-risk areas.</p>
            </div>
            <div className="stat-card" style={{flex: '1', minWidth: '300px'}}>
              <Users className="stat-icon" size={40} />
              <h3>Youth Clubs</h3>
              <p>Creating peer-to-peer support networks where girls can learn about their rights safely.</p>
            </div>
          </div>
        </div>
      </section>

      <DonateSection />
    </div>
  );
};

export default ChildrensRights;
