import React from "react";
import phone from "../icons/Phone.svg";

export default function Value() {
  return (
    <div class="">
      <div class="grid grid-cols-2 overflow-hidden bg-gray-200 p-10">
        <div class="p-3 m-3 rounded-lg">
          <div class="space-y-4 p-3 ">
            <div class="flow-root ">
              <div class="text-sm pl-3 text-left font-sm font-bold"></div>
              <div class=" pt-3 pl-7 text-8xl text-left font-medium md:text-8xl  ">
                Be ready, alert, and present.
              </div>
            </div>
            <div class="flow-root rounded">
              <div class="my-4 p-8 text-left text-2xl">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </div>

              <div class="my-4 py-2 pl-4 px-1 text-left">
                <div class="rounded-full font-bold py-3 px-6 text-gray-900">
                  <a
                    href="https://tailwindcss.com/docs"
                    class="text-cyan-600 text-2xl md:text-2xl lg:text-4xl hover:text-green-300">
                    {" "}
                    Learn more &rarr;{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 m-4 rounded-lg">
          <div class="space-y-4 p-3">
            <div class="">
              <div class=""></div>
              <div class=" px-20 mx-20 font-medium">
                <img src={phone} alt="" srcset="" style={{ width: 350 }} />
              </div>
            </div>
            <div class="flow-root rounded">
              <div class="my-4 p-1 text-left text-md font-sm drop-shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
