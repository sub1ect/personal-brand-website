import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhoneSquareAlt} from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
  const [name, setName] = useState("");
  const [namePH, setNamePH] = useState("");

  const [phone, setPhone] = useState("");
  const [phonePH, setPhonePH] = useState("");

  const [email, setEmail] = useState("");
  const [emailPH, setEmailPH] = useState("");

  const [message, setMessage] = useState("");

  const [confirm, setConfirm] = useState(false);

  const nameHandle = e => {
    setName(e.target.value);
    console.log(name);
  };

  const phoneHandle = e => {
    setPhone(e.target.value);
    console.log(phone);
  };

  const emailHandle = e => {
    setEmail(e.target.value);
    console.log(email);
  };

  const messageHandle = e => {
    setMessage(e.target.value);
    console.log(message);
  };

  const validation = {
    name: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,

    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/im,

    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    message: /^[A-Za-z]+$/,
  };

  const sendHandle = e => {
    e.preventDefault();
    if(validation.name.test(name) 
        && validation.phone.test(phone)
        && validation.email.test(email)) {

      setConfirm(true);  
      setTimeout(() => {
        setConfirm(false);
      }, 3000);
    } else {
      if(!validation.name.test(name)) {
        setName("");
        setNamePH("Sorry, name is not valid.");
      }
      if(!validation.phone.test(phone)) {
        setPhone("");
        setPhonePH("Sorry, number is not valid.");
      }
      if(!validation.email.test(email)) {
        setEmail("");
        setEmailPH("Sorry, email is not valid.");
      }
    }
  };

  return (
    <section className="contact container">
      <h2 className="contact__title">Message me</h2>
      <div className="contact__contact">
        <p className="phone"><FontAwesomeIcon className="icon" icon={faPhoneSquareAlt} size="2x"/>555-555-555</p>
        <p className="email"><FontAwesomeIcon className="icon" icon={faEnvelope} size="2x"/>kd@trener.pl</p>
      </div>
      <form>
        <label htmlFor="name">Name</label>
        <input onChange={e => nameHandle(e)} value={name} name="name" type="text" placeholder={namePH}/>

        <label htmlFor="phone">Phone</label>
        <input onChange={e => phoneHandle(e)} value={phone} name="phone" type="text" placeholder={phonePH}/>

        <label htmlFor="email">Email</label>
        <input onChange={e => emailHandle(e)} value={email} name="email" type="email" placeholder={emailPH}/>

        <div>
          <label htmlFor="message">Message</label>
          <textarea maxLength="750" onChange={e => messageHandle(e)} value={message} name="message" />
        </div>
        <button style={{width: confirm ? "100%" : "auto"}} className="sendBtn" onClick={e => sendHandle(e)}type="submit">{!confirm ? "Send" : "Your message has been sent, I will contact you soon!"} </button>
      </form>
    </section>
  )
};


export default Contact;