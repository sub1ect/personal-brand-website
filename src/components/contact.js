import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhoneSquareAlt} from "@fortawesome/free-solid-svg-icons";



const Contact = () => {
  return (
    <section className="contact container">
      <h2 className="contact__title">Message me</h2>
      <div className="contact__contact">
        <p className="phone"><FontAwesomeIcon className="icon" icon={faPhoneSquareAlt} size="2x"/>555-555-555</p>
        <p className="email"><FontAwesomeIcon className="icon" icon={faEnvelope} size="2x"/>konrad@yahoo.com</p>
      </div>
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