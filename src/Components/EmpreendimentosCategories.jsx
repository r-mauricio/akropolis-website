import React from "react";

const EmpreendimentosCategories = ({ categories, filterPredios }) => {
	return (
		<div className="flex flex-row mt-1 space-x-2 ">
			{categories.map((category, id) => {
				return (
					<button
						type="button"
						key={id}
						onClick={() => filterPredios(category)}
						className="bg-transparent  text-gray-500/80 font-semibold text-[10px] uppercase py-1 px-2 border border-gray-500/80 hover:bg-gray-300 hover:text-white  hover:border-transparent rounded dark:hover:bg-ice/70 dark:hover:text-redLogo">
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default EmpreendimentosCategories;
