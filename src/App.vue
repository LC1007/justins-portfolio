<template>
  <Navbar/>
  <router-view/>
</template>

<script>
  import Navbar from '@/components/NavbarComp.vue'

  export default{
    components: {
      Navbar
    }
  }
</script>

<style>
  body{
    font-family: sans-serif;
  }

  span{
    color: #FE481C;
  }
</style>
