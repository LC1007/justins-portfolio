<template>
  <div class="container">
    <h1 class="display-1 text-center m-5">Pro<span>jects</span></h1>
    <div class="row">
      <div
        class="col-12 col-md-6 col-lg-4 mb-3"
        v-for="item in projects"
        :key="item.id"
      >
        <div class="card h-100 w-100 card-test" style="width: 18rem">
          <img
            :src="item.img"
            class="card-img-top pb-3"
            loading="lazy"
            :alt="item.projectTitle"
          />
          <div class="card-body" style="padding: 1rem">
            <h4 class="card-title">{{ item.projectTitle }}</h4>
            <p class="card-text">{{ item.projectDesc }}</p>
            <a :href="item.gitHubLink" target="_blank" class="pe-2 text-black"
              ><i class="bi bi-github"></i
            ></a>
            <a :href="item.demoLink" target="_blank" class="text-black"
              ><i class="bi bi-box-arrow-up-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("getProjects");
  },
};
</script>

<style scoped></style>
