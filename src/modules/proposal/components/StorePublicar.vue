<template>

  <h2>Crear Nueva Propuesta</h2>
  
  <div class="col-md-5">
    <label for="area" class="form-label">Área:</label>
    <select v-model="d_propuesta.v_area" class="form-select" id="area" required>
      <option value="Ambiente">Ambiente</option> 
      <option value="Cultura">Cultura</option> 
      <option value="Desarrollo Agropecuario">Desarrollo Agropecuario</option> 
      <option value="Desarrollo Laboral">Desarrollo Laboral</option> 
      <option value="Desarrollo Social">Desarrollo Social</option> 
      <option value="Economía">Economía</option> 
      <option value="Educación">Educación</option> 
      <option value="Obras Públicas">Obras Públicas</option> 
      <option value="Ordenamiento Territorial">Ordenamiento Territorial</option> 
      <option value="Salud">Salud</option> 
      <option value="Seguridad Pública">Seguridad Pública</option> 
    </select> 
  </div>
  
  <div class="col-12">
    <label for="email" class="form-label">Descripción del Problema: <span class="text-muted">explique la situación</span></label>
    <textarea rows="4" class="form-control" v-model="d_propuesta.v_problema"></textarea>
    <div class="invalid-feedback">
    Please enter a valid email address for shipping updates.
    </div>
  </div>
   
    
  <div class="col-12">
    <label for="email" class="form-label">Solución: <span class="text-muted">detalle cómo podría solucionarse el problema</span></label>
    <textarea rows="4" class="form-control" v-model="d_propuesta.v_solucion"></textarea>
    <div class="invalid-feedback">
    Please enter a valid email address for shipping updates.
    </div>
  </div>
  <hr>
  <div class="col-4">
       <button  @click="saveEntry" class="w-100 btn btn-primary btn-lg" > <i class="fa fa-thumbs-up"></i> Guardar</button>
  </div>
  
</template>

 

<script>
import Swal from 'sweetalert2' 
import { mapActions} from 'vuex'

export default {
  
 data(){
        return {
          d_propuesta:{
            v_problema:null,v_solucion:null,v_area:null,
          },
        }
    },
    computed:{
     
    },
    methods : { 
      ...mapActions('proposal_storevuex',['storePropuesta']),
        async saveEntry()
        {
          new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })

            Swal.showLoading()
            const id = await this.storePropuesta(this.d_propuesta);
            this.$router.push({name:'proposal_propuesta_edit', params:{id}})
          
            Swal.fire('Guardado', 'Entrada registrada con éxito', 'success');
        },   
        
    },
    watch: {
    },
}
</script>

<style>

</style>