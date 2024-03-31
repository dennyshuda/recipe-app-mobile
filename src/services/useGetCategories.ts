import { useEffect, useState } from "react";
import { BASE_URL } from "../lib/constant";

type CategoriesResponse = {
	idCategory: string;
	strCategory: string;
	strCategoryThumb: string;
	strCategoryDescription: string;
};

const useGetCategories = () => {
	const [categories, setCategories] = useState<CategoriesResponse[]>([]);
	const [status, setStatus] = useState<"idle" | "success" | "loading" | "error">("idle");

	const getCategories = async () => {
		try {
			setStatus("loading");
			const response = await fetch(BASE_URL + "categories.php");
			const data = await response.json();
			setCategories(data.categories);
			setStatus("success");
		} catch (error) {
			setStatus("error");
			throw new Error("Something wrong when fetch data");
		} finally {
			setStatus("idle");
		}
	};

	useEffect(() => {
		getCategories();
	}, []);

	return { categories, status };
};

export default useGetCategories;
