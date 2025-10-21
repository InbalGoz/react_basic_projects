import { useState } from "react";
import MenuList from "./components/MenuList";
import Title from "./components/Title";
import menu from "./data";
import NavMenu from "./components/NavMenu";

const App = () => {
  const [menuData, setMenuData] = useState(menu);
  const tempCategories = menuData.map((item) => item.category); // create a new array with only categories
  const tempSet = new Set(tempCategories); //create a set which will contain only a uniqe value for each category
  const tempItems = ["all", ...tempSet]; //create a new array that contains tha 'all' elemnt and a copy of the elemnts in the tempset

  const [categoryArr, setCategoryArr] = useState(tempItems);

  const handleCategory = (category) => {
    if (category === "all") {
      setMenuData(menu);
      return;
    }
    const newMenuList = menu.filter((f) => f.category === category);
    setMenuData(newMenuList);
  };

  return (
    <main>
      <section className="menu">
        <Title />
        <NavMenu categoryArr={categoryArr} filterCategory={handleCategory} />
        <MenuList menuList={menuData} />
      </section>
    </main>
  );
};
export default App;
