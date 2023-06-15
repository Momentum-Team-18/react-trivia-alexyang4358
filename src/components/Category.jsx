import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Quiz from "./Quiz";

function Category() {
  const URL = "https://opentdb.com/api_category.php";
  const [categories, setCategories] = useState([]);
  const [categoryID, setCategoryID] = useState(null);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => setCategories(response.data.trivia_categories));
  }, []);

  const handleCategoryID = (id) => {
    setCategoryID(id);
  };

  return (
    <>
      {categoryID ? (
        <Quiz categoryID={categoryID} />
      ) : (
        <div className="content">
          <h1 className="title">Please Pick a Trivia Category</h1>
          {categories.map((category) => (
            <button
              key={category.id}
              className="button"
              onClick={() => handleCategoryID(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default Category;

//

// formatting the get request
// update/refresh state of quizes when button is clicked
// display <Quiz /> properly
// npm he (translates strings)

//     return (
// categoryID ? <Quiz categoryID={categoryID} /> : (
{
  /* {categoryID && <Quiz categoryID={categoryID}/>} */
}
// )
