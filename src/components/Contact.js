import React from "react";

export default function Contact() {
  return (
  <div>
    <div class="py-10 bg-gray-100 px-2">
        <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
            <div class="md:flex">
                <div class="w-full px-4 py-7 text-left">
                    <div class="mb-1"> <span class="text-sm ">First Name</span> 
                    <input type="text" class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"/> 
                    </div>
                    <div class="mb-1"> <span class="text-sm">Last Name</span> <textarea type="text" class="h-12 py-1 px-3 w-full border-2 border-blue-400 rounded focus:outline-none focus:border-blue-600 resize-none"></textarea> </div>
                    <div class="mb-1"> <span class="text-sm">Email</span> <textarea type="text" class="h-12 py-1 px-3 w-full border-2 border-blue-400 rounded focus:outline-none focus:border-blue-600 resize-none"></textarea> </div>
                    <div class="mb-1"> <span class="text-sm text-gray-400">You will be able to edit this information later</span> </div>
                    <div class="mb-1"> <span>Attachments</span>
                        <div class="relative border-dotted h-32 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                        <div class="absolute">
                                <div class="flex flex-col items-center"> <i class="fa fa-folder-open fa-3x text-blue-700"></i> <span class="block text-gray-400 font-normal">Share your progress
                                </span> </div>
                            </div> <input type="file" class="h-full w-full opacity-0" name=""/>
                        </div>
                    </div>
                    <div class="mt-3 rounded-full text-right"> <a href="#">Cancel</a> <button class="ml-2 h-10 w-32 bg-blue-600text-white hover:bg-blue-700">Submit</button> </div>
                </div>
            </div>
        </div>
      </div>
</div>
  );
}
