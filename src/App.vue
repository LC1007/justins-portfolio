<template>
  <Navbar/>
  <HomeComp/>
  <router-view/>
</template>

<script>
  import Navbar from '@/components/NavbarComp.vue'
  import HomeComp from '@/components/HomeComp.vue'

  export default{
    components: {
      Navbar,
      HomeComp
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
