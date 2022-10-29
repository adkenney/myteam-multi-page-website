import React from 'react';
import { useHistory } from 'react-router-dom';

const FooterHeading = () => {
  const history = useHistory();

  const contact = () => {
    history.push('/contact');
  };

  return (
    <section className="footer-heading container">
      <h1 className="h1-small">Ready to get started?</h1>
      <button className="contact-btn" onClick={contact}>
        contact us
      </button>
    </section>
  );
};

export default FooterHeading;
