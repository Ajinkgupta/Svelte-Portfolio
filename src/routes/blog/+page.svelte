<script>
    import { page } from '$app/stores'
    import Head from '../../lib/components/head.svelte'
    import { siteMetadataStore } from '../../stores/site-metadata'
    import { marked } from 'marked'
    import { onMount } from 'svelte'
    export let data
    let pathname
  
    onMount(async () => {
      pathname = $page.url.pathname
    })
  
    const {
      siteUrl,
      name: siteName,
      openGraphDefaultImage,
    } = $siteMetadataStore || []
  </script>
  
  <Head
    title={`Blog posts! · ${siteName}`}
    description={`A list of recent blog posts.`}
    image={openGraphDefaultImage.url}
    url={`${siteUrl}${pathname}`}
  />


  <div  class='relative max-w-7xl mx-auto sm:px-16 px-6'>
    <section   >
 
      <p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Welcome to my </p>
      <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Blog !</h2> 

    <p class='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' >
       Here, I'll be sharing insights on software development, from front-end web development to back-end programming. Whether you're an aspiring developer or a seasoned pro, my blog is the perfect resource for you. Stay tuned for tips, lessons learned, and best practices for building high-quality software in today's fast-paced digital landscape.
    </p>
  </section>
    
    <div class='mt-20 flex flex-wrap gap-7'>
   
      {#each data.posts as { title, slug, content, coverImage, tags }}
    
        
<div class="green-pink-gradient p-[1px]  rounded-2xl  sm:w-[31%]  w-full">
  

  <a href="{`/blog/${slug}`}"><div
  class='bg-[#151030] p-5 rounded-2xl  h-full  w-full'
>
  <div class='relative w-full h-[230px]'>
    <img
      src={coverImage.url}
      alt='{title}'
      class='w-full h-full object-cover rounded-2xl'
    />

    <div class='absolute inset-0 flex justify-end m-3 card-img_hover'>
      <a href="{`/post/${slug}`}"><div
        class='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
      🚀  </div> </a>
    </div>
  </div>

  <div class='mt-5'>
    <h3 class='text-white font-bold text-[24px]'>{title}</h3>
    <p class='mt-2 text-secondary text-[14px]'>  {content.slice(0, 80)}..</p>
  </div>
  <div class='mt-4 flex flex-wrap gap-2'>


    {#each tags as tag}
    <span         class="flex flex-wrap p-1 m-1 px-4 justify-between items-center text-[14px]   rounded-xl cursor-pointer bg-purple-500 text-gray-200 hover:bg-purple-600 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
    {tag}</span>
  {/each}

 
  </div>
</div></a>
</div>

      {/each}


  
     
    </div>
  
    <div class="py-8"></div>
  </div>

