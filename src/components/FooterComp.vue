<template>
    <div>
        <footer class="py-3 bg-dark">
            <ul class="nav justify-content-center pb-3">
              <router-link class="nav-item nav-link px-2 text-white" to="/" exact v-scroll-to="{ el: '#home', offset: -600, force: true}">Home</router-link>
              <router-link class="nav-item nav-link px-2 text-white" to="/resume" exact v-scroll-to="{ el: '#resume', offset: -600, force: true}">Resume</router-link>
              <router-link class="nav-item nav-link px-2 text-white" to="/testimonials" exact v-scroll-to="{ el: '#testimonials', offset: -600, force: true}">Testimonials</router-link>
              <router-link class="nav-item nav-link px-2 text-white" to="/contact" exact v-scroll-to="{ el: '#contact', offset: -600, force: true}">Contact</router-link>
            </ul>
            <p class="text-center text-white">&copy; 2023 Justin Scholtz</p>
          </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>