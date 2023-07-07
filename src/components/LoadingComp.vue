<template>
    <div class="loader d-flex flex-column">
        <img src="../assets/untitled-5.gif"  style="position: relative; top: 2rem; left: .5rem" alt="">
        <div class="spinner-border" role="status"> 
      <span class="visually-hidden">Loading...</span>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

</style>