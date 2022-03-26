
export const getPropuestas =  ( state ) => (v_buscar='') => {
    if (v_buscar.length === 0) return state.list_propuestas

    return state.list_propuestas.filter(entry => entry.v_problema.toLowerCase().includes(v_buscar.toLowerCase()))
}

 