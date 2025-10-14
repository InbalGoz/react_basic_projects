import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [toursList, setToursList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTours = async () => {
    // will use later
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setToursList(tours);
      setLoading(false);
      console.log(tours);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleRemoveTour = (id) => {
    const newTours = toursList.filter((tour) => tour.id !== id);
    setToursList(newTours);
  };

  const handleRefresh = () => {
    fetchTours();
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (toursList.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={handleRefresh}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={toursList} removeTour={handleRemoveTour} />
    </main>
  );
};
export default App;
