import React from 'react';


const Contact = () => {
  return (
    <section className="contact container">
      <h2 className="contact__title">Message me</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" />

        <label htmlFor="phone">Phone</label>
        <input name="phone" type="number" />

        <label htmlFor="email">Email</label>
        <input name="email" type="email" />

        <label htmlFor="message">Message</label>
        <div>
          <textarea name="message" />
        </div>
      </form>
    </section>
  )
};


export default Contact;