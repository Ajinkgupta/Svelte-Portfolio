<!-- src/routes/__layout.svelte -->

<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
<script>
  import "../app.css"; 
</script>

<header class="sticky top-0 z-50 flex items-center px-2  py-2 border-b-1 shadow-lg bg-white/90 backdrop-blur-md border-slate-300/20">
    <div class="flex items-center flex-grow basis-0">
          <a href="/" class="text-lg font-bold  text-slate-900">
          Ajink Gupta
          </a>
    </div>
    <div class=" justify-end">
         <img  class="h-9 w-9 overflow-hidden rounded-full " src="https://avatars.githubusercontent.com/u/76146259?v=4" alt="Ajink Gupta" />
    </div>
</header>

<section class="relative flex justify-center mx-auto max-w-8xl">

          
     <div class="">
       
        <nav class="sticky top-0 w-60 pr-8 text-base lg:text-sm hidden sm:block  border-r-2 border-gray-200">
          
          <!-- bigger screen -->
  <aside class="fixed top-[10vh] w-60  space-y-2  bg-white p-2" style="height: 90vh" >

         <a href="/"  class="flex items-center space-x-1 rounded-md px-2 py-3  bg-gray-100 hover:text-blue-600"><span class="text-2xl"><i class="bx bx-home"></i> </span> <span>Home</span> </a>

            <a href="/about"   class="flex items-center bg-gray-100 space-x-1 rounded-md px-2 py-3  bg-gray-100 hover:text-blue-600"> <span class="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 16 16"> <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/></svg></span><span>About</span></a>

            <a href="/blog" class="flex items-center space-x-1 rounded-md px-2 py-3  bg-gray-100 hover:text-blue-600"> <span class="text-2xl"><i class='bx bxl-blogger'></i></span> <span>Blog</span> </a>

            <a href="/projects" class="flex items-center space-x-1 rounded-md px-2 py-3  bg-gray-100 hover:text-blue-600"><span class="text-2xl"><i class='bx bxl-github'></i></span> <span>Projects</span>  </a>

            <a href="/contact" class="flex items-center space-x-1 rounded-md px-2 py-3  bg-gray-100 hover:text-blue-600"><span class="text-2xl"><i class='bx bxs-chat'></i></span> <span>Contact</span> </a>
            
            
  </aside>

</nav>    
	 
<!-- smaller screen -->
<style>
  bottom .bx {font-size:25px;}
  </style>

<bottom class="sm:hidden  block fixed inset-x-0 bottom-0 z-10 bg-white shadow">


		<div id="tabs" class="flex justify-between">
			<a href="/" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				 <i class="bx bx-home"></i>
				<span class="tab tab-home block text-xs">Home</span>
			</a>
			<a href="/about" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
			 <i class='bx bxs-user-circle'></i>
       	<span class="tab    block text-xs">About</span>
			</a>
			<a href="/blog" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<i class='bx bxl-blogger'></i>
				<span class="tab   block text-xs">Blog</span>
			</a>
			<a href="/projects" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<i class='bx bxl-github'></i>
				<span class="tab tab-whishlist block text-xs">Projects</span>
			</a>
			<a href="/contact" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
			 <i class='bx bxs-chat'></i>
				<span class="tab tab-account block text-xs">Contact</span>
			</a>
		</div>
	</bottom> 
 

              </div>
          
     <div class="flex-auto max-w-2xl  min-h-[100vh] min-w-0 px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16 bg-slate-200	">
          <slot></slot>
<br><br>
              </div>


      </section>

 
