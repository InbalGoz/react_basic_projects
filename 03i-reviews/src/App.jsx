import { useEffect, useState } from "react";
import reviews from "./data";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);

  //const { name, job, image, text } = reviews[index];

  const handlePrev = () => {
    setIndex((currIndex) => {
      let newIndex = currIndex - 1;
      if (currIndex === 0) {
        newIndex = reviews.length - 1;
      }
      return newIndex;
    });
    /* if (index === 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }*/
  };

  const handleNext = () => {
    setIndex((currIndex) => {
      let newIndex = currIndex + 1;
      if (currIndex === reviews.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
    /* if (index === reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }*/
  };

  const handleRandom = () => {
    setIndex(Math.floor(Math.random() * (reviews.length - 1 - 0 + 1)) + 0);
  };
  //todo- show only one person at a time

  return (
    <>
      <main>
        <article className="review">
          <div className="img-container">
            <img
              src={reviews[index].image}
              alt={reviews[index].name}
              className="person-img"
            />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{reviews[index].name}</h4>
          <p className="job">{reviews[index].job}</p>
          <p className="info">{reviews[index].text}</p>
          <div className="btn-container">
            <button className="prev-btn" onClick={handlePrev}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={handleNext}>
              <FaChevronRight />
            </button>
          </div>
          <button className="btn btn-hipster" onClick={handleRandom}>
            surprise me
          </button>
        </article>
      </main>
    </>
  );
};
export default App;
