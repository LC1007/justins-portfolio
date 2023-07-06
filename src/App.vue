<template>
  <Navbar/>
  <router-view/>
  <FooterComp/>
</template>

<script>
  import Navbar from '@/components/NavbarComp.vue'
  import FooterComp from '@/components/FooterComp.vue'

  export default{
    components: {
      Navbar,
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
