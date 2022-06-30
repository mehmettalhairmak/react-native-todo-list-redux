import * as actionTypes from "../actions/actionTypes";

const initialState = {};

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_TODOS_SUCCESS:
			return [...state, action.payload];

		case actionTypes.GET_TODOS_ERROR:
			return [action.payload];

		default:
			return state;
	}
};
