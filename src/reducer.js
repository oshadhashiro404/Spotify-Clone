export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// TODO : Remove after developing
	// token:
	// 	'BQAIlwd9U-9GrJNTBDmfhpHP083KzhSAvm4cqWphIWTrGCgP1Y2N-z16Npg28PsxRXwd7U-eiFYwJ8Yn7k7TDmITYEdYcL-dBanvYRMetAIwMQM77pgOuUfho0ForqulTHKXdJi50Z2IWx6eyH4AlA9l8FVD1vM',
};

const reducer = (state, action) => {
	console.log(action);

	// Action => type, [payload]

	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};

		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			};

		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists,
			};

		case 'SET_DISCOVER_WEEKLY':
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};

		default:
			return state;
	}
};

export default reducer;
