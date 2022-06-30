import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/actions/todosActions";

export default () => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();
	const result = dispatch(getTodos());

	return [result];
};
