<template> 

 <h2>Actualizar Propuesta</h2>

 
  <div class="col-md-5">
    <label for="area" class="form-label">Área: {{d_propuesta.v_area}}</label>
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
        ...mapActions('vote_storevuex',['updThumbup','deleteThumbup','updThumbdown','deleteThumbdown']),
        async saveThumbpup()
        {
            new Swal({ title:"Guardando...",allowOutsideClick:true,})
            Swal.showLoading()
 
            await this.deleteThumbdown(this.d_propuesta);
            await this.updThumbup(this.d_propuesta);
 
            Swal.fire('Actualizado','entrada actualizada con éxito','success')
        },
        async saveThumbdown()
        {
            new Swal({ title:"Guardando...",allowOutsideClick:true,})
            Swal.showLoading()

            await this.deleteThumbup(this.d_propuesta);
            await this.updThumbdown(this.d_propuesta);

            Swal.fire('Actualizado','entrada actualizada con éxito','success')
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