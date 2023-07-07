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
          <form action="https://formspree.io/f/xayzkqly" method="post" class="form">
            <h1 v-motion-slide-bottom class="display-1 text-center my-5">Con<span>tact Me</span></h1>
            <div class="mb-3">
              <FormKit
                type="text"
                label="Name"
                validation="required:trim"
                help="e.g John Doe"
                name="name"
              />
            </div>
            <div class="mb-3">
              <FormKit
                type="email"
                label="Email"
                validation="email"
                validation-visibility="live"
                help="john@email.com"
                name="email"
              />
            </div>
            <div class="mb-3">
              <FormKit
                type="text"
                label="Subject"
                validation="required:trim"
                name="subject"
              />
            </div>
            <div class="mb-3">
              <FormKit 
              type="textarea"
              label="Message"
              validation="required:trim" />
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

  </script>
  
  <style scoped>
  .btn-custom {
    background-color: var(--orangeColor);
    color: #fff;
  }

  .formkit-inner{
    background-color: blue;
  }
  </style>