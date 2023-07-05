<template>
  <div class="container">
    <!-- About Me Section -->

    <div class="about-container m-5">
      <div class="row">
        <div class="col-sm-12 col-md-6 col">
          <img
            src="https://i.postimg.cc/kGN2090d/C12-Justin-Scholtz-3-min.jpg"
            loading="lazy"
            class="mb-4 w-75 m-auto"
            alt=""
            v-motion
       :initial="{
         opacity: 0,
         y: 100,
       }"
       :visible="{
         opacity: 1,
         y: 0,
       }"
          />
        </div>
        <div class="col-12 col-md-6 col">
          <h2 v-motion-slide-bottom>About <span>Me</span></h2>
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
     <!-- Interests -->

     <h2 class="mb-4 fw-lighter">Inter<span>ests</span></h2>
     <div class="mb-5 card-group">
       <div class="card w-100" style="width: 18rem;" v-motion
       :initial="{
         opacity: 0,
         y: 100,
       }"
       :enter="{
         opacity: 1,
         y: 0,
         transition: {
          delay: 500,
         }
       }">
         <div class="card-body">
           <div class="d-flex flex-column align-items-center m-2">
             <ion-icon name="football-outline" size="large"></ion-icon>
             <h5 class="card-title">Sports</h5>
           </div>
           <p class="card-text">Huge soccer fan, if I'm not watching soccer then I'm playing soccer with friends. You'd always catch me with a ball because I grew up with one.</p>
         </div>
       </div>
       <div class="card w-100" style="width: 18rem;" v-motion
       :initial="{
         opacity: 0,
         y: 100,
       }"
       :enter="{
         opacity: 1,
         y: 0,
         transition: {
          delay: 1000,
         }
       }">
           <div class="card-body">
             <div class="d-flex flex-column align-items-center m-2">
               <ion-icon name="game-controller-outline" size="large"></ion-icon>
               <h5 class="card-title">Gaming</h5>
             </div>
             <p class="card-text">If I'm not in front of the laptop coding away then I'm in front of the tv playing games, always improving my skills and XP.</p>
           </div>
         </div>
         <div class="card w-100" style="width: 18rem;" v-motion
         :initial="{
           opacity: 0,
           y: 100,
         }"
         :enter="{
           opacity: 1,
           y: 0,
           transition: {
            delay: 1500,
           }
         }">
           <div class="card-body">
             <div class="d-flex flex-column align-items-center m-2">
               <ion-icon name="hammer-outline" size="large"></ion-icon>
               <h5 class="card-title">Hands On Experience</h5>
             </div>
             <p class="card-text">I like breaking things and then fixing them, since a child I've been breaking lots of things which is where my passion for breaking things came from. I love building things no matter how small the project.</p>
           </div>
         </div>
     </div>
  </div>
</template>

<script>
export default{

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
