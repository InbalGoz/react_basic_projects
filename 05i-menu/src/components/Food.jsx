import React from "react";

function Food({ foodItem }) {
  return (
    <article className="menu-item">
      <img src={foodItem.img} alt={foodItem.title} className="img"></img>
      <div className="item-info">
        <header>
          <h5>{foodItem.title}</h5>
          <span className="item-price">${foodItem.price}</span>
        </header>
        <p className="item-text">{foodItem.desc}</p>
      </div>
    </article>
  );
}

export default Food;
