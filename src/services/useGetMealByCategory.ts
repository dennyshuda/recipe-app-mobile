import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../lib/constant";
import { TabContextType, TabContext } from "../context/TabContext";

type MealsResponse = {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
};

const useGetMealByCategory = () => {
	const { selected } = useContext(TabContext) as TabContextType;
	const [meals, setMeals] = useState<MealsResponse[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const getMeal = async () => {
		try {
			setLoading(true);
			const response = await fetch(BASE_URL + `filter.php?c=${selected}`);
			const data = await response.json();
			setMeals(data.meals);
		} catch (error) {
			setLoading(false);
			throw new Error("Something wrong when fetch data");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getMeal();
	}, [selected]);

	return { meals, loading, selected };
};

export default useGetMealByCategory;
