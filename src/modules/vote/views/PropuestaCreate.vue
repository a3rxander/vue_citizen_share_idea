<template>    
    <StorePublicar></StorePublicar>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    name: 'PropuestaCreate',
    methods : {

    },
    
 components:
 {
    StorePublicar:defineAsyncComponent(()=> import ('../components/StorePublicar'))
 },
created()
    {
       
    }, 
 
}
</script>
