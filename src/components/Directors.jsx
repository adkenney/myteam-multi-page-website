import React from 'react';
import NikitaAvatar from '../assets/avatar-nikita.jpg';
import CristianAvatar from '../assets/avatar-christian.jpg';
import CruzAvatar from '../assets/avatar-cruz.jpg';
import DrakeAvatar from '../assets/avatar-drake.jpg';
import GriffinAvatar from '../assets/avatar-griffin.jpg';
import AdenAvatar from '../assets/avatar-aden.jpg';

import { ReactComponent as PlusIcon } from '../assets/icon-cross.svg';

const Directors = () => {
  return (
    <section id="directors">
      <h1 className="h1-small">Meet the directors</h1>
      <div className="directors-container">
        <div className="cards-container">
          <div className="director-card">
            <div className="card-front">
              <img
                src={NikitaAvatar}
                alt="Avatar of Nikita Marks"
                className="director-img"
              ></img>
              <h3>Nikita Marks</h3>
              <p className="small-italic">Founder &amp; CEO</p>
            </div>
            <div className="card-back"></div>
            <div className="icon">
              <PlusIcon />
            </div>
          </div>
          <div className="director-card">
            <div className="card-front">
              <img src={CristianAvatar} alt="" className="director-img"></img>
              <h3>Cristian Duncan</h3>
              <p className="small-italic">Co-founder &amp; COO</p>
            </div>
            <div className="card-back"></div>
            <div className="icon">
              <PlusIcon />
            </div>
          </div>
          <div className="director-card">
            <div className="card-front">
              <img src={CruzAvatar} alt="" className="director-img"></img>
              <h3>Cruz Hamer</h3>
              <p className="small-italic">Co-founder &amp; CTO</p>
            </div>
            <div className="card-back"></div>
            <div className="icon">
              <PlusIcon />
            </div>
          </div>
          <div className="director-card">
            <div className="card-front">
              <img src={DrakeAvatar} alt="" className="director-img"></img>
              <h3>Drake Heaton</h3>
              <p className="small-italic">Business Development Lead</p>
            </div>
            <div className="card-back"></div>
            <div className="icon">
              <PlusIcon />
            </div>
          </div>
          <div className="director-card">
            <div className="card-front">
              <img src={GriffinAvatar} alt="" className="director-img"></img>
              <h3>Griffin Wise</h3>
              <p className="small-italic">Lead Marketing</p>
            </div>
            <div className="card-back"></div>
            <div className="icon">
              <PlusIcon />
            </div>
          </div>
          <div className="director-card">
            <div className="card-front">
              <img src={AdenAvatar} alt="" className="director-img"></img>
              <h3>Aden Allan</h3>
              <p className="small-italic">Head of Talent</p>
            </div>
            <div className="card-back"></div>
            <div className="icon">
              <PlusIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directors;
