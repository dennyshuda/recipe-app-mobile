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
	const [loading, setLoading] = useState<boolean>(false);

	const getCategories = async () => {
		try {
			setLoading(true);
			const response = await fetch(BASE_URL + "categories.php");
			const data = await response.json();
			setCategories(data.categories);
		} catch (error) {
			setLoading(false);
			throw new Error("Something wrong when fetch data");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getCategories();
	}, []);

	return { categories, loading };
};

export default useGetCategories;
