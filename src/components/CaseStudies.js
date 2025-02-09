import React from 'react';
import './CaseStudies.css'; // Add styles for Case Studies section

const CaseStudies = () => {
  return (
    <section id="case-studies">
      <h2>Proven Results for Our Clients</h2>
      <div className="case-study">
        <h3>How We Increased One of Kazakhstan's Merchant's Revenue by 30%</h3>
        <p>One of Kazakhstan's online retail merchants was facing stagnant revenue due to an outdated and inefficient payment system, leading to cart abandonment and payment issues, especially with international customers.</p>

<h3>Our Solution:</h3>
<ul>
  <li>Upgraded their payment gateway to improve speed and reliability.</li>
  <li>Added multi-currency support and optimized the mobile checkout experience.</li>
  <li>Implemented real-time transaction analytics and enhanced security features like two-factor authentication.</li>
</ul>

<h3>The Results:</h3>
<ul>
  <li><strong>30% increase in revenue</strong> due to reduced cart abandonment.</li>
  <li><strong>20% higher conversion rates</strong>, especially from international customers.</li>
  <li><strong>25% growth in international customer base</strong> with multi-currency support.</li>
  <li><strong>Improved customer satisfaction</strong> and repeat purchases.</li>
</ul>

<p>This success shows how tailored payment solutions can drive growth and streamline operations for businesses.</p>
      </div>
    </section>
  );
};

export default CaseStudies;
