import React from "react";
import Tour from "./Tour";

function Tours({ tours = [], removeTour }) {
  console.log("tours", tours);
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
}

export default Tours;

/*
return (
    <section>
      {tours?.map((tour) => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </section>
  );
*/
