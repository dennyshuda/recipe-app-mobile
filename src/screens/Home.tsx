import { SafeAreaView } from "react-native";
import HomeHeader from "../modules/home/HomeHeader";
import HomeContent from "../modules/home/HomeContent";

const Home = () => {
	return (
		<SafeAreaView style={{ backgroundColor: "white" }}>
			<HomeHeader />
			<HomeContent />
		</SafeAreaView>
	);
};

export default Home;
