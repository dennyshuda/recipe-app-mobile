import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
type ParamList = {
	Detail: { itemId: string };
};

const Detail = () => {
	const route = useRoute<RouteProp<ParamList>>();

	return (
		<View>
			<Text>tes {route?.params?.itemId}</Text>
			<Text>tes {route?.params?.itemId}</Text>
			<Text>tes {route?.params?.itemId}</Text>
		</View>
	);
};

export default Detail;
