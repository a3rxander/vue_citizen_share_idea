
export const getPropuestas =  ( state ) => (v_buscar='') => {
    if (v_buscar.length === 0) return state.list_propuestas

    return state.list_propuestas.filter(entry => entry.v_problema.toLowerCase().includes(v_buscar.toLowerCase()))
}

export const getPropuestaId = (state) => (id = '')=>
{ 
    const entry = state.list_propuestas.find(entry => entry.id ===id  )
    console.log(entry)
    if (!entry) return 
    return {...entry}
}

 