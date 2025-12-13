import { createStore } from "redux";

const initialState = {
    botaoClickado: false,
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOTAO_CLICKADO':
            const newState = { ...state }
            newState.botaoClickado = !newState.botaoClickado
            return newState
        default:
            return state
    }
}

const store = createStore(reducer)

export default store