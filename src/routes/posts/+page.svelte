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
  
  <h1 class="font-extrabold mb-20 shadow text-center  text-4xl"> My Blog posts</h1>
  

  <div class=" grid sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center ">


  {#each data.posts as { title, slug, content, coverImage, tags }}







  <div class="bg-ram  w-72  rounded-md">
    <div class="flex justify-center items-center leading-none">
      <img
      src={coverImage.url}
      alt={`Cover image for ${title}`}
        class="h-40 w-[250px] rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
      />
    </div>
    <div class="p-3">
      <p class="block mb-1 font-extralight">{title}</p>
      <p class="text-xs tracking-tighter text-gray-600">
        {@html marked(content).slice(0, 150)}
      </p>
      <div class=' flex flex-wrap'>

      {#each tags as tag}
      <span         class="flex flex-wrap p-1 m-1 px-4 justify-between items-center text-sm font-medium rounded-xl cursor-pointer bg-purple-500 text-gray-200 hover:bg-purple-600 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
      {tag}</span>
    {/each}
    </div>
    </div>
    <div class="flex justify-between items-center p-2">
      <img
        src="https://avatars.githubusercontent.com/u/76146259?v=4"
        alt=""
        class="rounded-full h-7 opacity-40"
      />
      <div class="flex">
        
        <a href={`/posts/${slug}`}   >   <button type="button" class="rounded-3xl font-bold inline-block px-6 py-2.5 bg-[#f6ff00] opacity-40	 text-black  text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Read </button></a>
      
      </div>
       
    </div>
  </div>

 
  {/each}
  </div>
<div class="py-8"></div>

