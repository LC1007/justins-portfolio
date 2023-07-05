<template>
    <div id="contact"></div>
    <div class="container">
      <div class="row my-5">
        <div class="col-12 col-md-6 col-lg-6">
          <img
            src="https://i.postimg.cc/WzXmkrZ3/diogo-brandao-c-UXK9-k-Qfy4-unsplash.jpg"
            loading="lazy"
            alt=""
            class="w-100 img mt-md-5"
          />
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <form action="" class="form">
            <h1 v-motion-slide-bottom class="display-1 text-center my-5">Con<span>tact Me</span></h1>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="John Doe"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Message</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="d-flex justify-content-center m-4">
              <button class="btn btn-custom">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .btn-custom {
    background-color: var(--orangeColor);
    color: #fff;
  }
  </style>