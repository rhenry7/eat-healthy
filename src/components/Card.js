import React from "react";

const Card = () => {
  return (
    <div
      class="min-h-screen py-6 flex flex-col bg-food-jpg bg-cover  justify-start sm:py-12 bg-left "
      styles="background-image: url(https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)">
      <div class="relative py-8 sm:max-w-xl sm:mx-auto">
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-left text-8xl leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 class="text-8xl ml-1 text-black pb-10 font-bold">
                  Let's Eat Healthy.
                </h1>
                <ul class="list-disc space-y-2 font-medium text-center  text-2xl md:text-sm sm:text-left">
                  <li class="flex items-start">
                    <span class="h-6 flex items-center sm:h-2">
                      <svg
                        class="flex-shrink-0 h-5 w-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="green">
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p class="ml-2 ">Your body will thank you.</p>
                  </li>
                  <li class="flex items-start">
                    <span class="h-6 flex items-center sm:h-7">
                      <svg
                        class="flex-shrink-0 h-5 w-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="green">
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p class="ml-2">You'll feel better</p>
                  </li>
                </ul>
                <p class="text-2xl md:text-lg">
                  Learn how eating healthy can improve your body and mind.
                  Recipes, articles and exercises to change your lifestyle and
                  improve your mood.
                </p>
              </div>
              <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>Want to start a new journey?</p>
                <p>
                  <a
                    href="https://tailwindcss.com/docs"
                    class="text-cyan-600 hover:text-cyan-700">
                    {" "}
                    Get started &rarr;{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
