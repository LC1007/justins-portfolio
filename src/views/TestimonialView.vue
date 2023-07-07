<template>
  <div id="testimonials">
    <div class="container mb-5">
      <h1 class="display-1 text-center py-5 mt-2">Testimo<span>nials</span></h1>
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4 mb-3"
          v-for="item in testimonials"
          :key="item.id"
          v-motion-fade-visible >
          <div class="card w-100 h-100" style="width: 18rem">
            <div class="card-body position-relative">
              <input type="checkbox" :id="item.function" />
              <i class="bi bi-quote" id="quote"></i>
              <p class="card-text m-0">{{ item.textFirst }}</p>
              <div class="content">
                <p class="card-text" v-motion
                :initial="{
                  opacity: 0,
                }"
                :visible="{
                  opacity: 1,
                }">{{ item.textSecond }}</p>
                <label :for="item.function" class="mb-3">Show Less</label>
              </div>
              <label :for="item.function" class="my-3">Read More</label>
              <div class="d-flex">
                <img
                  :src="item.img"
                  loading="lazy"
                  class="card-img rounded-circle w-25 me-3"
                  alt=""
                />
                <div>
                  <h6 class="card-title">{{ item.name }}</h6>
                  <p>Developer</p>
                </div>
              </div>
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
      testimonials() {
        return this.$store.state.testimonials;
      },
    },
    mounted() {
      this.$store.dispatch("getTestimonials");
    },
  };
  </script>
  
  <style scoped>
  #quote {
    font-size: 3rem;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0.2;
  }
  
  #ch-one,
  #ch-two,
  #ch-three,
  #ch-four,
  #ch-five,
  #ch-six {
    display: none;
  }
  
  #ch-one:checked ~ .content {
    display: block;
  }
  
  #ch-one:checked ~ label {
    display: none;
  }
  
  #ch-two:checked ~ .content {
    display: block;
  }
  
  #ch-two:checked ~ label {
    display: none;
  }
  
  #ch-three:checked ~ .content {
    display: block;
  }
  
  #ch-three:checked ~ label {
    display: none;
  }
  
  #ch-four:checked ~ .content {
    display: block;
  }
  
  #ch-four:checked ~ label {
    display: none;
  }
  
  #ch-five:checked ~ .content {
    display: block;
  }
  
  #ch-five:checked ~ label {
    display: none;
  }

  #ch-six:checked ~ .content {
    display: block;
  }
  
  #ch-six:checked ~ label {
    display: none;
  }

  label {
    background-color: var(--orangeColor);
    color: #fff;
    padding: 0.4rem;
    border-radius: 2px;
    cursor: pointer;
  }
  
  .content {
    display: none;
  }
  </style>
  