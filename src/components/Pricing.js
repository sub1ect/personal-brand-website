import React from 'react';
import training from "../images/1.jpg";
import meal from "../images/food.jpg";
import online from "../images/online.jpg";


const Pricing = () => {
  return (
    <section id="pricing" className="pricing container">
      <h2 className="pricing__title">Pricing</h2>
      <div className="pricing__cards">
        <Card 
          background={training} 
          text={"Training plan"}
          price={"100$"}
        />
        <Card 
          background={meal} 
          text={"Diet plan"}
          price={"150$"}
        />
        <Card 
          background={online} 
          text={"Online consultation"}
          price={"50$"}
        />
      </div>
    </section>
  )
};

const Card = ({background, text, price}) => {
  return (
    <div className="pricing__card" style={{backgroundImage: `url(${background})`}}>
      <h3 className="pricing__card__title">{text}</h3>
      <p className="pricing__card__price">{price}</p>
      <small>only</small>
    </div>
  )
};


export default Pricing;