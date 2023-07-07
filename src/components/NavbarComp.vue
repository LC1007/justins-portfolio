<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top px-6">
      <div class="container-fluid">
        <h1>Dev.</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item nav-item my-2 my-sm-2 my-md-2">
              <router-link class="nav-links active" to="/" exact v-scroll-to="{ el: '#home', offset: -600 }">Home</router-link>
            </li>
            <li class="nav-item nav-item my-2 my-sm-2 my-md-2">
              <router-link class="nav-links" to="/about" exact v-scroll-to="{ el: '#about', offset: -600 }">About</router-link>
            </li>
            <li class="nav-item nav-item my-2 my-sm-2 my-md-2">
              <router-link class="nav-links" to="/resume" exact v-scroll-to="{ el: '#resume', offset: -600 }">Resume</router-link>
            </li>
            <li class="nav-item nav-item my-2 my-sm-2 my-md-2">
              <router-link class="nav-links" to="/projects" exact v-scroll-to="{ el: '#projects', offset: -600 }">Projects</router-link>
            </li>
            <li class="nav-item nav-item my-2 my-sm-2 my-md-2">
              <router-link class="nav-links" to="/testimonials" exact v-scroll-to="{ el: '#testimonials', offset: -600 }">Testimonials</router-link>
            </li>
            <li class="nav-item nav-item my-2 my-sm-2 my-md-2">
              <router-link class="nav-links" to="/contact" exact v-scroll-to="{ el: '#contact', offset: -600 }">Contact</router-link>
            </li>
            <li class="nav-links ms-md-2">
              <a href="https://drive.google.com/uc?export=download&id=1_f9PthPzd4fz9f4si_L0v2mUeCTYc0IS" class="btn custom-btn" download>Download CV</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <hr />
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

  .custom-btn{
    padding: 0.45rem 1rem;
    border: none;
    background-color: var(--blackColor);
    color: #fff;
    border-radius: 3px;
  }

  nav{
    position: fixed;
  background-color: #fff;
  z-index: 1;
  }

    .nav-links{
        padding-inline: 1rem;
        text-decoration: none;
        color: #000;
    }

    hr{
        width: 84%;
        margin: auto;
    }


    .px-6{
      padding-right: 2rem;
    }

    nav .nav-links.router-link-exact-active{
      color: #fff;
      background-color: var(--orangeColor);
      border-radius: 3px;
      padding: .5rem 1rem;
    }
</style>