import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./src/screens/Landing";
import Home from "./src/screens/Home";
import TabProvider from "./src/context/TabContext";
import Detail from "./src/screens/Detail";

export type RootStackNavigatorParamsList = {
	Landing: undefined;
	Home: undefined;
	Detail: { itemId: string };
};

const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();

const App = () => {
	return (
		<TabProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Landing" component={Landing} />
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Detail" component={Detail} />
				</Stack.Navigator>
			</NavigationContainer>
		</TabProvider>
	);
};

export default App;
