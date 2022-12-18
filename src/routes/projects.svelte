<!-- src/routes/projects.svelte -->

<svelte:head>
	<title>Project</title>
</svelte:head>
  
<script context="module">
    export async function load({ fetch }) {
        let projects;

        try {
            projects = await fetch(`https://ajinkgupta.me/ajinkgupta/projects/data.json`);
            projects = await projects.json();
        } catch (e) {
            console.log(e);
        }
        return {
            props: {
                projects
            }
        };
    }
</script>

<script>
    export let projects;
</script>
  


          <div class="flex flex-wrap -m-4">

 {#each projects as project}
    
               <div class="p-2 md:w-1/2 lg:w-1/3">
                 <div class="h-full  rounded-xl shadow-xl border-b-4 border-indigo-500 bg-white overflow-hidden">
                   <img class="lg:h-100 lg:w-100 md:h-40 border-b-4 border-indigo-500 w-full object-center object-cover  scale-110 transition-all duration-400 hover:scale-100" src="{project.image}" alt="blog">
                   <div class="p-6">
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3">{project.name}</h1>
                      <hr>
   
                     <p class="leading-relaxed mb-3">  {project.description}</p>
			   
			   <br>
			   <div class="inline-flex rounded-md shadow-sm" role="group"><a href="{`/project/${project.slug}`}"><button type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">Read More 
    </button></a>
    <a href="{project.gitub}"><button type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">Github
    </button></a></div>
                     
                   </div>
                 </div>
               </div> 
   
    {/each}
             </div> 
