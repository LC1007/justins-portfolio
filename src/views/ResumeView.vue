<template>
  <div id="resume">
    <!-- Timeline Section -->
    <div class="container">
      <h1 v-motion-slide-bottom class="display-1 text-center py-5 mt-2">
        Time<span>line</span>
      </h1>
      <div class="d-md-flex justify-content-center gap-5 container">
        <div>
          <h3>Edu<span>cation:</span></h3>
          <div
            v-for="item in education"
            :key="item.id"
            v-motion-slide-visible-bottom
          >
            <div class="card border-dark mb-3 card-height card-width">
              <div class="card-body">
                <h4 class="card-title">{{ item.institution }}</h4>
                <h6 class="card-subtitle fw-light py-2">{{ item.date }}</h6>
                <p class="card-text">{{ item.eduDesc }}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Wo<span>rk:</span></h3>
          <div
            v-for="item in work"
            :key="item.id"
            v-motion-slide-visible-bottom
          >
            <div class="card border-dark mb-3 card-height card-width">
              <div class="card-body">
                <h4 class="card-title">{{ item.company }}</h4>
                <h6 class="card-subtitle fw-light py-2">{{ item.date }}</h6>
                <p class="card-text">{{ item.jobDesc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Skills Section -->
    <h1 class="display-1 text-center m-5">Ski<span>lls</span></h1>
    <div class="container">
      <div class="row g-5">
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="item in skills"
          :key="item.id"
          v-motion-slide-visible-bottom
        >
          <div class="card h-100 w-100">
            <div class="d-flex flex-column align-items-center">
              <img
                :src="item.img"
                loading="lazy"
                class="custom-img py-3"
                style="width: 5rem"
                alt=""
              />
              <h4 class="custom-title">{{ item.skillName }}</h4>
            </div>
            <div class="card-body">
              <p class="card-text">{{ item.skillDesc }}</p>
              <p class="card-text">{{ item.skillLevel }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="display-1 text-center m-5">Certifi<span>cations</span></h1>
    <div class="container mb-5">
      <div class="row g-5">
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="item in qualification"
          :key="item.id"
          v-motion-slide-visible-bottom
        >
          <div class="card w-100 h-100 p-3">
            <div class="card-body">
              <img
                :src="item.img"
                loading="lazy"
                style="width: 5rem"
                :alt="item"
              />
              <h4 class="card-title">{{ item.provider }}</h4>
              <p class="card-text">{{ item.qualification }}</p>
              <p class="card-text">{{ item.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/FooterComp.vue'

export default {
  components:{
    Footer
  },
  computed: {
    education() {
      return this.$store.state.education;
    },
    work() {
      return this.$store.state.work;
    },
    skills() {
      return this.$store.state.skills;
    },
    qualification() {
      return this.$store.state.qualification;
    },
  },
  mounted() {
    this.$store.dispatch("getEdu");
    this.$store.dispatch("getWork");
    this.$store.dispatch("getData");
    this.$store.dispatch("getQualifications");
  },
};
</script>

<style scoped></style>
