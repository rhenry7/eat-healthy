import React from "react";

export default function Grid() {
  return (
    <div class="">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 bg-gray-100 p-10 text-center sm:text-left ">
        <div class="p-4 bg-gray-50 m-4 rounded-lg hover:shadow-2xl">
          <div class="space-y-4 p-3 ">
            <div class="flow-root bg-gray-50">
              <div class="text-sm text-left font-sm">The Motto</div>
              <div class=" pt-3 text-8xl text-left font-medium">
                Eat Healthy.
              </div>
            </div>
            <div class="flow-root rounded">
              <div class="my-4 p-1 text-left text-md font-medium drop-shadow-sm">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque.
              </div>
              <div class="my-4 py-1 px-1 text-left text-sm text-indigo-600">
                <div class="rounded-full font-bold py-3 px-6 w-44 bg-green-200 text-gray-900 hover:bg-green-800 hover:text-gray-50">
                  <a
                    href="https://tailwindcss.com/docs"
                    class="text-cyan-600 hover:text-cyan-700">
                    {" "}
                    Try the recipes &rarr;{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded p-4 bg-gray-50 m-4 rounded-lg hover:shadow-2xl">
          <div class="space-y-4 p-3 ">
            <div class="text-sm text-left font-sm">The Goal</div>
            <div class="flow-root bg-gray-50">
              <div class=" pt-0 text-8xl text-left font-medium">Be Happy.</div>
            </div>
            <div class="flow-root rounded">
              <div class="my-4 p-1 text-left text-md font-medium">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque.
              </div>
              <div class="my-4 py-1 px-1 text-left text-sm text-indigo-600">
                <div class="rounded-full font-bold py-3 px-6 w-48 bg-green-200 text-gray-900 hover:bg-green-800 hover:text-gray-50">
                  <a
                    href="https://tailwindcss.com/docs"
                    class="text-cyan-600 hover:text-cyan-700">
                    {" "}
                    Read the research &rarr;{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded p-4 bg-gray-50 m-4 rounded-lg hover:shadow-2xl">
          <div class="space-y-4 p-3 l">
            <div class="text-sm text-left font-sm">The Reason</div>
            <div class="flow-root bg-gray-50">
              <div class=" pt-0 text-8xl text-left font-medium">
                Live Better.
              </div>
            </div>
            <div class="flow-root rounded">
              <div class="my-4 p-1 text-left text-md font-medium">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque.
              </div>
              <div class="my-4 py-1 px-1 text-left text-sm text-indigo-600">
                <div class="rounded-full font-bold py-3 px-6 w-44 bg-green-200 text-gray-900 hover:bg-green-800 hover:text-gray-50">
                  <a
                    href="https://tailwindcss.com/docs"
                    class="text-cyan-600 hover:text-cyan-700">
                    {" "}
                    Try working out &rarr;{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="rounded p-8 bg-red-500 m-4 filter drop-shadow-lg">3</div>
        <div class="rounded p-8 bg-blue-500 m-4">4</div>
        <div class="rounded p-8 bg-blue-500 m-4">5</div> */}
      </div>
    </div>
  );
}
