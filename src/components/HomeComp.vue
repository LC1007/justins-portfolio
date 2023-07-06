<template>
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
                  <h2 class="fw-lighter text-center text-white">Home</h2>
                  <Icons/>
                </div>
                <Icons/>
              </div>
            </div>
            <div class="container">
                <!-- About Me Section -->
                
                <div id="home"></div>
              <div class="about-container m-5">
                <div class="row">
                  <div class="col-sm-12 col-md-6 col">
                    <img
                      src="https://i.postimg.cc/kGN2090d/C12-Justin-Scholtz-3-min.jpg"
                      loading="lazy"
                      class="mb-4 w-75 m-auto"
                      alt=""
                      v-motion :initial="{opacity: 0, y: 100, }" :visible="{opacity: 1, y: 0, }"
                    />
                  </div>
                  <div class="col-12 col-md-6 col">
                    <h2 v-motion-slide-bottom>About <span>Me</span></h2>
                    <p class="mb-5">
                      My name is Justin Scholtz and web development has been a passion of
                      mine ever since 2016 when I attended a intro to web development at a
                      company called Rlabs, we did a month long course where we were
                      introduced to HTML and CSS. What made me realize it was my passion
                      was the amount of times I could of given up but didn't, I still had
                      that fire in me to succeed the challenges and become a front end web
                      developer. My journey consists of me joining a bootcamp and self
                      studing, over my journey I've reached a point where I'm very
                      comfortable with HTML and CSS but I'm still learning the ropes of
                      JavaScript, I would love to then grow my VUE JS skills as my JS
                      framework to broaden my skill set. I now feel like I'm ready to take
                      on the next step in my journey and find employement as front end
                      developer, Life Choices prepared me well for the next stage of my
                      life so I'm ready for anything and everything.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    </div>
</template>

<script>
import Icons from '@/components/IconComp.vue'
    export default{
      components: {
        Icons
      }
    }
</script>

<style scoped>

</style>