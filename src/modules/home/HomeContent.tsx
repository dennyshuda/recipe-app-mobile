import { View, Text, FlatList, Image, ScrollView, Pressable } from "react-native";
import useGetMealByCategory from "../../services/useGetMealByCategory";
import colors from "../../lib/color";
import { RootStackNavigatorParamsList } from "../../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

const HomeContent = () => {
	const { tertiaryText } = colors;
	const { meals } = useGetMealByCategory();

	const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorParamsList>>();

	return (
		<View>
			<FlatList
				data={meals}
				keyExtractor={(item) => item.idMeal}
				contentContainerStyle={{ gap: 30 }}
				columnWrapperStyle={{ gap: 20 }}
				numColumns={2}
				renderItem={({ item }) => (
					<View style={{ flex: 1, gap: 10 }}>
						<Pressable
							onPress={() => {
								navigation.navigate("Detail", { itemId: item.idMeal });
							}}
						>
							<Image
								source={{ uri: item.strMealThumb }}
								style={{ width: "100%", borderRadius: 20, aspectRatio: 1 }}
							/>
						</Pressable>
						<Text style={{ fontWeight: "bold", fontSize: 17, color: tertiaryText }}>
							{item.strMeal}
						</Text>
					</View>
				)}
			/>
		</View>
	);
};

export default HomeContent;
