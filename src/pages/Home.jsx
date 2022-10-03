import React, { Fragment } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import FooterHeading from '../components/FooterHeading';
import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <Services />
      <Testimonials />
      <FooterHeading />
      <Footer />
    </Fragment>
  );
};

export default Home;
