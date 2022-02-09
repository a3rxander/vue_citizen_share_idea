import { createStore } from 'vuex'
import participation_storevuex from '../modules/participation/store/participation_store'

const store= createStore ( {
  modules: {
    participation_storevuex
  }

} )


export default store