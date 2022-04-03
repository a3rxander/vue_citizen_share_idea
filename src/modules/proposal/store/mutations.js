

export const setPropuestas = ( state, entries ) => {

    state.list_propuestas = [ ...entries];
    state.isLoading=false;
}

export const setCursoId = ( state, entries ) => {

    state.curso = [ ...entries];
    state.isLoading=false;
}

export const m_update_propuesta = ( state, entry  ) => 
{ 
    const idx = state.list_propuestas.map( e => e.id ).indexOf( entry.id )
    state.list_propuestas[idx] = entry
}

export const m_add_propuesta = (state, entry ) => {
    // state -> entries  -> la nueva entrada debe de ser la primera
    state.list_propuestas = [ entry, ...state.list_propuestas  ]
}

export const m_delete_proposal = (state, id ) => {
    // state -> entries  -> la nueva entrada debe de ser la primera
    state.list_propuestas = state.list_propuestas.filter(entry => entry.id !== id);
}

