import React, { Fragment } from 'react';
import { ReactComponent as IconPerson } from '../assets/icon-person.svg';
import { ReactComponent as IconCog } from '../assets/icon-cog.svg';
import { ReactComponent as IconChart } from '../assets/icon-chart.svg';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Fragment>
      <NavBar />
      <section id="contact" className="container col">
        <div className="contact-heading">
          <h1>Contact</h1>
          <h2 className="h1-small">Ask us About</h2>
        </div>
        <div className="heading-secondary">
          <div>
            <IconPerson className="contact-icon" />
            <p>The quality of our talent network</p>
          </div>
          <div>
            <IconCog className="contact-icon" />
            <p>Usage &amp; implementation of our software</p>
          </div>
          <div>
            <IconChart className="contact-icon" />
            <p>How we help drive innovation</p>
          </div>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </Fragment>
  );
};

export default Contact;
