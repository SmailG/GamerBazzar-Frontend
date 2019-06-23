const initalState = {
	
};

export default function reducer (state = initalState, action) {
	switch (action.type) {
		case 'INIT_CONF':
			return action.conf;
		default:
			return state;
	}
}