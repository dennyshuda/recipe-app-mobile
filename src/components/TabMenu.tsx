import { useContext, useEffect, useState } from "react";
import { FlatList, Pressable, View, Text } from "react-native";
import colors from "../lib/color";
import { TabContext, TabContextType } from "../context/TabContext";

type Props = {
	tab: Tab[];
};

type Tab = {
	label: string;
	value: string;
};

const TabMenu = ({ tab }: Props) => {
	const { selected, setSelected } = useContext(TabContext) as TabContextType;
	const { secondaryText, form } = colors;

	return (
		<View>
			<FlatList
				contentContainerStyle={{ gap: 10 }}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				data={tab}
				renderItem={({ item }) => (
					<Pressable
						style={
							selected === item.value
								? {
										backgroundColor: "green",
										paddingVertical: 10,
										paddingHorizontal: 20,
										borderRadius: 100,
								  }
								: {
										backgroundColor: form,
										paddingVertical: 10,
										paddingHorizontal: 20,
										borderRadius: 100,
								  }
						}
						onPress={() => setSelected(item.value)}
					>
						<Text
							style={
								selected === item.value
									? { fontSize: 15, fontWeight: "bold", color: "white" }
									: { fontSize: 15, fontWeight: "bold", color: secondaryText }
							}
						>
							{item.label}
						</Text>
					</Pressable>
				)}
				keyExtractor={(item) => "#" + item.label}
			/>
		</View>
	);
};

export default TabMenu;
