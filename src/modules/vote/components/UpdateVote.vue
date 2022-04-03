<template> 

 <h2>Actualizar Propuesta</h2>

 
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
    <label for="email" class="form-label">Descripción del Problema: </label>
    <p>{{d_propuesta.v_problema}}</p>
  </div>
  <div class="col-12">
    <label for="email" class="form-label">Solución: <span class="text-muted">detalle cómo podría solucionarse el problema</span></label>
    <p>{{d_propuesta.v_solucion}}</p>
  </div>
  <hr>
  <div class="row">
  <div class="col-4">
      <button  @click="saveThumbpup" class="btn btn-success btn-lg" > <i class="fa fa-thumbs-up"></i> </button>
  </div>
  <div class="col-4">
      <button  @click="saveThumbdown" class="btn btn-warning btn-lg" > <i class="fa fa-thumbs-down"></i> </button>
  </div>
  <div class="col-4">
       <router-link :to="{name:'vote_index'}" class="btn btn-outline-info btn-lg" >Regresar</router-link>
  </div>
  </div>
 
</template> 

<script>
import Swal from 'sweetalert2'
import {mapActions, mapGetters} from 'vuex'

export default {

    props: {
      id: { type: String, required:true}
    },
    data(){
        return{
            d_propuesta:{
                v_problema:null,v_solucion:null
            }
        }
    },

    watch: {
      id() {
        this.loadEntry()
      }
    },
    created() {
        // console.log(this.$route.params.id)
        this.loadEntry()
    },

    computed:{
      ...mapGetters('vote_storevuex',['getPropuestaId']),
    },

    methods:{
        ...mapActions('vote_storevuex',['updatePropuesta','deletePropuesta']),
        async saveEntry()
        {
            new Swal({ title:"Guardando...",allowOutsideClick:true,})
            Swal.showLoading()

            await this.updatePropuesta(this.d_propuesta);

            Swal.fire('Actualizado','entrada actualizada con éxito','success')
        },

         async deleteEntry()
        {
            new Swal({ title:"Eliminando...",allowOutsideClick:true,})
            Swal.showLoading()

            await this.deletePropuesta(this.id);

            this.$router.push({name:'vote_index'})

            Swal.fire('Actualizado','entrada eliminada con éxito','success')
        },

        loadEntry()
        {
          let data;
          data = this.getPropuestaId(this.id)
          if(!data) return this.$router.push({name:'vote_index'})

          this.d_propuesta = data;
        },

 

    }

}
</script>

<style>

</style>