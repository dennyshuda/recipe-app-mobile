import { createContext, PropsWithChildren, useState } from "react";

export type TabContextType = {
	selected: string;
	setSelected: React.Dispatch<React.SetStateAction<string>>;
};

export const TabContext = createContext<TabContextType | null>(null);

const TabProvider = ({ children }: PropsWithChildren) => {
	const [selected, setSelected] = useState<string>("Beef");

	return <TabContext.Provider value={{ selected, setSelected }}>{children}</TabContext.Provider>;
};

export default TabProvider;
