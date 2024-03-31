import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import useGetMealById from "../services/useGetMealById";
import colors from "../lib/color";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type ParamList = {
	Detail: { itemId: string };
};

const Detail = () => {
	const route = useRoute<RouteProp<ParamList>>();

	const { form, primary } = colors;
	const { meal, status } = useGetMealById(route.params.itemId);
	console.log(meal?.strInstructions);
	const instructions = meal?.strInstructions.split("\r\n");

	const isLoading = status === "loading";

	return (
		<ScrollView style={{ backgroundColor: "white" }}>
			{isLoading ? (
				<Text>loading</Text>
			) : (
				<>
					<Image source={{ uri: meal?.strMealThumb }} style={{ width: "100%", aspectRatio: 1 }} />
					<View
						style={{
							top: -30,
							backgroundColor: "white",
							borderTopStartRadius: 40,
							borderTopEndRadius: 40,
							padding: 25,
						}}
					>
						<Text>{meal?.strMeal}</Text>
						<View
							style={{
								marginVertical: 20,
								height: 3,
								width: "100%",
								backgroundColor: form,
							}}
						/>

						<View>
							<Text style={{ fontWeight: "bold", fontSize: 17, marginVertical: 10 }}>
								Ingredients
							</Text>
							{meal?.ingredients.map(({ name, measure }, index) => (
								<View key={index} style={{ flexDirection: "row", gap: 5 }}>
									<Ionicons name="checkmark-circle" size={24} color={primary} />
									<Text>
										{measure} - {name}
									</Text>
								</View>
							))}
						</View>

						<View>
							<Text style={{ fontWeight: "bold", fontSize: 17, marginVertical: 10 }}>Steps</Text>
							{instructions?.map((instruction, index) => (
								<Text key={index} style={{ textAlign: "justify" }}>
									{index + 1}. {instruction}
								</Text>
							))}
						</View>
					</View>
				</>
			)}
		</ScrollView>
	);
};

export default Detail;
