import React from "react";

export default function Scale() {
  return (
    <div class="">
      <div class="grid grid-cols-1 p-10">
        <div class="p-3 m-3 rounded-lg">
          <div class="space-y-4 p-3">
            <div class="flow-root">
              <div class="text-sm pl-3 text-left font-sm font-bold"></div>
              <div class=" pt-3 pl-7 text-8xl text-left font-medium">
                Hungry & Healthy.
              </div>
            </div>
            <div class="flow-root rounded">
              <div class="grid grid-cols-2 gap-4 text-left p-8 text-2xl">
                <div>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.
                </div>
                <div class="ml-10">
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repell
                </div>
              </div>
              <div class="my-4 py-2 pl-8 px-1 text-left text-sm text-indigo-600">
                <div class="rounded-full font-bold py-3 px-6 w-36 bg-green-200 text-gray-900 hover:bg-green-800 hover:text-gray-50">
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
