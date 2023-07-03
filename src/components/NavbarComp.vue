<template>
    <div>
        <nav class="d-flex justify-content-around align-items-center p-3">
            <h1>Dev.</h1>
            <ul class="list-unstyled d-flex">
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
            </nav>
            <hr class="ms-auto">
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