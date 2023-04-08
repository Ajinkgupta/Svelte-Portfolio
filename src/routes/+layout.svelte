<script>
    import Footer from '../lib/components/footer.svelte'
    import Navbar from '../lib/components/navbar.svelte'
    import { onMount } from 'svelte'
    import '../app.css'  
    
  </script>
  
  <Navbar />
  <main >
    <slot />
  </main>
<!-- 
   <div class="orange_gradient" />
  <div class="blue_gradient" />  
  <div class="center_gradient" /> 


  <div class="orange_gradient" />
  <div class="blue_gradient" />  
  <div class="center_gradient" /> 

  <div class="orange_gradient" />
  <div class="blue_gradient" />  
  <div class="center_gradient" /> 

  <div class="orange_gradient" />
  <div class="blue_gradient" />  
  <div class="center_gradient" /> 
 

  <div class="orange_gradient" />
  <div class="blue_gradient" />  
  <div class="center_gradient" /> 

-->
  <Footer />
