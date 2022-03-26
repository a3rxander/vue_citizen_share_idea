import store from '@/store'

const isNotAuthenticatedGuard = async( to, from, next ) => {

    const { ok } = await store.dispatch('auth_storevuex/checkAuthentication')

    if ( ok ) next({ name: 'redirecto' })
    else next()
}

export default isNotAuthenticatedGuard