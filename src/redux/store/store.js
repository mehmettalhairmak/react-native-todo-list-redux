import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "../reducers/todosReducer";
import thunk from "redux-thunk";
const store = configureStore({
	reducer: {
		todosReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
