<template>
    <main>

    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
         
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <button @click="$router.push({name: 'proposal_propuesta_create' })" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >Crear Nueva Propuesta</button>
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