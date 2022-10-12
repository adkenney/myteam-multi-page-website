import React from 'react';
import TheVergeLogo from '../assets/logo-the-verge.png';
import JpLogo from '../assets/logo-jakarta-post.png';
import GuardianLogo from '../assets/logo-the-guardian.png';
import TechRadarLogo from '../assets/logo-tech-radar.png';
import GadgetsNowLogo from '../assets/logo-gadgets-now.png';
const Clients = () => {
  return (
    <section id="clients" className="container">
      <h1 className="h1-small">Some of our clients</h1>
      <div className="container client-logos">
        <img src={TheVergeLogo} alt="The verge logo" />
        <img src={JpLogo} alt="The Jakarta Post logo" />
        <img src={GuardianLogo} alt="The Guardian logo" />
        <img src={TechRadarLogo} alt="Tech Radar logo" />
        <img src={GadgetsNowLogo} alt="Gadgets Now logo" />
      </div>
    </section>
  );
};

export default Clients;
