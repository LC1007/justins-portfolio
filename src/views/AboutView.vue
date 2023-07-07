<template>
    <div>

        <!-- This is my hero section start -->

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
                    <h2 class="fw-lighter text-center text-white">About</h2>
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

        <!-- This is my hero section end -->

        <!-- About Me Starts -->
                <div id="home" class="mb-5"></div>
                <div class="container m-auto">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col">
                            <img src="https://i.postimg.cc/kGN2090d/C12-Justin-Scholtz-3-min.jpg" loading="lazy"
                                class="mb-4 w-75 m-auto" alt="" />
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
        <!-- About Me Ends -->

        <!-- About Me Section  Start-->
        <div class="container">
            <!-- Interest Cards Start -->
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 my-5">
                <div class="col" v-for="item in aboutMe" :key="item.id" v-motion-slide-visible-bottom>
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center">
                                <i :class="item.img" style="font-size: 3rem"></i>
                                <h4 class="card-title pb-1">{{ item.title }}</h4>
                            </div>
                            <p class="card-text">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Interest Cards End -->

            
        </div>

    </div>
</template>

<script>
    export default{
        computed:{
            aboutMe(){
                return this.$store.state.aboutMe
            }
        },
        mounted(){
            this.$store.dispatch('getAbout')
        }
    }
</script>

<style scoped>

</style>