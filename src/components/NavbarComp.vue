<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top px-6">
      <div class="container-fluid">
        <router-link class="nav-links active" to="/">Dev.</router-link>
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
            <li class="nav-item">
              <router-link class="nav-links active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-links" to="/resume">Resume</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-links" to="/testimonials">Testimonials</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-links" to="/contact">Contact</router-link>
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

  nav{
    position: fixed;
    background-color: #fff;
    width: 100%;
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

    nav a.router-link-exact-active{
      color: #fff;
      background-color: var(--orangeColor);
      border-radius: 3px;
      padding: .3rem 1rem;
    }
</style>