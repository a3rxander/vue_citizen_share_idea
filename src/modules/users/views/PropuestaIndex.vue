<template>
    <main>

    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
         
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
       <!-- <PropuestaCreate icon="dasdasdsds"></PropuestaCreate> -->
        <ListaPropuesta></ListaPropuesta>
      </div>
      <!-- /End replace -->
    </div>
    
  </main>
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