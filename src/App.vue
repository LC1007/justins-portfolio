<template>
  <Navbar/>
  <HomeComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
  import Navbar from '@/components/NavbarComp.vue'
  import HomeComp from '@/components/HomeComp.vue'
  import FooterComp from '@/components/FooterComp.vue'

  export default{
    components: {
      Navbar,
      HomeComp,
      FooterComp
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
