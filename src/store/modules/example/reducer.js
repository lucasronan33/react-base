const initialState = {
    botaoClickado: false,
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'BOTAO_CLICKADO':
            const newState = { ...state }
            newState.botaoClickado = !newState.botaoClickado
            return newState
        default:
            return state
    }
}