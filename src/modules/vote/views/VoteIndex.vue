<template>
    <div class="container">
        <ListaPropuesta></ListaPropuesta>
      
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default({
 
name: 'PropuestaIndex',
 components:{
   ListaPropuesta:defineAsyncComponent(()=> import ('../components/ListaPropuesta')),
  // PropuestaCreate:defineAsyncComponent(()=> import ('../components/PropuestaCreate'))
 },
})
</script>