// import React from "react";
// import axios from 'axios';

// function Recipes() {
//   const [recipes, setRecipes] = useState([]); // state is empty array
//   const [steps, setSteps] = useState([]); // state is empty array

//   // info for get recipes
//   // const URL = "https://api.spoonacular.com/recipes/findByNutrients?apiKey=d88d58999bec40cdb6d3d84f237c559c&maxCalories=300&maxCarbs=100&number=2"
//   useEffect(() => {
//     axios
//       .get(
//         "https://api.spoonacular.com/recipes/random?apiKey=d88d58999bec40cdb6d3d84f237c559c"
//       )
//       .then((res) => {
//         setRecipes(res.data.recipes);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   useEffect(() => {
//     axios
//       .get(
//         "https://api.spoonacular.com/recipes/random?apiKey=d88d58999bec40cdb6d3d84f237c559c"
//       )
//       .then((res) => {
//         setSteps(res.data.recipes);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   return (
//     <div>
//       <ul>
//         <li>
//           {
//             // code for the recipe cards are here:
//           }
//           <div class="p-1 pb-5">
//             <div class="max-w-sm rounded-lg overflow-hidden shadow-lg ">
//               <img class="w-full" src="/mountain.jpg" alt="" />
//               <div class="px-6 py-4">
//                 <div class="font-bold text-xl mb-2">
//                   {
//                     // make recipe.title
//                   }
//                   Chipotle Cauliflower Nachos
//                 </div>
//                 <p class="text-gray-700 text-base">
//                   {
//                     // make recipe link
//                   }
//                   <a
//                     class="underline m-1"
//                     href="https://www.loveandlemons.com/creamy-broccoli-pasta/">
//                     Chipotle Cauliflower Nachos
//                   </a>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Voluptatibus quia, nulla! Maiores et perferendis eaque,
//                   exercitationem praesentium nihil.
//                 </p>
//               </div>
//               {
//                 // replace each # with correspending data from API
//               }
//               <div class="px-6 pt-4 pb-2">
//                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                   #Mexican
//                 </span>
//                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                   #Fast
//                 </span>
//                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                   #Easy
//                 </span>
//               </div>
//             </div>
//           </div>
//         </li>

//         <li>
//           {
//             // code for the recipe cards are here:
//           }
//           <div class="p-1 pb-5">
//             <div class="max-w-sm rounded-lg overflow-hidden shadow-lg">
//               <img class="w-full" src="/mountain.jpg" alt="" />
//               <div class="px-6 py-4">
//                 <div class="font-bold text-xl mb-2">Shiitake Maki Suhi</div>
//                 <p class="text-gray-700 text-base">
//                   <a
//                     class="underline m-1"
//                     href="https://www.loveandlemons.com/creamy-broccoli-pasta/">
//                     Shiitake Maki Suhi
//                   </a>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Voluptatibus quia, nulla! Maiores et perferendis eaque,
//                   exercitationem praesentium nihil.
//                 </p>
//               </div>
//               <div class="px-6 pt-4 pb-2">
//                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                   #Japanese
//                 </span>
//                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                   #Fish
//                 </span>
//                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                   #Easy
//                 </span>
//               </div>
//             </div>
//           </div>
//         </li>

//         <li>
//           {
//             // code for the recipe cards are here:
//           }
//           <div class="p-1 pb-5">
//             <div class="max-w-sm rounded-lg overflow-hidden shadow-lg">
//               <img class="w-full" src="/mountain.jpg" alt="" />
//               <div class="px-6 py-4">
//                 <div class="font-bold text-xl mb-2">Broccoli Pasta</div>
//                 <p class="text-gray-700 text-base">
//                   <a
//                     class="underline m-1"
//                     href="https://www.loveandlemons.com/creamy-broccoli-pasta/">
//                     Broccoli Pasta
//                   </a>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Voluptatibus quia, nulla! Maiores et perferendis eaque,
//                   exercitationem praesentium nihil.
//                 </p>
//               </div>
//               <div class="px-6 pt-4 pb-2">
//                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                   #Italian
//                 </span>
//                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                   #Vegetarian
//                 </span>
//                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                   #Easy
//                 </span>
//               </div>
//             </div>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Recipes;
