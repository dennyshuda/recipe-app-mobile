import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
import useGetMealById from "../services/useGetMealById";

type ParamList = {
	Detail: { itemId: string };
};

const Detail = () => {
	const route = useRoute<RouteProp<ParamList>>();

	const { meal } = useGetMealById(route.params.itemId);

	console.log(meal);

	return (
		<View>
			<Text>tes {route?.params?.itemId}</Text>
		</View>
	);
};

export default Detail;
