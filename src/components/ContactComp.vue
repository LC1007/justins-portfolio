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
              <h2 class="fw-lighter text-center text-white">Contact Me</h2>
              <Icons/>
            </div>
            <Icons/>
          </div>
        </div>
      </div>
      <div id="contact"></div>
      <div class="container">
        <div class="row my-5">
          <div class="col-12 col-md-6 col-lg-6">
            <img
              src="https://i.postimg.cc/WzXmkrZ3/diogo-brandao-c-UXK9-k-Qfy4-unsplash.jpg"
              loading="lazy"
              alt=""
              class="w-100 img mt-md-5"
            />
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <form action="" class="form">
              <h1 v-motion-slide-bottom class="display-1 text-center my-5">Con<span>tact Me</span></h1>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="John Doe"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="text" class="form-label">Subject</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >Message</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="d-flex justify-content-center m-4">
                <button class="btn btn-custom">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </template>
    
    <script>
    import Icons from '@/components/IconComp.vue'
    export default {
      components: {
        Icons
      }
    };
    </script>
    
    <style scoped>
    .btn-custom {
      background-color: var(--orangeColor);
      color: #fff;
    }
    </style>