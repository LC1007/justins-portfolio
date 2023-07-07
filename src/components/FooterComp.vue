<template>
    <div>
        <footer class="py-3 bg-dark">
            <ul class="nav justify-content-center pb-3">
              <router-link class="nav-item nav-link px-2 text-white" to="/" exact >Home</router-link>
              <router-link class="nav-item nav-link px-2 text-white" to="/about" exact >About</router-link>
              <router-link class="nav-item nav-link px-2 text-white" to="/resume" exact >Resume</router-link>
              <router-link class="nav-item nav-link px-2 text-white" to="/projects" exact >Projects</router-link>
              <router-link class="nav-item nav-link px-2 text-white" to="/testimonials" exact >Testimonials</router-link>
              <router-link class="nav-item nav-link px-2 text-white" to="/contact" exact >Contact</router-link>
            </ul>
            <p class="text-center text-white">&copy; {{ new Date().getFullYear() }} Justin Scholtz</p>
          </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>