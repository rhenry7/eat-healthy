import React from "react";
import screen from "../icons/Screen.svg";

export default function Close() {
  return (
    <div class="">
      <div class="grid p-10 grid-cols-1 md:grid-cols-2">
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
                Contact Us.
              </div>
              <div class=" pt-3 pl-3 text-2xl text-left font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque perferendis vitae quod vero quas beatae inventore debitis quae!
              </div>
            </div>

            <div class="py-10">
        <div class="max-w-md bg-white rounded-lg overflow-hidden md:max-w-lg">
            <div class="md:flex">
                <div class="w-full px-4 py-7 text-left">
                    <div class="mb-1"> <span class="text-sm ">First Name</span> 
                    <input type="text" class="h-12 px-3 w-full border-gray-400 border-2 rounded focus:outline-none focus:border-green-600"/> 
                    </div>
                    <div class="mb-1"> <span class="text-sm">Last Name</span> <textarea type="text" class="h-12 py-1 px-3 w-full border-2 border-gray-400 rounded focus:outline-none focus:border-green-600 resize-none"></textarea> </div>
                    <div class="mb-1"> <span class="text-sm">Email</span> <textarea type="text" class="h-12 py-1 px-3 w-full border-2 border-gray-400 rounded focus:outline-none focus:border-green-600 resize-none"></textarea> </div>
                    <div class="mb-1"> <span class="text-sm text-gray-400">You will be able to edit this information later</span> </div>
                    <div class="mb-1"> <span>Attachments</span>
                        <div class="relative border-dotted h-32 rounded-lg border-dashed border-2 border-gray-700 bg-gray-100 flex justify-center items-center">
                        <div class="absolute">
                                <div class="flex flex-col items-center"> <i class="fa fa-folder-open fa-3x text-blue-700"></i> <span class="block text-gray-400 font-normal">Share your progress
                                </span> </div>
                            </div> <input type="file" class="h-full w-full opacity-0" name=""/>
                        </div>
                    </div>
                    <div class="mt-3 text-right"> <a href="#">Cancel</a> <button class="ml-2 h-10 w-32 bg-green-600 rounded text-white hover:bg-green-700">Create</button> </div>
                </div>
            </div>
        </div>
      </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}
