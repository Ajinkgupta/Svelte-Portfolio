<!-- src/routes/about.svelte -->
<svelte:head>
	<title>About</title>
</svelte:head>

<!-- component -->
<div class="px-2">
  <div class="container mx-auto mt-8 pb-10">
    <div class="">
      <div class="mr-4 w-full">
        <div class="flex justify-between">
          <button type="button" class="flex items-center justify-center rounded-lg border border-gray-400 bg-gray-100 px-4 py-1 text-center hover:bg-gray-300 focus:outline-none">
            <svg class="mr-1 h-5 w-5 fill-current text-gray-600" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
            <span class="self-center text-sm font-medium">master</span>
            <svg class="ml-1 h-3 w-3 fill-current text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="flex hidden md:block md:flex">
            <button type="button" class="ml-2 flex items-center justify-center rounded-lg border border-gray-400 bg-gray-100 px-4 py-1 text-center hover:bg-gray-300 focus:outline-none">
              <span class="self-center text-sm font-medium">Go to file</span>
            </button>
            <button type="button" class="ml-2 flex items-center justify-center rounded-lg border border-gray-400 bg-gray-100 px-4 py-1 text-center hover:bg-gray-300 focus:outline-none">
              <span class="self-center text-sm font-medium">Add file</span>
              <svg class="ml-1 h-3 w-3 fill-current text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <button type="button" class="ml-2 flex items-center justify-center rounded-lg border border-green-700 bg-green-600 px-4 py-1 text-center text-white hover:bg-green-700 focus:outline-none">
              <svg class="mr-1 h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              <span class="self-center text-sm font-medium">Clone</span>
              <svg class="ml-1 h-3 w-3 fill-current" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path></svg>
            </button>
          </div>
          <button type="button" class="ml-2 flex items-center justify-center rounded-lg border border-gray-400 bg-gray-100 px-6 py-1 text-center hover:bg-gray-300 focus:outline-none md:hidden">
            <svg class="h-5 w-5 fill-current text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
          </button>
        </div>
        <div class="my-4 ">
          <div class="flex justify-between rounded-t-lg border border-indigo-200 bg-indigo-100 px-4 py-3">
            <div class="flex items-center">
              <img class="mr-2 h-6 w-6 rounded-md" src="https://avatars.githubusercontent.com/u/76146259?s=48&v=4" alt="" />
              <p class="text-sm font-semibold">AjinkGupta</p>
              <span class="ml-2 text-sm text-gray-600">committed 3 days ago</span>
            </div>
            <div class="hidden md:block md:flex">
              <a href="" class="mb-1 flex items-center text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline">
             
                 2,954 commits
              </a>
              <a href="" class="mb-1 ml-4 flex hidden items-center text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline lg:block lg:flex">
                <svg class="mr-1 h-4 w-4 fill-current" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                </svg>
                22 branches
              </a>
              <a href="" class="mb-1 ml-4 hidden items-center text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline lg:block lg:flex">
                <svg class="mr-1 h-4 w-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                </svg>
                76 tags
              </a>
            </div>
          </div>
          <div class="rounded-b-lg bg-white border-b border-l border-r text-center">
            <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
              <div class="flex w-1/4">
                <svg class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>
                <p class="ml-2 cursor-pointer hover:text-blue-500 hover:underline">.github</p>
              </div>
              <p class="w-1/2 cursor-pointer text-left hover:text-blue-500 hover:underline">Drop fs-extra version to..</p>
              <p class="w-1/4 text-right">2 months ago</p>
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-white mb-28 border border-b py-6 px-8">
          <div class="font-semibold text-black">README.md</div>
            
          <div class="my-6">
           <hr />
            <img class="w-64" src="https://camo.githubusercontent.com/87d7034892fd41dc88f3606bb44b853f87cd2c51/68747470733a2f2f7265666163746f72696e6775692e6e7963332e63646e2e6469676974616c6f6365616e7370616365732e636f6d2f7461696c77696e642d6c6f676f2e737667" alt="" />
            <p>A utility-first CSS framework for rapidly building custom user interfaces.</p>
            <div class="flex">
              <div class="my-4 mr-2 flex items-center">
                <div class="flex cursor-pointer items-center rounded-l-md bg-gray-800 px-2 py-1 leading-none text-white">
                  <span class="self-center text-xs font-medium">build</span>
                </div>
                <div class="cursor-pointer rounded-r-md bg-green-500 px-2 py-1 text-xs font-semibold leading-none text-white">passing</div>
              </div>
              <div class="my-4 mr-2 flex items-center">
                <div class="flex cursor-pointer items-center rounded-l-md bg-gray-800 px-2 py-1 leading-none text-white">
                  <span class="self-center text-xs font-medium">downloads</span>
                </div>
                <div class="cursor-pointer rounded-r-md bg-green-500 px-2 py-1 text-xs font-semibold leading-none text-white">8.7M</div>
              </div>
            </div>
            <hr />
          </div>
          <div class="mb-6">
            <div class="-mx-4 flex items-center pb-2 text-lg font-bold leading-normal text-transparent hover:text-gray-700">
              <svg class="mr-1 h-4 w-4 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
              <p class="text-black">Documentation</p>
            </div>
            <hr />
            <div class="my-4">For full documentation, visit <a href="#" class="text-blue-600 hover:underline">tailwindcss.com</a></div>
          </div>
          <div class="mb-6">
            <div class="-mx-4 flex items-center pb-2 text-lg font-bold leading-normal text-transparent hover:text-gray-700">
              <svg class="mr-1 h-4 w-4 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
              <p class="text-black">Community</p>
            </div>
            <hr />
            <div class="my-4">For help, discussion about best practices, or any other conversation that would benefit from being searchable:</div>
            <a href="#" class="my-4 text-blue-600 hover:underline">Discuss Tailwind CSS on GitHub</a>
            <div class="my-4">For casual chit-chat with others using the framework:</div>
            <a href="#" class="my-4 text-blue-600 hover:underline">Join the Tailwind CSS Discord Server</a>
          </div>
          <div class="mb-6">
            <div class="-mx-4 flex items-center pb-2 text-lg font-bold leading-normal text-transparent hover:text-gray-700">
              <svg class="mr-1 h-4 w-4 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
              <p class="text-black">Contributing</p>
            </div>
            <hr />
            <div class="my-4">If you're interested in contributing to Tailwind CSS, please read our <a href="#" class="text-blue-600 hover:underline">contributing docs</a> <span class="font-semibold text-black">before submitting a pull request.</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
