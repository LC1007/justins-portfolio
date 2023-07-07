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
      <img
        src="https://i.postimg.cc/y8f3TqgG/C-LWEDDING-1170.jpg"
        loading="lazy"
        class="intro-mobile img"
      />
      <div class="intro-bg">
        <div
          class="d-flex flex-column h-100 justify-content-center align-items-center"
          v-motion-fade
        >
          <h2 class="fw-lighter text-center text-white">Home</h2>
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
</template>

<script>

</script>

<style scoped></style>
