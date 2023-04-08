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
  
  <div  class='relative max-w-7xl mx-auto sm:px-16 px-6'>
    <section   >
 
      <p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My Work</p>
      <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects</h2> 

    <p class='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' >
      Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.

    </p>
  </section>
  
  <div class='mt-20 flex flex-wrap gap-7'>


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
</div>