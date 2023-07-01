<template>
  <div class="container">
    <div class="intro-container">
      <div class="intro-title">
        <p class="float m-0"></p>
        <h2>
          Hi, I am <br />
          Justin <span>Scholtz</span>
        </h2>
        <pre class="intro-text">
  async function getData(){
    const data = await axios.get("Aspiring Front End <span>Developer</span>")
}
</pre>
        <div class="btns">
          <button class="contact-btn m-0">Contact Me</button>
          <button class="project-btn">
            Projects<i class="bi bi-box-arrow-up-right mx-2"></i>
          </button>
        </div>
      </div>
      <div class="intro-img"></div>
      <div class="intro-bg">
        <div class="icon-container">
          <a href="#"><i class="bi bi-linkedin text-white icons"></i></a>
          <a href="#"><i class="bi bi-instagram text-white icons"></i></a>
          <a href="#"><i class="bi bi-facebook text-white icons"></i></a>
        </div>
      </div>
    </div>

    <!-- Resume Section -->

    <div v-for="item in skills" :key="item.id">
        <p>{{ item.skillName }}</p>
    </div>

  </div>
</template>

<script>

export default {
    computed: {
        skills(){
            return this.$store.state.skills
        }
     },
     mounted(){
        this.$store.dispatch('getData')
     }
};
</script>

<style scoped>
.float::before {
  content: "<resume/>";
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
  grid-template-rows: repeat(7, 6rem);
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
  grid-row: 1 / 6;
  font-weight: bolder;
}

.intro-title > h2 {
  font-size: 5rem;
}

.intro-text {
  font-size: 1.3rem;
  font-weight: lighter;
}

.intro-img {
  grid-column: 6 / 9;
  grid-row: 1 / 8;
  background: url(https://images.pexels.com/photos/225250/pexels-photo-225250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
    center no-repeat;
  background-size: cover;
}

.intro-bg {
  grid-row: 6 / 8;
  grid-column: 1 / 6;
  background-color: #262626;
}
</style>
