<template>
  <div id="app">
    <Loading v-if="loading"/>
    <div v-else>
      <Navbar/>
      <router-view/>
      <FooterComp/>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/NavbarComp.vue'
  import FooterComp from '@/components/FooterComp.vue'
  import Loading from '@/components/LoadingComp.vue'

  export default{
    name: 'App',
    components: {
      Navbar,
      FooterComp,
      Loading
    },
    data(){
      return{
        loading: true
      }
    },
    mounted(){
      setTimeout(()=>{
        this.loading = false
      }, 1000)
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
