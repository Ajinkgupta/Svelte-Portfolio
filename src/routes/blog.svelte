<!-- src/routes/blog.svelte -->

<svelte:head>
	<title>Blog</title>
</svelte:head>

<script context="module">
    export async function load({ fetch }) {
        let articles;

        try {
            articles = await fetch(`https://dev.to/api/articles?username=theether0`); 
		<!-- I have'nt written any articles -->

            articles = await articles.json();
        } catch (e) {
            console.log(e);
        }
        return {
            props: {
                articles
            }
        };
    }
</script>

<script>
    export let articles;
</script>
  
      

          <div class="flex flex-wrap -m-4">

 {#each articles as article}
            <div class="p-2 md:w-1/2 lg:w-1/3">
              <div class="h-full  rounded-xl shadow-xl  bg-white overflow-hidden">
                <img class="lg:h-100 lg:w-100 md:h-40 w-full object-center object-cover  scale-110 transition-all duration-400 hover:scale-100" src="{article.social_image}" alt="blog">
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{article.readable_publish_date}</h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">{article.title}</h1>
                   <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-row space-x-2">
                            {#each article.tag_list as tag}
                                <span class="font-Basteleur-Moonlight title-font text-gray-700 capitalize"
                                    >{tag}</span
                                >
                            {/each}
                        </div>

                  <p class="leading-relaxed mb-3">  {article.description}</p>
                  <div class="flex items-center flex-wrap ">
                    <a href="{`/blog/${article.id}`}" class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Read more</a>
                   
                  </div>
                </div>
              </div>
            </div> 

 {/each}
          </div> 
