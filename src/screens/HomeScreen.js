import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet, FlatList } from "react-native";
import todosResults from "../hooks/useResults";
import { getTodos } from "../redux/actions/todosActions";

const HomeScreen = () => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();
	const result = dispatch(getTodos());

	console.log(state);

	return (
		<View>
			<Text>Home Screen</Text>

			<FlatList
				data={result.todosReducer}
				keyExtractor={(item, index) => item.id}
				renderItem={value => {
					<Text key={value.id}>{value.title}</Text>;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default HomeScreen;
