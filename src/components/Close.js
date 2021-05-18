import React from "react";
import screen from "../icons/Screen.svg";

export default function Close() {
  return (
    <div class="">
      <div class="grid grid-cols-2  p-10">
        <div class="p-4 m-4 rounded-lg">
          <div class="space-y-4 p-3">
            <div class="">
              <div class=""></div>
              <div class=" px-15 font-medium ">
                <img src={screen} alt="" srcset="" style={{ width: 650 }} />
              </div>
            </div>
            <div class="flow-root rounded">
              <div class="my-4 p-1 text-left text-md font-sm drop-shadow-sm"></div>
            </div>
          </div>
        </div>

        <div class="p-3  m-3 rounded-lg">
          <div class="space-y-4 p-3">
            <div class="flow-root">
              <div class="text-sm pl-3 text-left font-sm font-bold"></div>
              <div class=" pt-3 pl-3 text-8xl text-left font-medium">
                Vegan Stuff
              </div>
            </div>
            <div class="flow-root rounded">
              <div class="my-0 p-3 m-5 text-left text-md font-medium drop-shadow-sm text-2xl">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque.
              </div>

              <div class="grid grid-cols-3 gap-4 text-left p-10">
                <div>ducimus qui blanditiis praesentium .</div>
                <div>ducimus qui atque.</div>
                <div>blanditiis voluptatum deleniti.</div>
              </div>

              <div class="my-4 py-2 pl-8 px-1 text-left text-sm text-indigo-600">
                <div class="rounded-full font-bold py-3 px-6 w-36 bg-green-200 text-gray-900 hover:bg-green-800 hover:text-gray-50 ">
                  <a
                    href="https://tailwindcss.com/docs"
                    class="text-cyan-600 hover:text-cyan-700">
                    {" "}
                    Learn more &rarr;{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
