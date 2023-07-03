<template>
  <div>
    <h1 class="display-1 text-center m-5">Ski<span>lls</span></h1>
    <div class="container">
      <div class="row g-5">
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="item in skills"
          :key="item.id"
        >
          <div class="card h-100">
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
  </div>
</template>

<script>
export default {
  computed: {
    skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("getData");
  },
};
</script>

<style scoped></style>
