import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getTodosSuccess = payload => ({
	type: actionTypes.GET_TODOS_SUCCESS,
	payload,
});

export const getTodosError = payload => ({
	type: actionTypes.GET_TODOS_ERROR,
	payload,
});

export const getTodos = () => async dispatch => {
	await axios
		.get("https://jsonplaceholder.typicode.com/todos/")
		.then(response => dispatch(getTodosSuccess(response.data)))
		.catch(error => dispatch(getTodosError(error)));
};
