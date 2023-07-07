<template>
  <div>
    <div id="home"></div>
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
            <h2 class="fw-lighter text-center text-white">Testimonials</h2>
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
    <div id="testimonials"></div>
    <div class="container">
      <h1 class="display-1 text-center mb-5 mt-2">Testimo<span>nials</span></h1>
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4 mb-3"
          v-for="item in testimonials"
          :key="item.id"
          v-motion-fade-visible >
          <div class="card w-100 h-100" style="width: 18rem">
            <div class="card-body position-relative">
              <input type="checkbox" :id="item.function" />
              <i class="bi bi-quote" id="quote"></i>
              <p class="card-text m-0">{{ item.textFirst }}</p>
              <div class="content">
                <p class="card-text" v-motion
                :initial="{
                  opacity: 0,
                }"
                :visible="{
                  opacity: 1,
                }">{{ item.textSecond }}</p>
                <label :for="item.function" class="mb-3">Show Less</label>
              </div>
              <label :for="item.function" class="my-3">Read More</label>
              <div class="d-flex">
                <img
                  :src="item.img"
                  loading="lazy"
                  class="card-img rounded-circle w-25 me-3"
                  alt=""
                />
                <div>
                  <h6 class="card-title">{{ item.name }}</h6>
                  <p>Developer</p>
                </div>
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
    computed: {
      testimonials() {
        return this.$store.state.testimonials;
      },
    },
    mounted() {
      this.$store.dispatch("getTestimonials");
    },
  };
  </script>
  
  <style scoped>
  #quote {
    font-size: 3rem;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0.2;
  }
  
  #ch-one,
  #ch-two,
  #ch-three,
  #ch-four,
  #ch-five,
  #ch-six {
    display: none;
  }
  
  #ch-one:checked ~ .content {
    display: block;
  }
  
  #ch-one:checked ~ label {
    display: none;
  }
  
  #ch-two:checked ~ .content {
    display: block;
  }
  
  #ch-two:checked ~ label {
    display: none;
  }
  
  #ch-three:checked ~ .content {
    display: block;
  }
  
  #ch-three:checked ~ label {
    display: none;
  }
  
  #ch-four:checked ~ .content {
    display: block;
  }
  
  #ch-four:checked ~ label {
    display: none;
  }
  
  #ch-five:checked ~ .content {
    display: block;
  }
  
  #ch-five:checked ~ label {
    display: none;
  }

  #ch-six:checked ~ .content {
    display: block;
  }
  
  #ch-six:checked ~ label {
    display: none;
  }

  label {
    background-color: var(--orangeColor);
    color: #fff;
    padding: 0.4rem;
    border-radius: 2px;
    cursor: pointer;
  }
  
  .content {
    display: none;
  }
  </style>
  