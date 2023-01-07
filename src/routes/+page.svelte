<script>
    import Head from '../lib/components/head.svelte'
    import {
      authorsStore,
      siteMetadataStore,
    } from '../stores/site-metadata'
    export let data 
    
    const {
      siteUrl,
      name: siteName,
      description,
      openGraphDefaultImage,
    } = $siteMetadataStore || []
    const { name: authorName } = $authorsStore || []
  </script>
  
  <Head
    title={`${siteName} · ${authorName}`}
    {description}
    image={openGraphDefaultImage.url}
    url={`${siteUrl}`}
  />
  

  {#each data.authors as { name, intro, picture: { url } }}

  <div class="  pb-6 w-full justify-center items-center overflow-hidden  rounded-lg shadow-sm mx-auto">
    <div class="relative h-40"></div>
  
  <div class="relative  shadow  mx-auto h-48 w-48 -my-24 border-white rounded-full overflow-hidden border-4">
       <img class="object-cover w-full" src={url} alt={name} >
     </div>
     <div class="bg-black border-2  border-white	 rounded-3xl p-5 text-center  pt-28" >
      <h1 class="text-3xl mb-4 font-bold tracking-wider">{name}</h1>
      <p class="text-xl mb-4">{intro}</p>
       
      <a href="/about">  <button type="button" class="rounded-3xl font-bold inline-block px-6 py-2.5 bg-[#f6ff00] text-black  text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">About me</button></a>
   
     </div>
  </div>


 
  {/each}
  
 
     

