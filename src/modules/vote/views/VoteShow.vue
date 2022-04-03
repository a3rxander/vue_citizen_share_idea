<template>
<div class="container">
  <UpdateVote :id="id"></UpdateVote>
</div>
</template>

<script>

import  { defineAsyncComponent } from 'vue'

export default {
  name:'VoteShow',

    props: {
      id: { type: String, required:true}
    },
  components:
  {
    UpdateVote:defineAsyncComponent( ()=> import('../components/UpdateVote') )
  }

}
</script>

<style>

</style>
 
 