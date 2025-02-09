import React, { useState } from 'react';
import Modal from './Modal';
import './Footer.css'; // Add styles for Footer section

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  const privacyPolicyContent = (
    <div>
      <h3>Privacy Policy</h3>
      <p>Your privacy is very important to us. This privacy policy outlines the types of personal information we collect and how we use it. By using our services, you agree to the collection and use of your data in accordance with this policy.</p>
      <p>We collect personal information such as your name, email address, and payment details to process your transactions. This information is stored securely and used solely for business operations.</p>
      <p>If you have any questions regarding our privacy practices, please contact us.</p>
    </div>
  );

  const termsOfServiceContent = (
    <div>
      <h3>Terms of Service</h3>
      <p>By using our services, you agree to the following terms and conditions. Please read these terms carefully before using our platform.</p>
      <p>We reserve the right to modify these terms at any time. Your continued use of our services after any changes signifies your acceptance of the new terms.</p>
      <p>If you disagree with any of these terms, you must stop using our services immediately.</p>
    </div>
  );

  return (
    <footer>
      <div className="footer-content">
        <ul>
          <li><button onClick={() => openModal(privacyPolicyContent)}>Privacy Policy</button></li>
          <li><button onClick={() => openModal(termsOfServiceContent)}>Terms of Service</button></li>
        </ul>
        <p>© 2025 Widmor Entertainment LLC.</p>
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </footer>
  );
};

export default Footer;
