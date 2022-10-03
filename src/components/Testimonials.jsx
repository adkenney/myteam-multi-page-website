import React from 'react';
import AvatarKady from '../assets/avatar-kady.jpg';
import AvatarAiysha from '../assets/avatar-aiysha.jpg';
import AvatarArthur from '../assets/avatar-arthur.jpg';

const Testimonials = () => {
  return (
    <section id="testimonials" className="col container">
      <h1 className="h1-small">
        Delivering real results for top companies. Some of our
        <span> success stories</span>
      </h1>
      <div className="testimonial-content">
        <div className="testimonial">
          <p className="p-small">
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </p>
          <h3>Kady Baker</h3>
          <p className="small-italic">Product manager at Bookmark</p>
          <div className="avatar">
            <img src={AvatarKady} alt="" />
          </div>
        </div>
        <div className="testimonial">
          <p className="p-small">
            “We needed to automate our entire onboarding process. The team came
            in and built out the whole journey. Since going live, user retention
            has gone through the roof!”
          </p>
          <h3>Aiysha Reese</h3>
          <p className="small-italic">Founder of Manage</p>
          <div className="avatar">
            <img src={AvatarAiysha} alt="" />
          </div>
        </div>
        <div className="testimonial">
          <p className="p-small">
            “Amazing. Our team helped us build an app that delivered a new
            experience for hiring a physio. The launch was an instant success
            with 100k downloads in the first month.”
          </p>
          <h3>Arthur Clarke</h3>
          <p className="small-italic">Co-founder of MyPhysio</p>
          <div className="avatar">
            <img src={AvatarArthur} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
