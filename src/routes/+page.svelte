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

  <section class='relative w-full h-screen mx-auto'>
    <div
      class='absolute inset-0 top-[30px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row   items-start gap-5'
    >
      <div class='flex flex-col justify-center items-center mt-5'>
        <div class='w-5 h-5 rounded-full bg-[#915EFF]' />
        <div class='w-1 sm:h-80 h-40 violet-gradient' />
      </div>

      <div>
        <h1 class="font-black  text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 ">
          Hi, I'm <span class='text-[#915EFF]'>Ajink</span>
        </h1>
        <p class="font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
          I develop modern <br class='sm:block hidden' />
           web  and mobile applications
        </p>
      </div>

      <div class="hidden md:block md:ml-auto md:mr-0  w-max text-center md:text-left">
        <div class='rounded-[100%] green-pink-gradient p-[2px]   shadow-card flex justify-center items-start ' style="box-shadow: 0px 35px 120px -15px #211e35;">
          <img src="https://avatars.githubusercontent.com/u/76146259?v=4" class="rounded-[100%] w-max" alt="" srcset="">
        </div>
      </div>

    </div>
    
    

    <div class='absolute xs:bottom-32 bottom-32 w-full flex justify-center items-center'>
      <a href='#about'>
        <div class='rounded-[100%] border-4 border-secondary flex justify-center items-start p-2'>
          👨‍💻
 
        </div>
      </a>

      
    </div>
  </section>

 
  {/each}
  
 
  <section id="about" class='relative max-w-7xl mx-auto sm:px-16 px-6'>
 
      <p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
      <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2> 

    <p class='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' >
      I'm a skilled software developer with expertise in server-side technologies such as Node.js and PHP, as well as frameworks like React and Django. I'm also experienced in building mobile applications using Flutter. I'm a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Let's work together to bring your ideas to life!
    </p>

    <div class='mt-10 grid gap-10 xs:grid-cols-2 md:grid-cols-4'>

      <div class='w-full'>
        <div class='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div class='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <span class='text-[4rem] object-contain'>🌐</span>
            <h3 class='text-white text-[20px] font-bold text-center'>
             Web  
            </h3>
          </div>
        </div>
      </div>
    
      <div class='w-full'>
        <div class='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div class='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <span class='text-[4rem] object-contain'>📱</span>
            <h3 class='text-white text-[20px] font-bold text-center'>
             App  
            </h3>
          </div>
        </div>
      </div>
    
      <div class='w-full'>
        <div class='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div class='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <span class='text-[4rem] object-contain'>🔗</span>
            <h3 class='text-white text-[20px] font-bold text-center'>
             Blockchain 
            </h3>
          </div>
        </div>
      </div>
    
      <div class='w-full'>
        <div class='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div class='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <span class='text-[4rem] object-contain'>💻</span>
            <h3 class='text-white text-[20px] font-bold text-center'>
            Backend 
            </h3>
          </div>
        </div>
      </div>
    
    </div>
    

  </section>
     


  <section id="contact" class='relative max-w-7xl mx-auto sm:px-16 px-6 mt-20'>
 
    <p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">want to </p>
    <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Connect.</h2> 

  <p class='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' >
    If you'd like to connect with me on LinkedIn, feel free to search for my name and send me a connection request. You can also follow my YouTube channel for regular updates on my latest videos and projects. And if you're interested in checking out some of my coding work, head over to my GitHub profile, where you can find repositories of some of my latest projects. Don't hesitate to reach out if you have any questions or want to connect with me further. I'm always open to meeting new people and expanding my network on these platforms.
  </p>


  <div class='mt-10 flex flex-wrap gap-10 justify-center items-center pb-[200px]'>

 

<!-- Github -->
<button
type="button"
onclick="window.location.href='https://github.com/ajinkgupta'"
data-te-ripple-init
data-te-ripple-color="light"
class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
style="background-color: #FFD700">
 
  <svg xmlns="http://www.w3.org/2000/svg"   fill="currentColor"
  class="h-4 w-4 " 
  viewBox="0 0 496 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>

</button>

 

<!-- Linkedin -->
<button
type="button"
onclick="window.location.href='https://www.linkedin.com/in/ajinkgupta/'"

data-te-ripple-init
data-te-ripple-color="light"
class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
style="background-color: #0077b5">
<svg
  xmlns="http://www.w3.org/2000/svg"
  class="h-4 w-4"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
</svg>
</button>
  
<!-- Youtube -->
<button
type="button"

onclick="window.location.href='https://www.youtube.com/c/ajinkgupta'"

data-te-ripple-init
data-te-ripple-color="light"
class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
style="background-color: #ff0000">
<svg
  xmlns="http://www.w3.org/2000/svg"
  class="h-4 w-4"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
</svg>
</button>
 
<!-- Twitter -->
<button
type="button"

onclick="window.location.href='https://twitter.com/AjinkGupta'"

data-te-ripple-init
data-te-ripple-color="light"
class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
style="background-color: #1da1f2">
<svg
  xmlns="http://www.w3.org/2000/svg"
  class="h-4 w-4"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
</svg>
</button>
 
 


  </div>

  
<a href="https://www.doubtly.in"> Doubtly </a>

</section>
   

