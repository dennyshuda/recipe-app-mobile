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
	const [status, setStatus] = useState<"idle" | "success" | "loading" | "error">("idle");

	const getMeal = async () => {
		try {
			setStatus("loading");
			const response = await fetch(BASE_URL + `filter.php?c=${selected}`);
			const data = await response.json();
			setMeals(data.meals);
			setStatus("success");
		} catch (error) {
			setStatus("error");
			throw new Error("Something wrong when fetch data");
		} finally {
			setStatus("idle");
		}
	};

	useEffect(() => {
		getMeal();
	}, [selected]);

	return { meals, status, selected };
};

export default useGetMealByCategory;
