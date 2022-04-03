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
    const {v_problema, v_solucion,v_area } = entry
    const v_status="Activo";
    const dataToSave = { v_problema, v_solucion ,v_status, v_area,  uid}

    const { data } = await proposalAPI.post(`/propuestas/${uid}.json` , dataToSave )

    dataToSave.id=data.name;

    // Commit de una mutation -> updateEntry
    commit('m_add_propuesta', dataToSave)

    return data.name
}

export const updatePropuesta = async ({ commit,rootState }, entry) => { 

    const uid= rootState.auth_storevuex.uid;
    const {v_problema, v_solucion, v_area } = entry
    const v_status="Activo";
    const dataToSave = { v_problema, v_solucion ,v_status, v_area, uid}

    const { data } = await proposalAPI.put(`/propuestas/${uid}/${entry.id}.json` , dataToSave )

    dataToSave.id=data.name;

    // Commit de una mutation -> updateEntry
    commit('m_update_propuesta', dataToSave)

    return data.name
}


export const deletePropuesta = async ({ commit,rootState }, id) => { 

    const uid= rootState.auth_storevuex.uid;
    await proposalAPI.delete(`/propuestas/${uid}/${id}.json` )

    commit('m_delete_proposal', id)

    return id
}
 
