import React, { useState } from "react";
import Card from "../Components/Card";
import predios from "../../public/infoPredio.js";
import EmpreendimentosCategories from "../Components/EmpreendimentosCategories";

const allCategories = [
	"todos",
	...new Set(predios.map((predio) => predio.category)),
];

const Empreendimentos = () => {
	const [listaPredios, setListaPredios] = useState(predios);
	const [categories, setCategories] = useState(allCategories);

	const filterPredios = (category) => {
		if (category === "todos") {
			setListaPredios(predios);
			return;
		}
		const newPredios = predios.filter((predio) => predio.category === category);
		setListaPredios(newPredios);
	};
	return (
		<div className="overflow-hidden flex flex-col bg-white w-full h-full dark:bg-darkGray md:py-[92px] md:container md:mx-auto ">
			<div className="flex flex-col mx-8 mt-24 md:mt-8">
				<h1 className="text-redLogo/80 font-bold text-2xl md:text-4xl dark:text-darkIce/70">
					Empreendimentos
				</h1>
				<p className="text-darkGray/90 text-lg font-medium tracking-wide mt-2 dark:text-lightLogo">
					Conheça os nossos empreendimentos
				</p>
				<h2
					className="text-redLogo/50 font-bold uppercase text-sm mt-6 md:mt-12 dark:text-darkLightGray
						">
					categoria
				</h2>
				<EmpreendimentosCategories
					categories={categories}
					filterPredios={filterPredios}
				/>
			</div>
			<div
				className="flex flex-col justify-center items-center
					">
				<div className="flex flex-col">
					<Card predios={listaPredios} />
				</div>
			</div>
		</div>
	);
};

export default Empreendimentos;
