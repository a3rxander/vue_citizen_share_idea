import { createStore } from 'vuex'
import auth_storevuex from '../modules/auth/store'
import proposal_storevuex from '../modules/proposal/store'
import vote_storevuex from '../modules/vote/store'

const store= createStore ( {
  modules: {
    auth_storevuex,
    proposal_storevuex,
    vote_storevuex
  }

} )


export default store