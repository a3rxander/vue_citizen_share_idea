export default{

    name: 'participation',
    component: () => import(/* webpackChunkName: "participation" */ '@/modules/participation/layouts/ParticipationLayout.vue'),
    children: [
        {
            path:'',
            name:'participation_index',
            component: () => import(/* webpackChunkName: "participation_index"*/'@/modules/participation/views/PropuestaIndex.vue' )
        },
        {
            path:'usuarios',
            name:'participation_usuarios',
            component: () => import(/* webpackChunkName: "participation_usuarios"*/'@/modules/participation/views/Usuarios.vue' )
        },
        {
            path:'propuestas/create',
            name:'participation_propuesta_create',
            component: () => import(/* webpackChunkName: "participation_propuesta_create"*/'@/modules/participation/views/PropuestaCreate.vue' )
        },
        {
            path:'propuestas/:id',
            name:'participation_propuesta_show',
            component: () => import(/* webpackChunkName: "participation_propuesta_show"*/'@/modules/participation/views/PropuestaShow.vue' ),
            props:( route ) => {
                return {
                    id:route.params.id
                }
            }
        },

]
}