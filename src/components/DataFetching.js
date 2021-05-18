import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  // desctructure post, initialize as state
  const [recipes, setRecipes] = useState([]); // state is empty array
  // info for get recipes
  // const URL = "https://api.spoonacular.com/recipes/findByNutrients?apiKey=d88d58999bec40cdb6d3d84f237c559c&maxCalories=300&maxCarbs=100&number=2"
  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/findByNutrients?apiKey=d88d58999bec40cdb6d3d84f237c559c&maxCalories=300&maxCarbs=100&number=2"
      )
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <ui>
        {recipes.map((post) => (
          <li class="list-none" key={post.id}>
            {<img src={post.image} alt="" srcset="" />}
            Name: {post.title}
            calories: {post.calories}
          </li>
        ))}
      </ui>
    </div>
  );
}

export default DataFetching;
