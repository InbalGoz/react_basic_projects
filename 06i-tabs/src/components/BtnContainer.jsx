import React from "react";

function BtnContainer({ jobs = [], currentJob, setCurrentJob }) {
  console.log(jobs);

  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setCurrentJob(index)}
            className={index === currentJob ? "job-btn active-btn" : "job-btn"}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}

export default BtnContainer;
