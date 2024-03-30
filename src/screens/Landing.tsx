import { View, Text, Image, Pressable } from "react-native";
import colors from "../lib/color";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackNavigatorParamsList } from "../../App";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackNavigatorParamsList, "Landing">;

const Landing = ({ navigation }: Props) => {
	const { mainText, secondaryText, primary } = colors;

	return (
		<SafeAreaView
			style={{
				flexDirection: "column",
				height: "100%",
				justifyContent: "space-between",
				paddingVertical: 20,
				backgroundColor: "white",
				alignItems: "center",
			}}
		>
			<Image source={require("../assets/Onboarding.png")} style={{ width: "100%" }} />
			<View style={{ alignItems: "center", width: 200, gap: 20 }}>
				<Text style={{ color: mainText, fontWeight: "bold", fontSize: 22 }}>Start Cooking</Text>
				<Text
					style={{ color: secondaryText, fontWeight: "500", fontSize: 17, textAlign: "center" }}
				>
					Let’s join our community to cook better food!
				</Text>
			</View>
			<Pressable
				style={{
					backgroundColor: primary,
					paddingHorizontal: 120,
					paddingVertical: 20,
					borderRadius: 100,
				}}
				onPress={() => {
					navigation.navigate("Home");
				}}
			>
				<Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>Get Started</Text>
			</Pressable>
		</SafeAreaView>
	);
};

export default Landing;
