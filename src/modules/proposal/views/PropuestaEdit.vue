<template>
<div class="container">
  <UpdatePublicar :id="id"></UpdatePublicar>
</div>
</template>

<script>

import  { defineAsyncComponent } from 'vue'

export default {
  name:'PropuestaEdit',

    props: {
      id: { type: String, required:true}
    },
  components:
  {
    UpdatePublicar:defineAsyncComponent( ()=> import('../components/UpdatePublicar') )
  }

}
</script>

<style>

</style>
 