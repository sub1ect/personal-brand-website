import React from 'react';
import image from "../images/5.jpg";


const About = () => {
  return (
    <section className="about container">
      <h2 className="about__title">About</h2>
      <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam illo id molestiae error laboriosam qui quae obcaecati. Quis quisquam facilis doloremque recusandae, qui dolor nesciunt pariatur ex quos fuga harum unde, sed iste commodi? Eos voluptate architecto expedita vel.</p>
      <p className="about__text text--desktop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam eligendi reiciendis sequi dolorum explicabo, enim quasi deserunt ratione dicta assumenda aut totam praesentium harum distinctio rerum nesciunt cupiditate exercitationem tempora ipsam vel rem asperiores optio! Nesciunt at dolores asperiores eveniet debitis facere ex odit rerum! Earum labore repudiandae dolores quod quidem dicta officia? Et, nulla assumenda esse at nesciunt quasi deleniti est quia id hic laboriosam cupiditate eum corporis suscipit dolor, aperiam, perspiciatis commodi recusandae praesentium aliquid numquam odit? Eaque veniam, placeat consequatur porro distinctio, voluptatibus nemo cumque totam voluptas nostrum accusantium magni modi enim odit alias repellendus! Necessitatibus?</p>
      <p className="about__text text--desktop">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos molestiae ratione praesentium placeat. Incidunt magnam laudantium amet iure error earum reprehenderit? Deserunt aut tempore molestiae possimus laudantium praesentium, iusto nihil.</p>
      <img className="about__img" src={image} alt="image" />
    </section>
  )
};


export default About;