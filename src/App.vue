<template>
  <div id="app">
    <Loading v-if="loading"/>
    <div v-else>
      <Navbar/>
      <HomeComp/>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/NavbarComp.vue'
  import HomeComp from '@/components/HomeComp.vue'
  import Loading from '@/components/LoadingComp.vue'

  export default{
    name: 'App',
    components: {
      Navbar,
      HomeComp,
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
