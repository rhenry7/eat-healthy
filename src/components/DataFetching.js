import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching(props) {
  // desctructure post, initialize as state
  const [recipes, setRecipes] = useState([]); // state is empty array
  const [steps, setSteps] = useState([]); // state is empty array

  // info for get recipes
  // const URL = "https://api.spoonacular.com/recipes/findByNutrients?apiKey=d88d58999bec40cdb6d3d84f237c559c&maxCalories=300&maxCarbs=100&number=2"
  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?apiKey=d88d58999bec40cdb6d3d84f237c559c"
      )
      .then((res) => {
        setRecipes(res.data.recipes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?apiKey=d88d58999bec40cdb6d3d84f237c559c"
      )
      .then((res) => {
        setSteps(res.data.recipes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //  {<img src={post.image} alt="" srcset="" />}
  return (
    <div>
      <ui>
        {recipes.map((post) => (
          <li class="list-none" key={post.id}></li>
        ))}
      </ui>

      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg ">
        <img class="w-full" src="/mountain.jpg" alt="" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            {recipes.map((post) => (
              <div key={post.id}></div>
            ))}
          </div>
          <div class="font-medium text-xl mb-2">
            {steps.map((post) => (
              <ul>
                <li key={post.id}>
                  {
                    <img
                      src={post.image}
                      alt=""
                      srcset=""
                      style={{ width: 350 }}
                    />
                  }
                  <div class="font-bold">{post.title}</div>
                  {post.analyzedInstructions[0].steps[0]}
                  {/* {console.log(post.analyzedInstructions.steps.step[0])} */}
                </li>
              </ul>
            ))}
          </div>
          <p class="text-gray-700 text-base">
            <a
              class="underline m-1"
              href="https://www.loveandlemons.com/creamy-broccoli-pasta/">
              Chipotle Cauliflower Nachos
            </a>
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {recipes.map((post) => ({
              /* <div key={post.id}>{post.cuisines}</div> */
            }))}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Fast
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Easy
          </span>
        </div>
      </div>
    </div>
  );
}

export default DataFetching;
