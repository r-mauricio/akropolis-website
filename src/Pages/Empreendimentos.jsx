import React, { useState } from "react";
import Card from "../Components/Card";
import predios from "../../public/infoPredio";
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
		<div className=" md:container md:mx-auto overflow-hidden flex flex-col bg-white w-full h-full dark:bg-darkGray ">
			<div className="flex flex-col mx-8 mt-24 md:mt-8">
				<h1 className="text-redLogo/60 font-bold text-3xl tracking-wider md:text-4xl dark:text-darkLightGray/70">
					Empreendimentos
				</h1>
				<p className="text-gray-500/80 font-semibold mt-2">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
					vitae.
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
