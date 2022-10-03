import React from 'react';
import { ReactComponent as IconPerson } from '../assets/icon-person.svg';
import { ReactComponent as IconCog } from '../assets/icon-cog.svg';
import { ReactComponent as IconChart } from '../assets/icon-chart.svg';

const Services = () => {
  return (
    <section id="services" className="col container">
      <div className="divider"></div>
      <div>
        <h1 className="h1-small">
          Build &amp; manage distributed teams like no one else.
        </h1>
      </div>
      <div className="services-content">
        <div>
          <IconPerson />
          <h3 className="hero-header-text">Experienced Individuals</h3>
          <p className="p-small">
            Our network is made up of highly experienced professionals who are
            passionate about what they do.
          </p>
        </div>
        <div>
          <IconCog />
          <h3 className="hero-header-text">Easy to Implement</h3>
          <p className="p-small">
            Our processes have been refined over years of implementation meaning
            our teams always deliver.
          </p>
        </div>
        <div>
          <IconChart />
          <h3 className="hero-header-text">Enhanced Productivity</h3>
          <p className="p-small">
            Our customized platform with in-built analytics helps you manage
            your distributed teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
