<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"> 
  </div> 
    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
 

</template>

<script>
// @ is an alias to /src 
export default {
  name: 'Home',
   methods: {
    goToDaybook() {
      this.$router.push({ name: 'participation_cursos_create' })
    }
   },
  
}
</script>
