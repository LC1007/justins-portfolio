<template>
  <div id="contact">

    <!-- Contact Section Start -->

    <div class="container">
      <div class="row my-5"> 
        <div class="col-12 col-md-6 col-lg-6 d-flex flex-column align-items-center">
          <form action="https://formspree.io/f/xayzkqly" method="post" class="form">
            <h1 class="display-1 text-center my-5">Con<span>tact Me</span></h1>
            <div class="mb-3">
              <FormKit
                type="text"
                label="Name"
                validation="required:trim"
                help="e.g John Doe"
                name="name"
                v-model="input1"
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
                v-model="input2"
              />
            </div>
            <div class="mb-3">
              <FormKit
                type="text"
                label="Subject"
                validation="required:trim"
                name="subject"
                v-model="input3"
              />
            </div>
            <div class="mb-3">
              <FormKit 
              type="textarea"
              label="Message"
              v-model="input4"
              validation="required:trim" />
            </div>
            <div class="d-flex justify-content-center m-4">
              <button :disabled="isButtonDisabled" @click="handleButtonClick" class="btn btn-custom">Send Message</button>
            </div>
          </form>

           <div v-if="showPopup" class="popup">
            Please fill out all the inputs before submitting
           </div>

        </div>
        <div class="col-12 col-md-6 col-lg-6 bg-img d-flex flex-column justify-content-center align-items-center">
          <div class="h-100 text-white d-flex flex-column justify-content-center rounded-2">
            <h4 class="m-5 display-6 fw-bold text-center">CONTACT INFO</h4>
            <div class="email d-flex px-4">
              <i class="bi bi-envelope-at-fill px-3 custom-text"></i>
              <p class="pb-5 fw-bold custom-text">scholtz0929@gmail.com</p>
            </div>
            <div class="email d-flex px-4">
                <i class="bi bi-telephone-fill px-3 custom-text"></i>
                <p class="pb-5 fw-bold custom-text">061 781 9282</p>
            </div>
            <div class="email d-flex px-4">
                  <i class="bi bi-house px-3 custom-text"></i>
                  <p class="pb-5 fw-bold custom-text">Cape Town, Western Cape</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>

  <!-- Contact Section End -->

  </template>
  
  <script>
  import Footer from '@/components/FooterComp.vue'
  export default{
    components:{
      Footer
    },
    data(){
      return{
        input1: '',
        input2: '',
        input3: '',
        input4: '',
      }
    },
    computed:{
      isButtonDisabled(){
        return !(this.input1 && this.input2 && this.input3 && this.input4)
      }
    }
  }

  </script>
  
  <style scoped>
  .btn-custom {
    background-color: var(--orangeColor);
    color: #fff;
  }

  .bg-img{
    background:  linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(https://i.postimg.cc/J7cBCPr1/miryam-leon-Jdpvhn6x-A0w-unsplash.jpg) center no-repeat;
  }

  .custom-text{
    font-size: calc(1rem + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  }

  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  </style>