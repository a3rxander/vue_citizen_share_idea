<template>
    
  <div class="container">
    <div class="mb-12">
      <router-link :to="{ name: 'proposal_propuesta_create'}" class="btn btn-primary btn-lg px-4">Crear Nueva Propuesta</router-link>
    </div>
    <hr>
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