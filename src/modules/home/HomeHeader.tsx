import { TextInput, View, Text } from "react-native";
import useGetCategories from "../../services/useGetCategories";
import Tabs from "../../components/TabMenu";
import colors from "../../lib/color";
import { BASE_STYLES } from "../../styles";

const HomeHeader = () => {
	const { secondaryText } = colors;
	const { categories, status } = useGetCategories();

	const isLoading = status === "loading";

	return (
		<View style={BASE_STYLES.container}>
			<TextInput
				style={{
					height: 50,
					marginVertical: 20,
					paddingHorizontal: 30,
					backgroundColor: "#F4F5F7",
					borderRadius: 100,
				}}
				placeholder="Search"
			/>

			<View style={{ gap: 10 }}>
				<Text style={{ fontWeight: "bold", fontSize: 17 }}>Category</Text>

				{isLoading ? (
					<Text>loading</Text>
				) : (
					<Tabs
						tab={categories.map(({ strCategory }) => ({
							label: strCategory,
							value: strCategory,
						}))}
					/>
				)}
			</View>

			<View
				style={{
					marginVertical: 20,
					height: 3,
					width: "100%",
					backgroundColor: secondaryText,
				}}
			/>
		</View>
	);
};

export default HomeHeader;
