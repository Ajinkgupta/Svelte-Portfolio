<script>
    export let url = ''
    export let name = ''
    export let slug = ''
    export let description = ''
  </script>
  


  <div class="bg-ram  w-72  rounded-md">
    <div class="flex justify-center items-center leading-none">
      <img
      src={url} alt={name}
        class="h-40 w-[250px] rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
      />
    </div>
    <div class="p-3">
      <p class="block mb-1 font-extralight">{name}</p> <br/>
      <p class="text-xs tracking-tighter text-gray-600">
        {description.slice(0, 80)}...
      </p>
     
    </div>
    <div class="flex justify-between items-center p-2">
      <img
        src="https://avatars.githubusercontent.com/u/76146259?v=4"
        alt=""
        class="rounded-full h-7 opacity-40"
      />
      <div class="flex">
        
        <a href={`/projects/${slug}`}>  <button type="button" class="rounded-3xl font-bold inline-block px-6 py-2.5 bg-[#f6ff00] opacity-40	 text-black  text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Explore</button></a>
      
      </div>
       
    </div>
  </div>