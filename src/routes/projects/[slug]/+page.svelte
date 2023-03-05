<script>
    import { page } from '$app/stores'
    import Head from '../../../lib/components/head.svelte'
    import { siteMetadataStore } from '../../../stores/site-metadata'
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
    title={`${data.project.name} · ${siteName}`}
    description={data.project.description.slice(0, 120)}
    image={openGraphDefaultImage.url}
    url={`${siteUrl}${pathname}`}
  />
  
  <div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
    <img
      class="rounded-lg"
      src={data.project.image[0].url}
      alt={data.project.title}
    />
  </div>
  
  <h1 class="text-4xl font-semibold mb-5">{data.project.name}</h1>
  
  <div class="mb-5 flex justify-between">
    <div>
      {#if data.project.tags}
      <div class=' flex flex-wrap'>

        {#each data.project.tags as tag}
        <span         class="flex flex-wrap p-1 m-1 px-4 justify-between items-center text-sm font-medium rounded-xl cursor-pointer bg-purple-500 text-gray-200 hover:bg-purple-600 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
          {tag}</span
          >
        {/each}
        </div>
      {/if}
    </div>
  </div>
  
  <div
    class="mb-5 prose flex prose-a:text-primary hover:prose-a:text-primary-focus"
  >
  <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group"><a href={data.project.demo}><button type="button" class="rounded-l border-r-2 border-indigo-500     inline-block px-6 py-2.5 bg-[#a787ff]  text-black font-bold text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Demo</button></a>

    <a  href={data.project.sourceCode}><button type="button" class="rounded-r inline-block px-6 py-2.5 bg-[#a787ff] text-black font-bold text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Source Code</button></a></div>

 
  </div>
  <div class=" bg-black text-[#ffffff] rounded-xl p-2 "> 
  <article class="prose prose-xl">
    {@html marked(data.project.description)}
  </article>
</div>

<div class="py-8"></div>
