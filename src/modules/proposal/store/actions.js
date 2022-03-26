/*
export const myAction = async ({ commit }) => {}*/

import proposalAPI from "../../../api/proposalApi";
 


export const loadPropuestas = async ({ commit, rootState}) => {

    const uid= rootState.auth_storevuex.uid;
    const { data } = await proposalAPI.get(`/propuestas/${uid}.json`)

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

export const storePropuesta = async ({ commit,rootState }, entry) => { 

    const uid= rootState.auth_storevuex.uid;
    const {v_problema, v_solucion } = entry
    const dataToSave = { v_problema, v_solucion , uid}

    const { data } = await proposalAPI.post(`/propuestas/${uid}.json` , dataToSave )

    dataToSave.id=data.name;

    // Commit de una mutation -> updateEntry
    commit('storeproposal', dataToSave)

    return data.name
}
 
