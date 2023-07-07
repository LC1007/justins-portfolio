<template>
    <div>
        <div>
          <div class="intro-container">
            <div class="intro-title">
              <p class="float m-0"></p>
              <h2 class="intro-h2 mt-2">
                Hi, I am <br />
                Justin <span>Scholtz</span>
              </h2>
              <pre class="intro-text">
      async function getData(){
        const data = await axios.get("Aspiring Front End <span>Developer</span>")
        console.log("Welcome")
      }
      </pre>
              <div class="btns">
                <button class="contact-btn m-0">Contact Me</button>
                <router-link to="/resume" class="project-btn">
                  Projects<i class="bi bi-box-arrow-up-right mx-2"></i>
                </router-link>
              </div>
            </div>
            <div class="intro-img"></div>
            <img src="https://i.postimg.cc/y8f3TqgG/C-LWEDDING-1170.jpg" loading="lazy" class="intro-mobile img">
            <div class="intro-bg">
                <div class="d-flex flex-column h-100 justify-content-center align-items-center" v-motion-fade>
                    <h2 class="fw-lighter text-center text-white">Projects</h2>
                    <div>
                        <a href="https://www.linkedin.com/in/justin-scholtz-08403713a" target="_blank" class="p-2"><i
                                class="bi bi-linkedin text-white icons"></i></a>
                        <a href="https://www.linkedin.com/in/justin-scholtz-08403713a" target="_blank" class="p-2"><i
                                class="bi bi-instagram text-white icons"></i></a>
                        <a href="https://www.facebook.com/justin.scholtz.79" target="_blank" class="p-2"><i
                                class="bi bi-facebook text-white icons"></i></a>
                    </div>
                  </div>
            </div>
          </div>
        </div>
        <div>
        <div id="projects"></div>
        <div class="container">
            <h1 v-motion-slide-bottom class="display-1 text-center mb-5 mt-2">Pro<span>jects</span></h1>
            <div class="row mb-5">
                <div class="col-12 col-md-6 col-lg-4 mb-3" v-for="item in projects" :key="item.id" v-motion-slide-visible-once-bottom>
                    <div class="card h-100 w-100" style="width: 18rem">
                        <img :src="item.img" class="card-img-top pb-3" loading="lazy" :alt="item.projectTitle">
                        <div class="card-body">
                            <h4 class="card-title">{{ item.projectTitle }}</h4>
                            <p class="card-text">{{ item.projectDesc }}</p>
                            <a :href="item.gitHubLink" target="_blank" class="pe-2 text-black"><i class="bi bi-github"></i></a>
                            <a :href="item.demoLink" target="_blank" class="pe-2 text-black"><i class="bi bi-box-arrow-up-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

    export default {
        computed:{
            projects(){
                return this.$store.state.projects
            }
        },
        mounted(){
            this.$store.dispatch('getProjects')
        }
    }
</script>

<style scoped>

</style>