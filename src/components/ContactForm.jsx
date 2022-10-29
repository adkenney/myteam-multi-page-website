import React from 'react';

const ContactForm = () => {
  return (
    <section>
      <form>
        <input type="text" name="name" placeholder="Name"></input>
        <input type="email" name="email" placeholder="Email Address"></input>
        <input type="text" name="company" placeholder="Company Name"></input>
        <input type="text" name="title" placeholder="Title"></input>
        <textarea name="message" placeholder="Message"></textarea>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
