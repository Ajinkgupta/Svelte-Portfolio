<script context="module">
    export async function load({fetch, params}) {
        let article;
        try {
            article = await fetch(`https://dev.to/api/articles/${params.slug}`);
            article = await article.json();
        } catch (e) {
            console.log(e);
        }
        return {
            props: {
                article
            }
        };
    }
</script>

<script>
    export let article;
</script>

 
  <div class="p-2" style="max-width:100%;">
              <div class="  rounded-xl shadow-xl  bg-white overflow-hidden">
                <img class="" src="{article.social_image}" style="width:100%;" alt="blog">
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{article.readable_publish_date}</h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">{article.title}</h1><hr>
                   <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-row space-x-2">
                        </div>
                        <style>
                        pre { color:white;background: #212121;overflow: auto;width:200px;}
                        </style>
  {@html article.body_html}
                    
                </div>
              </div>
            </div>



