import { useState } from "react";
import data from "./data";
import DataList from "./components/DataList";

const App = () => {
  const [listData, setListData] = useState(data);

  const handleClearAll = () => {
    setListData([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{listData.length} Birthdays Today</h3>
        {/*list -- gets the array data and functions needed*/}
        <DataList dataList={listData} />
        <button
          type="button"
          className="btn btn-block"
          onClick={handleClearAll}
        >
          Clear all
        </button>
      </section>
    </main>
  );
};
export default App;
