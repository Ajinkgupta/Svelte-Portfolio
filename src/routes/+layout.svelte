<script>
    import Footer from '../lib/components/footer.svelte'
    import Navbar from '../lib/components/navbar.svelte'
    import { onMount } from 'svelte'
    import '../app.css'  
    
  </script>
  
  <Navbar />
  <main class="container  max-w-4xl mx-auto px-4 mb-20">
    <slot />
  </main>
    <div class="orange_gradient" />
  <div class="blue_gradient" /> <div class="orange_gradient" />
  <div class="blue_gradient" /> <div class="orange_gradient" />
  <div class="blue_gradient" />  
  <div class="center_gradient" />
  <div class="center_gradient" /> 
  <Footer />