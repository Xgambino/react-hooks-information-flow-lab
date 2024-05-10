// import React, { useState } from "react";
// import Item from "./Item";
// import Filter from "./Filter";

// function ShoppingList({ items }) {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   function handleCategoryChange(event) {
//     setSelectedCategory(event.target.value);
//   }

//   const itemsToDisplay = items.filter((item) => {
//     if (selectedCategory === "All") return true;

//     return item.category === selectedCategory;
//   });

//   return (
//     <div className="ShoppingList">
    
//       <Filter onCategoryChange={handleCategoryChange} />
//       <ul className="Items">
//         {itemsToDisplay.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;


import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [items, setItems] = useState(itemData);
  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const handleItemChange = (updatedItems) => {
    setItems(updatedItems);
  };

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} />
      <ShoppingList items={items} onItemChange={handleItemChange} />
    </div>
  );
}

export default App;


