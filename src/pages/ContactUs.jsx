import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Pages.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out, ' + formData.name + '. We will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Reach out to get involved, ask a question, or request support.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p style={{marginBottom: '30px', color: '#666'}}>
                Whether you want to partner with us, volunteer, or need support, our team is here for you.
              </p>
              
              <div className="info-item">
                <MapPin className="info-icon" size={24} />
                <div>
                  <h4>Our Headquarters</h4>
                  <p>123 Hope Avenue<br/>New York, NY 10012</p>
                </div>
              </div>
              
              <div className="info-item">
                <Mail className="info-icon" size={24} />
                <div>
                  <h4>Email Us</h4>
                  <p>info@aurafoundation.org</p>
                </div>
              </div>
              
              <div className="info-item">
                <Phone className="info-icon" size={24} />
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>Send a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-control" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-control" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-control" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
