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
                     <div class="flex items-center flex-wrap ">
                       <a href="{`/project/${project.slug}`}" class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Read more</a>
                       
                       <a href="{project.gitub}" class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Github</a>
                      
                     </div>
                   </div>
                 </div>
               </div> 
   
    {/each}
             </div> 
