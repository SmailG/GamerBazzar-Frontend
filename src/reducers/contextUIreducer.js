import { Map } from "immutable";

const initalState = Map({
	global: Map({
        
    })
});

export default function reducer (state = initalState, action) {
	switch (action.type) {
		case 'SET_WINDOW_WIDTH':
			return state.setIn(['global', 'windowWidth'], action.width)
		case 'SET_ERROR':
			return {
				...state,
				errorMessage: action.payload 
			}
		case 'LOG_OUT':
			return {
				...state,
				errorMessage: action.payload
			}
		default:
			return state;
	}
}

