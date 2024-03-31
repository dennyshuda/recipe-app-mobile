import { useEffect, useState } from "react";
import { BASE_URL } from "../lib/constant";

type Ingredient = {
	name: string;
	measure: string;
};

export type MealsDetailResponse = {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
	ingredients: Ingredient[];
	strInstructions: string;
};

const useGetMealById = (id: string) => {
	const [meal, setMeal] = useState<MealsDetailResponse>();
	const [status, setStatus] = useState<"idle" | "success" | "loading" | "error">("idle");

	const getMeal = async () => {
		try {
			setStatus("loading");
			const response = await fetch(BASE_URL + `lookup.php?i=${id}`);
			const data = await response.json();
			if (data.meals) {
				const ingredients: Ingredient[] = [];
				for (let i = 1; i <= 20; i++) {
					if (data.meals[0][`strIngredient${i}`]) {
						ingredients.push({
							name: data.meals[0][`strIngredient${i}`],
							measure: data.meals[0][`strMeasure${i}`],
						});
					}
				}
				setMeal({ ...data.meals[0], ingredients });
			} else {
				throw new Error("Meal not found");
			}
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
