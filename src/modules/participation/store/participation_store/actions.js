/*
export const myAction = async ({ commit }) => {}*/

import participationAPI from "../../../../api/ParticipationApi";
 


export const loadPropuestas = async ({ commit }) => {

    const { data } = await participationAPI.get('/propuestas.json')

    if ( !data )
    {
        commit('setPropuestas', [] )
        return
    }

    const entries= [];
    for (let id of Object.keys(data))
    {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setPropuestas',entries)
}

export const storePropuesta = async ({ commit }, entry) => { 

    const {v_problema, v_solucion } = entry
    const dataToSave = { v_problema, v_solucion }

    const { data } = await participationAPI.post( '/propuestas.json', dataToSave )

    dataToSave.id=data.name;

    // Commit de una mutation -> updateEntry
    commit('storeparticipation', dataToSave)

    return data.name
}
 
