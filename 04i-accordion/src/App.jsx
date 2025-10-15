import { useState } from "react";
import questions from "./data";
import SingleQuestion from "./SingleQuestion";
import Questions from "./Questions";

const App = () => {
  const [data, setData] = useState(questions);
  return (
    <main>
      <Questions questions={data} />
    </main>
  );
};
export default App;
