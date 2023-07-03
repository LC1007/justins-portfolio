<template>
  <div class="container">
    <!-- About Me Section -->

    <div class="about-container m-5">
      <div class="row">
        <div class="col-sm-12 col-md-6 col">
          <img
            src="https://i.postimg.cc/kGN2090d/C12-Justin-Scholtz-3-min.jpg"
            loading="lazy"
            class="mb-4 w-75"
            alt=""
          />
        </div>
        <div class="col-12 col-md-6 col">
          <h2>About <span>Me</span></h2>
          <p>
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
    <!-- Contact Form -->
    <ContactComp/>
  </div>
</template>

<script>
import ContactComp from '@/components/ContactComp.vue'
  export default{
    components:{
      ContactComp
    }
  }
</script>

<style scoped>

img {
  max-width: 100%;
  display: block;
}
.float::before {
  content: "<home/>";
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
.icons {
  font-size: 3rem;
}

.intro-container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 6rem);
  position: relative;
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
