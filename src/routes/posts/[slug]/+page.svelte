<script>
    import { page } from '$app/stores'
    import Head from '../../../lib/components/head.svelte'
    import { siteMetadataStore } from '../../../stores/site-metadata'
    import { marked } from 'marked'
    import { onMount } from 'svelte'
  
    let pathname
    export let data
  
    onMount(async () => {
      pathname = $page.url.pathname
    })
  
    const { title, date, tags, content, coverImage } = data.post
    const { siteUrl, name: siteName } = $siteMetadataStore || []
  </script>
  
  <Head
    title={`${title} · ${siteName}`}
    description={content.slice(0, 120)}
    image={coverImage.url}
    url={`${siteUrl}${pathname}`}
  />
  
  <div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
    <img
      class="rounded-xl"
      src={coverImage.url}
      alt={`Cover image for ${title}`}
    />
  </div>
  
  <div class="prose prose-xl">
    <h1 class="text-xl">{title}</h1>
  </div>
  
  <p class="text-secondary text-xs tracking-widest font-semibold">
    {new Date(date).toDateString()}
  </p>
  
  <div class="mb-5 flex justify-between">
    <div>
      {#if tags}
      <div class=' flex flex-wrap'>

        {#each tags as tag}
        <span         class="flex flex-wrap p-1 m-1 px-4 justify-between items-center text-sm font-medium rounded-xl cursor-pointer bg-purple-500 text-gray-200 hover:bg-purple-600 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
        {tag}</span>
      {/each}
      </div>
      {/if}
    </div>
  </div>
    <div class=" bg-black text-[#ffffff] rounded-xl p-2 "> 
  <article div class="prose   prose-lg">
    {@html marked(content)}
  </article>
</div>
 