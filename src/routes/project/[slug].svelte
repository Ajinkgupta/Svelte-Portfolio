<script context="module">
    export async function load({fetch, params}) {
        let project;
        try {
            project = await fetch(`https://ajinkgupta.me/ajinkgupta/project/${params.slug}.json`);
            project = await project.json();
        } catch (e) {
            console.log(e);
        }
        return {
            props: {
                project
            }
        };
    }
</script>


<script>
    export let project;
</script>
<svelte:head>
	<title>{project.name} | Ajink Gupta</title>
    <meta name="description" content="{project.description}"/>
    <meta property="og:title" content="{project.name}" />
<meta property="og:description" content="{project.description}" />
<meta property="og:image" content="{project.image}" />

</svelte:head>
 

 
  <div class="p-2" style="max-width:100%;">
              <div class="  rounded-xl shadow-xl  bg-white overflow-hidden">
                <img class="" src="{project.image}" style="width:100%;" alt="blog">
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">{project.name}</h1> 
                   
                      <br>

<div class="inline-flex rounded-md shadow-sm" role="group">
    <a href="{project.live}"><button type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
      Live 
    </button></a>
    <a href="{project.github}"><button type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
      Github
    </button></a>
     
  </div>
  <br>
                        
                       
<div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-row space-x-2"></div>
  {@html project.readme}
</div>
                </div>
              </div> 
