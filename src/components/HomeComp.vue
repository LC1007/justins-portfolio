<template>
    <div>
        <!-- This is my hero section start -->
        <!-- This is my hero section which will be on all my pages which is why I made it a component -->

            <div class="intro-container">
                <div class="intro-title">
                    <p class="float m-0"></p>
                    <div class="mt-2">
                        <h2 class="intro-h2">Hi, I am <br />Justin <span>Scholtz</span></h2>
                    </div>
                    <div class="mt-2">
                        <h2 class="mobile-title"> Hi, I am Justin <span>Scholtz</span></h2>
                    </div>
                    <pre class="intro-text">
      async function getData(){
        const data = await axios.get("Aspiring Front End <span>Developer</span>")
        console.log("Welcome")
      }
      </pre>
                    <div class="btns">
                        <router-link to="/about" exact>
                            <button class="contact-btn m-0">About Me</button>
                        </router-link>
                        <router-link to="/projects" class="project-btn">
                            Projects<i class="bi bi-box-arrow-up-right mx-2"></i>
                        </router-link>
                    </div>
                </div>
                <div class="intro-img"></div>
                <img src="https://i.postimg.cc/y8f3TqgG/C-LWEDDING-1170.jpg" loading="lazy" class="intro-mobile img">
                <div class="intro-bg">
                    <div class="d-flex flex-column h-100 justify-content-center align-items-center" v-motion-fade>
                        <h2 class="text-white fw-light">Contact Me</h2>
                        <div>
                            <a href="https://www.linkedin.com/in/justin-scholtz-08403713a" target="_blank" class="p-2"><i
                                    class="bi bi-linkedin text-white icons"></i></a>
                            <a href="https://www.linkedin.com/in/justin-scholtz-08403713a" target="_blank" class="p-2"><i
                                    class="bi bi-instagram text-white icons"></i></a>
                            <a href="https://www.facebook.com/justin.scholtz.79" target="_blank" class="p-2"><i
                                    class="bi bi-facebook text-white icons"></i></a>
                            <router-link to="/contact" class="p-2"><i class="bi bi-telephone-fill text-white icons"></i></router-link>
                        </div>
                    </div>

                </div>
            </div>

            <!-- This is my hero section end -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>