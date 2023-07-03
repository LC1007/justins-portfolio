<template>
  <div>
    <div class="intro-container">
      <div class="intro-title">
        <p class="float m-0"></p>
        <h2 class="intro-h2">
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
      <img src="https://i.postimg.cc/y8f3TqgG/C-LWEDDING-1170.jpg" loading="lazy" class="intro-mobile" alt="">
      <div class="intro-bg">
        <div class="icon-container">
          <a href="#"><i class="bi bi-linkedin text-white icons"></i></a>
          <a href="#"><i class="bi bi-instagram text-white icons"></i></a>
          <a href="#"><i class="bi bi-facebook text-white icons"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.float::before {
  content: "<welcome/>";
  font-size: 2rem;
  font-weight: lighter;
  opacity: 0.3;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100%;
}

.intro-container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(10, 6rem);
  position: relative;
}

.icons {
  font-size: 3rem;
}

button {
  padding: 1rem 2.5rem;
  border: none;
}

.contact-btn {
  background-color: #fe481c;
  color: #fff;
}

.project-btn {
  margin-left: 1rem;
  background-color: transparent;
  color: #000;
  text-decoration: none;
  font-weight: lighter;
}

img {
  max-width: 100%;
  display: block;
}

.intro-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  color: #000;
  grid-column: 1 / 6;
  grid-row: 2 / 7;
  font-weight: bolder;
}

.intro-title>h2 {
  font-size: calc(4rem + 6 * ((100vw - 320px) / 680));
}

.intro-text {
  font-size: calc(.6rem + 6 * ((100vw - 320px) / 680));
  font-weight: lighter;
}

.intro-img {
  grid-column: 6 / 9;
  grid-row: 1 / -1;
  background: url(https://i.postimg.cc/y8f3TqgG/C-LWEDDING-1170.jpg) center no-repeat;
  background-size: cover;
}

.intro-mobile {
  display: none;
}

.intro-bg {
  grid-column: 1 / 6;
  grid-row: 8 / -1;
  background-color: #262626;
}

@media (width <= 64rem) {
  .intro-container {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
  }

  .intro-title {
    text-align: center;
  }

  .intro-mobile {
    display: block;
  }
}

@media (width <= 26rem) {
  .intro-text{
    display: none;
  }
}

.intro-h2{
  animation-name: fadeTest;
  animation-duration: 1070ms;
}

span{
  color: #000;
  animation-name: fadeColor;
  animation-duration: 1070ms;
  animation-delay: 450ms;
  animation-fill-mode: forwards;
}

@keyframes fadeColor {
  0%{
    color: #000;
  }
  50%{
    color: #000;
  }
  100%{
    color: var(--orangeColor);
  }
}

@keyframes fadeTest {
  0% {
    opacity: 0;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>