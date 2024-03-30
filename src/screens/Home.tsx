import { SafeAreaView } from "react-native";
import { RootStackNavigatorParamsList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import HomeHeader from "../modules/home/HomeHeader";
import HomeContent from "../modules/home/HomeContent";

type Props = NativeStackScreenProps<RootStackNavigatorParamsList, "Home">;

const Home = ({ navigation }: Props) => {
	return (
		<SafeAreaView style={{ height: "100%", backgroundColor: "white", paddingHorizontal: 20 }}>
			<HomeHeader />
			<HomeContent />
			{/* <Pressable
				style={{
					backgroundColor: "green",
					paddingHorizontal: 120,
					paddingVertical: 20,
					borderRadius: 100,
				}}
				onPress={() => {
					navigation.navigate("Landing");
				}}
			>
				<Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>Go Back</Text>
			</Pressable> */}
		</SafeAreaView>
	);
};

export default Home;
