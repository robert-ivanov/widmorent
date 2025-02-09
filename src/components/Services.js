import React from 'react';
import './Services.css'; // Add styles for Services section

const Services = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="service">
        <h3>Unlock global payment opportunities</h3>
        <p>We help merchants find and integrate with the most reliable Payment Service Providers (PSPs) tailored to their geographic and business-specific needs. Our deep industry knowledge ensures access to competitive offers, secure transactions, and optimized payment solutions.</p>
      </div>
      <div className="service">
        <h3>Simplify payment journeys for enhanced user experiences.</h3>
        <p>Our team offers expert guidance on payment-related technologies and user flow designs, ensuring seamless checkout experiences for your customers. From payment gateways to transaction optimization, we make every click count.</p>
      </div>
      <div className="service">
        <h3>Build scalable, efficient payment systems</h3>
        <p>Leverage our expertise in API architecture to design, implement, or optimize your payment systems. We ensure robust, secure, and high-performing APIs that align with your business goals and streamline your payment operations.</p>
      </div>
      <div className="service">
        <h3>Effortlessly scale your business</h3>
        <p>Our customized strategies for resource management and outsourcing allow you to scale without the operational burden. We streamline processes, improve efficiency, and ensure your business grows sustainably.</p>
      </div>
      <div className="service">
        <h3>Legal and Compliance Assistance</h3>
        <p>Our legal experts guide you through privacy, compliance, and regulatory requirements. Whether you need NDAs, contracts, or policy reviews, we ensure your operations align with industry standards and safeguard your business reputation.</p>
      </div>
    </section>
  );
};

export default Services;
