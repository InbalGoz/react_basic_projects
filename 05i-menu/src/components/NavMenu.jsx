import React from "react";

function NavMenu({ categoryArr = [], filterCategory }) {
  console.log(categoryArr);
  return (
    <div className="btn-container">
      {categoryArr.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => filterCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default NavMenu;
