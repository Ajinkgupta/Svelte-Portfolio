<script>
    import { page } from '$app/stores'
    import Head from '$lib/components/head.svelte'
    import { siteMetadataStore } from '$stores/site-metadata'
    import { marked } from 'marked'
    import { onMount } from 'svelte'
    export let data
    let pathname
  
    onMount(async () => {
      pathname = $page.url.pathname
    })
  
    const {
      name,
      intro,
      bio,
      picture: { url },
    } = data.authors[0]
  
    const {
      siteUrl,
      name: siteName,
      openGraphDefaultImage,
    } = $siteMetadataStore || []
  </script>
  
  <Head
    title={`About · ${siteName}`}
    description={bio.slice(0, 120)}
    image={openGraphDefaultImage.url}
    url={`${siteUrl}${pathname}`}
  />
  
  <div class="  pb-6 w-full justify-center items-center overflow-hidden  rounded-lg shadow-sm mx-auto">
    <div class="relative h-40"></div>
  
  <div class="relative  shadow  mx-auto h-48 w-48 -my-24 bg-slate-800 rounded-full overflow-hidden border-4">
       <img class="object-cover w-full" src={url} alt={name} >
     </div>
     <div class="bg-slate-800 rounded-3xl p-5 text-center  pt-28">
      <h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
      <p class="text-xl mb-4">{intro}</p>
      👇
     </div>
  </div>
  
  <div class="bg-slate-800 rounded-3xl p-5  pt-28">
    
    <article div class="prose prose-lg">
    {@html marked(bio)}
  </article>
  </div>
