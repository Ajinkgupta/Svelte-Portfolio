<script>
    export let url = ''
    export let name = ''
    export let slug = ''
    export let description = ''
  </script>
   
<div class="green-pink-gradient p-[1px]  rounded-2xl  sm:w-[31%]  w-full">
  

  <a href="{`/projects/${slug}`}"><div
  class='bg-[#151030] p-5 rounded-2xl  h-full  w-full'
>
  <div class='relative w-full h-[230px]'>
    <img
      src={url}
      alt='project_image'
      class='w-full h-full object-cover rounded-2xl'
    />

    <div class='absolute inset-0 flex justify-end m-3 card-img_hover'>
      <a href="{`/projects/${slug}`}"><div
        class='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
      🚀  </div> </a>
    </div>
  </div>

  <div class='mt-5'>
    <h3 class='text-white font-bold text-[24px]'>{name}</h3>
    <p class='mt-2 text-secondary text-[14px]'>  {description.slice(0, 80)}..</p>
  </div>
 
</div></a>
</div>