export default{

    name: 'proposal',
    component: () => import(/* webpackChunkName: "proposal" */ '@/modules/proposal/layouts/proposalLayout.vue'),
    children: [
        {
            path:'',
            name:'proposal_index',
            component: () => import(/* webpackChunkName: "proposal_index"*/'@/modules/proposal/views/PropuestaIndex.vue' )
        },
        {
            path:'create',
            name:'proposal_propuesta_create',
            component: () => import(/* webpackChunkName: "proposal_propuesta_create"*/'@/modules/proposal/views/PropuestaCreate.vue' )
        },
        {
            path:':id',
            name:'proposal_propuesta_edit',
            component: () => import(/* webpackChunkName: "proposal_propuesta_edit"*/'@/modules/proposal/views/PropuestaEdit.vue' ),
            props:( route ) => {
                return {
                    id:route.params.id
                }
            }
        },

]
}