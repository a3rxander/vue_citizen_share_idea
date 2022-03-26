<template>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Descripción del Problema 
      </label>
      <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="d_propuesta.v_problema"></textarea>
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Propuesta de Solución 
      </label>
      <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="d_propuesta.v_solucion"></textarea>
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  
    <div class="flex items-center justify-between">
      <button   @click="saveEntry" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Crear
      </button>
    </div>
</template>

 

<script>
import Swal from 'sweetalert2' 
import { mapActions} from 'vuex'
export default {
 data(){
        return {
          d_propuesta:{
            v_problema:null,v_solucion:null,
          },
        }
    },
    computed:{
     
    },
    methods : { 
      ...mapActions('vote_storevuex',['storePropuesta']),
        async saveEntry()
        {
          new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })

            Swal.showLoading()
            const id = await this.storePropuesta(this.d_propuesta);
            console.log(id);
          Swal.fire('Guardado', 'Entrada registrada con éxito', 'success');
        },   
        
    },
    watch: {
    },
}
</script>

<style>

</style>