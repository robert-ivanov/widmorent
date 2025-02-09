import React, { useState } from 'react';
import './Contact.css'; // Add styles for Contact section
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('general');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const templateParams = {
      name: name,
      email: email,
      company: company,
      message: message,
      subject: subject,
    };

    emailjs.send('service_q3w3ckp', 'template_iku66bd', templateParams, 'gTYvAkyRp3H1dSRM1')
      .then(
        (result) => {
          setIsModalOpen(true); // Show the modal after successful submission
        },
        (error) => {
          alert('An error occurred: ' + error.text);
        }
      );
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal when clicked
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Name"
          required
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="services">Services</option>
          <option value="support">Support</option>
          <option value="general">Affilate</option>
          <option value="general">Other</option>
        </select>
        <button type="submit">Send Message</button>
      </form>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Message Sent Successfully!</h3>
            <p>We have received your message and will get back to you soon.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
