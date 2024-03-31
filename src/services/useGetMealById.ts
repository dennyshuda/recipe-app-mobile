import { useEffect, useState } from "react";
import { BASE_URL } from "../lib/constant";

type MealsDetailResponse = {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
	strIngredient1: string;
	strIngredient2: string;
	strIngredient3: string;
	strIngredient4: string;
	strIngredient5: string;
	strIngredient6: string;
	strIngredient7: string;
	strIngredient8: string;
	strIngredient9: string;
	strIngredient10: string;
	strMeasure1: string;
	strMeasure2: string;
	strMeasure3: string;
	strMeasure4: string;
	strMeasure5: string;
	strMeasure6: string;
	strMeasure7: string;
	strMeasure8: string;
	strMeasure9: string;
	strMeasure10: string;
	strTagS: string;
};

const useGetMealById = (id: string) => {
	const [meal, setMeal] = useState<MealsDetailResponse>();
	const [status, setStatus] = useState<"idle" | "success" | "loading" | "error">("idle");

	const getMeal = async () => {
		try {
			setStatus("loading");
			const response = await fetch(BASE_URL + `lookup.php?i=${id}`);
			const data = await response.json();
			setMeal(data.meals);
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
	}, [id]);

	return { meal, status };
};

export default useGetMealById;
