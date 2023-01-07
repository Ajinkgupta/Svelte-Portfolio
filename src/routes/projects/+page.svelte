<script>
      import { page } from '$app/stores'

    import Head from '../../lib/components/head.svelte'
    import ProjectCard from '../../lib/components/project-card.svelte'
    import { siteMetadataStore } from '../../stores/site-metadata'
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
    title={`Projects · ${siteName}`}
    description={`A list of recent projects.`}
    image={openGraphDefaultImage.url}
    url={`${siteUrl}${pathname}`}
  />
  
  <h1 class="font-extrabold mb-20 shadow text-center  text-4xl">
     My Projects
  </h1>
  
  <div class=" grid sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center ">


    {#each data.projects as { name, slug, description, image }, index}
      <ProjectCard
        {name}
        {description}
        url={image[0].url}
        {index}
        {slug}
      />
    {/each}
  </div>
<div class="py-8"></div>
