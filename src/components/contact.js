import React from 'react';


const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact__title">Message me</h2>
      <form>
        <label for="name">Name</label>
        <input name="name" type="text" />

        <label for="phone">Phone</label>
        <input name="phone" type="number" />

        <label for="email">Email</label>
        <input name="email" type="email" />

        <label for="message">Message</label>
        <div>
          <textarea name="message" />
        </div>
      </form>
    </section>
  )
};


export default Contact;