export default{

    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ '@/modules/users/layouts/usersLayout.vue'),
    children: [
        {
            path:'',
            name:'users_index',
            component: () => import(/* webpackChunkName: "users_index"*/'@/modules/users/views/PropuestaIndex.vue' )
        },
        {
            path:'usuarios',
            name:'users_usuarios',
            component: () => import(/* webpackChunkName: "users_usuarios"*/'@/modules/users/views/Usuarios.vue' )
        },
        {
            path:'propuestas/create',
            name:'users_propuesta_create',
            component: () => import(/* webpackChunkName: "users_propuesta_create"*/'@/modules/users/views/PropuestaCreate.vue' )
        },
        {
            path:'propuestas/:id',
            name:'users_propuesta_show',
            component: () => import(/* webpackChunkName: "users_propuesta_show"*/'@/modules/users/views/PropuestaShow.vue' ),
            props:( route ) => {
                return {
                    id:route.params.id
                }
            }
        },

]
}