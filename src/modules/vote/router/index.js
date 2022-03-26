export default{

    name: 'vote',
    component: () => import(/* webpackChunkName: "vote" */ '@/modules/vote/layouts/voteLayout.vue'),
    children: [
        {
            path:'',
            name:'vote_index',
            component: () => import(/* webpackChunkName: "vote_index"*/'@/modules/vote/views/VoteIndex.vue' )
        },
        {
            path:':id',
            name:'vote_propuesta_show',
            component: () => import(/* webpackChunkName: "vote_propuesta_show"*/'@/modules/vote/views/VoteShow.vue' ),
            props:( route ) => {
                return {
                    id:route.params.id
                }
            }
        },

]
}