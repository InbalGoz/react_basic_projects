import React from "react";
import Food from "./Food";

function MenuList({ menuList = [] }) {
  return (
    <div className="section-center">
      {menuList.map((food) => (
        <Food key={food.id} foodItem={food} />
      ))}
    </div>
  );
}

export default MenuList;
