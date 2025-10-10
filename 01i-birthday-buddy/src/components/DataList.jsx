import React from "react";
import Person from "./Person";

function DataList({ dataList = [] }) {
  console.log(dataList);
  return (
    <section>
      {dataList &&
        dataList.map((person) => <Person key={person.id} person={person} />)}
      {/*person -- gets the array data and functions needed*/}
    </section>
  );
}

export default DataList;
