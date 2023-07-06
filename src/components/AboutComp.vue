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
                  <h2 class="fw-lighter text-center text-white">About Me</h2>
                  <Icons/>
                </div>
              </div>
            </div>
          </div>
      <div class="container">
        <div id="about"></div>
        <h1 class="display-1 text-center mb-5 mt-2">More About <span>Me</span></h1>
        
        <div class="row">
            <div class="col-12 col-md-4 col-md-6">
                <img src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
            </div>
            <div class="col-12 col-md-4 col-md-6">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eos dolorem esse enim quam? Iusto, iste aliquam nobis, quae vero cum debitis sint eaque ex quaerat, reprehenderit animi nemo officiis!</p>
                <p>Name : Justin Marcus Scholtz</p>
                <p>Age : 24</p>
                <p>Phone : 061 781 9282</p>
                <p>Email : scholtz0929@gmail.com</p>
                <a href="../assets/cv/CV of Justin Scholtz - IT CV.pdf" class="btn custom-btn" download>Download CV</a>
            </div>
        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 my-5">
          <div class="col" v-for="item in aboutMe" :key="item.id" v-motion-slide-visible-bottom>
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center">
                  <img
                    :src="item.img"
                    class="card-img-top"
                    style="width: 3rem"
                    alt=""
                  />
                  <h4 class="card-title pb-1">{{ item.title }}</h4>
                </div>
                <p class="card-text">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Icons from '@/components/IconComp.vue'
export default {
  components:{
    Icons
  },
  computed: {
    aboutMe() {
      return this.$store.state.aboutMe;
    },
  },
  mounted() {
    this.$store.dispatch("getAbout");
  },
};
</script>

<style scoped></style>
