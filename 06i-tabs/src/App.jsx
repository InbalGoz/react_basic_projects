import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log("result", result);
      setJobs(result);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    //setCurrentItem(jobs[0]);
  }, []);

  if (loading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentJob={currentItem}
        setCurrentJob={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
