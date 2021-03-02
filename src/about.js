import React from 'react';
import image from "./images/5.jpg";


const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">About</h2>
      <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam illo id molestiae error laboriosam qui quae obcaecati. Quis quisquam facilis doloremque recusandae, qui dolor nesciunt pariatur ex quos fuga harum unde, sed iste commodi? Eos voluptate architecto expedita vel.</p>
      <img className="about__img" src={image} alt="image" />
    </section>
  )
};


export default About;