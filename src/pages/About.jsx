import React, { Fragment } from 'react';
import AboutHero from '../components/AboutHero';
import Clients from '../components/Clients';
import Directors from '../components/Directors';
import Footer from '../components/Footer';
import FooterHeading from '../components/FooterHeading';
import NavBar from '../components/NavBar';

const About = () => {
  return (
    <Fragment>
      <NavBar />
      <AboutHero />
      <Directors />
      <Clients />
      <FooterHeading />
      <Footer />
    </Fragment>
  );
};

export default About;
