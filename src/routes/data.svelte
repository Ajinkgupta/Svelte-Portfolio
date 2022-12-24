<script>
  import { onMount } from "svelte";
  const endpoint = "https://ajinkgupta.me/ajinkgupta/projects/data.json";
  let posts = [];
  onMount(async function () {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
  });
  posts = data;
</script>
{#each posts as article}
  <div>
    <p>{article.title}</p>
  </div>
{/each}
