import React, { useState } from "react";

function Tour({ tour, removeTour }) {
  const [toggleRead, setToggleRead] = useState(false);
  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} className="img" />
      <span className="tour-price">${tour.price}</span>
      <div className="tour-info">
        <h5>{tour.name}</h5>

        <p>
          {toggleRead ? tour.info : `${tour.info.substring(0, 200)}...`}
          <button
            className="info-btn"
            onClick={() => setToggleRead(!toggleRead)}
          >
            {toggleRead ? "show less" : "  read more"}
          </button>
        </p>
        <button
          className="delete-btn btn-block btn"
          onClick={() => removeTour(tour.id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
}

export default Tour;

/*
return (
    <section>
      <h3>{tour.name}</h3>
      <div>
        <img src={tour.image}></img>
        {toggleRead && <p>{tour.info}</p>}
        <p>{tour.price}</p>
        <button className="btn" onClick={() => removeTour(tour.id)}>
          remove tour
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "purple", margin: "10px" }}
          onClick={() => setToggleRead(!toggleRead)}
        >
          read more
        </button>
      </div>
    </section>
  );
*/
