const INITIAL_STATE = [
	{
		id: 1,
		title: 'Título do tcc',
		author: 'Mateus Bezerra',
		course: 'Ciência da Computação',
		year: 2018
	}
];

export default function mostViewed(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD':
			return [
				...state,
				{
					id: Math.random(),
					title: action.payload.title,
					author: 'Mateus Bezerra',
					course: 'Matemática',
					year: 2018
				}
			];
		default:
			return state;
	}
}
